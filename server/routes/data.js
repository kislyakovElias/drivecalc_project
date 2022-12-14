const e = require("express");
const express = require("express");
const router = express.Router();

const path = require("node:path");

const dataJSONFile = path.join(__dirname, "../data/data.json");
const data = require(dataJSONFile);

const { getNewId, writeJSONFile } = require("../utils/utils");

router.get("/", (_req, res) => {
  // return all 
  try {
    res.status(200).json(data);
  } catch (error) {
    console.log("Error retrieving the data", error);
  }
});

// get by ID 

router.get("/:id", (req, res) => {

  const found = data.find((el) => el.id === req.params.id);
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ error: ` ID ${req.params.id} not found` });
  }
});

// create new 
router.post("/", (req, res) => {
  console.log(req.body);
  const { name, email, course } = req.body;
  if (!name || !email || !course) {

    return res.status(400).json({
      error: "Please provide details+ for adding an entry",
    });
  }

  const newEntry = {
    name,
    email,
    course,
    id: getNewId(),
  };

  // update json file with new data entry
  data.push(newEntry);
  writeJSONFile(dataJSONFile, data);

  // respond to the client with new data entry and status code 201
  res.status(201).json(newEntry);
});

// http://localhost:8080/api/data/someExistingId
router.patch("/:id", (req, res) => {
  // some() returns boolean value
  const found = data.some((el) => el.id === req.params.id);
  if (found) {
    const updatedData= data.map((el) =>
      el.id === req.params.id ? { ...el, ...req.body } : el
    );
    writeJSONFile(dataJSONFile, updatedData);

    res.json({ msg: "Dataset Updated", data: updatedData });
  } else {
    res
      .status(404)
      .json({ errorMessage: `ID: ${req.params.id} not found` });
  }
});

// http://localhost:8080/api/data/idToBeDeleted
router.delete("/:id", (req, res) => {
  const found = data.some((el) => el.id === req.params.id);
  if (found) {
    const dataAfterDeletion = data.filter(
      (el) => el.id !== req.params.id
    );
    writeJSONFile(dataJSONFile, dataAfterDeletion);
    res.json({
      msg: `ID: ${req.params.id} Deleted`,
      data: dataAfterDeletion,
    });
  } else {
    res
      .status(404)
      .json({ errorMessage: ` ID: ${req.params.id} not found` });
  }
});

module.exports = router;
