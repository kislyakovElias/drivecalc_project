import React, { useState } from "react";
import { Button, Modal, Cascader, Input } from "antd";

const AddModal = (props) => {
    const [year, setYear] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log(year);
    console.log(amount);
    console.log(description);
    console.log(props.data, "data-here");
    props.setData([
      ...props.data,
      {
        key: Math.random() * 100,
        task: year,
        table: "todo",
        amount: amount,
        description: description,
      },
    ]);
    setYear("");
    setAmount("");
    setDescription("");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const yearChange = (e) => {
    e.preventDefault();
    setYear(e.target.value);
    
  }
  const amountChange = (e) => {
    e.preventDefault();
    setAmount(e.target.value)

  }
  const descriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);

  }

  return (
    <>
      <Button className="modalButton" type="info" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input value={year} onChange={yearChange} placeholder="Basic usage" />
        <Input
          value={amount}
          onChange={amountChange}
          placeholder="Basic usage"
        />
        <Input
          value={description}
          onChange={descriptionChange}
          placeholder="Basic usage"
        />
      </Modal>
    </>
  );
};
export default AddModal;
