import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import placeholderInstance from "../../../Utils/placeholderInstance";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: "10%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "25%",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
    width: "10%",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: "20%",
  },
  {
    title: "Access",
    dataIndex: "access",
    key: "access",
    width: "15%",
    render: (access) => {
      let color = access === "Admin" ? "#cd201f" : "#3b5999";
      return <Tag color={color}>{access.toUpperCase()}</Tag>;
    },
  },
];

const Team = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    placeholderInstance
      .get("/users")
      .then((response) => {
        const users = response.data.map((user) => ({
          key: user.id,
          id: user.id,
          phone: user.phone.slice(0, 12),
          name: user.name,
          email: user.email,
          age: Math.floor(Math.random() * 50) + 20,
          access: Math.random() > 0.5 ? "Admin" : "User",
        }));
        setData(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {};

  return (
    <div>
      <h2 className="dash-title">TEAM</h2>
      <p>Managing the Team Members</p>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={{ pageSize: 6 }}
        scroll={{ x: "1000px" }}
      />
    </div>
  );
};

export default Team;
