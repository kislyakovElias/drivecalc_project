import { useState, useEffect } from "react";
import AddModal from "../addModal/AddModal";
import { Table, Card, Col, Row, Button } from "antd";

import "./ToDoComponent.scss";


const dataSource = [
  {
    key: "1",
    table: "todo",
    task: "Buy eggs",
    amount: 5,
    description: "Untill Sunday",
  },
  {
    key: "2",
    table: "progress",
    task: "Change Tires",
    amount: 400,
    description: "ASAP",
  },
];

const columns = [
  {
    title: "Task",
    dataIndex: "task",
    key: "task",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

function ToDoComponent() {
  const [data, setData] = useState(dataSource);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col className="site-table" span={8}>
            <Card className="card" title="ToDo" bordered={true}>
              {data
                .filter((el) => el.table === "todo")
                .map((el) => (
                  <li>
                    <Button className="btn_arrow">←</Button> {el.task}
                    <Button className="btn_arrow">→</Button>
                  </li>
                ))}
            </Card>
          </Col>
          <Col className="site-table" span={8}>
            <Card className="card" title="Progress" bordered={true}>
              {data
                .filter((el) => el.table === "progress")
                .map((el) => (
                  <li>
                    <Button className="btn_arrow">←</Button> {el.task}
                    <Button className="btn_arrow">→</Button>
                  </li>
                ))}
            </Card>
          </Col>
          <Col className="site-table" span={8}>
            <Card className="card" title="Done" bordered={true}>
              {data
                .filter((el) => el.table === "done")
                .map((el) => (
                  <li>
                    <Button className="btn_arrow">←</Button> {el.task}
                    <Button className="btn_arrow">→</Button>
                  </li>
                ))}
            </Card>
          </Col>
        </Row>
      </div>
      <br />
      <h4>Task List:</h4>
      <div>
        Add the task <AddModal data={data} setData={setData} />
        <Table dataSource={data} columns={columns} />
      </div>
    </>
  );
}

export default ToDoComponent;
