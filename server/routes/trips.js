const express = require("express");
const router = express.Router();

const path = require("node:path");

const tripsJSONFile = path.join(__dirname, "../data/trips.json");
const trips = require(tripsJSONFile);

const { getNewId, writeJSONFile } = require("../utils/utils");

router.get("/", (_req, res) => {
  // return all 
  try {
    res.status(200).json(trips);
  } catch (error) {
    console.log("Error retrieving the trips trips", error);
  }
});

// get by ID 

router.get("/:id", (req, res) => {

  const found = trips.find((el) => el.id === req.params.id);
  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ error: ` ID ${req.params.id} not found` });
  }
});

// create new 
router.post("/", (req, res) => {
  console.log(req.body);
  const { name, car, distance } = req.body;
  if ((!name || !car || distance)) {
    return res.status(400).json({
      error: "Please provide details+ for adding an entry",
    });
  }

  const newEntry = {
    name,
    car: {
      year,
      make,
      model,
      mpg,
      co2,
    },
    distance,
    id: getNewId(),
  };

  // update json file with new trip entry
  trips.push(newEntry);
  writeJSONFile(tripsJSONFile, trips);

  // respond to the client with new trips entry and status code 201
  res.status(201).json(newEntry);
});

// http://localhost:8080/api/trips/someExistingId
router.patch("/:id", (req, res) => {
  // some() returns boolean value
  const found = trips.some((el) => el.id === req.params.id);
  if (found) {
    const updatedData= trips.map((el) =>
      el.id === req.params.id ? { ...el, ...req.body } : el
    );
    writeJSONFile(tripsJSONFile, updatedData);

    res.json({ msg: "Dataset Updated", trips: updatedData });
  } else {
    res
      .status(404)
      .json({ errorMessage: `ID: ${req.params.id} not found` });
  }
});

// http://localhost:8080/api/trips/idToBeDeleted
router.delete("/:id", (req, res) => {
  const found = trips.some((el) => el.id === req.params.id);
  if (found) {
    const tripsAfterDeletion = trips.filter(
      (el) => el.id !== req.params.id
    );
    writeJSONFile(tripsJSONFile, tripsAfterDeletion);
    res.json({
      msg: `ID: ${req.params.id} Deleted`,
      trips: tripsAfterDeletion,
    });
  } else {
    res
      .status(404)
      .json({ errorMessage: ` ID: ${req.params.id} not found` });
  }
});

module.exports = router;
