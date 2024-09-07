import { useEffect, useState } from "react";
import "./Row2.css";
import { Table, Tag } from "antd";
import Line from "../Line/Line";
import placeholderInstance from "../../Utils/placeholderInstance";

function Row2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    placeholderInstance
      .get("/users")
      .then((response) => {
        const usersWithSalaries = response.data.map((user) => ({
          key: user.id,
          id: user.id,
          name: user.name,
          salary: Math.floor(Math.random() * 10000) + 3000,
        }));
        setUsers(usersWithSalaries);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      width: "15%",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "55%",
      align: "center",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      sorter: (a, b) => a.salary - b.salary,
      width: "30%",
      align: "center",
      render: (salary) => (
        <Tag color="#cd201f" style={{ textAlign: "center" }}>
          {salary}$
        </Tag>
      ),
    },
  ];

  return (
    <div className="row2">
      <div className="row2-item">
        <h2 className="">Revenue Generated</h2>

        <Line />
      </div>
      <div className="row2-item">
        <h2 className="">Recent Transactions</h2>
        <Table
          dataSource={users}
          columns={columns}
          pagination={{ pageSize: 6 }}
          scroll={{ x: "400px" }}
        />
      </div>
    </div>
  );
}

export default Row2;
