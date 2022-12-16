import React, { useState } from "react";
import { Button, Modal, Cascader, Input } from "antd";

const AddModal = (props) => {
    const [task, setTask] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    console.log(task);
    console.log(amount);
    console.log(description);
    console.log(props.data, "data-here");
    props.setData([...props.data, {
      key: Math.random()*100,
      task: task,
      table: "todo",
      amount: amount,
      description: description,
    }]);
    setTask("");
    setAmount("");
    setDescription("");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const taskChange = (e) => {
    e.preventDefault();
    setTask(e.target.value)
    
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
        +Add
      </Button>
      <br />
      <br />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input value={task} onChange={taskChange} placeholder="Input task" />
        <Input
          value={amount}
          onChange={amountChange}
          placeholder="Input amount"
        />
        <Input
          value={description}
          onChange={descriptionChange}
          placeholder="Input description"
        />
      </Modal>
    </>
  );
};
export default AddModal;
