import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
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
    width: "15%",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
    width: "10%",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    width: "15%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "15%",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: "15%",
    render: (text, record) =>
      `${record.address.street}, ${record.address.city}, ${record.address.zipcode}`,
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    width: "10%",
  },
  {
    title: "Zip Code",
    dataIndex: "zipcode",
    key: "zipcode",
    width: "10%",
  },
];

const Contacts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    placeholderInstance.get("/users").then((response) => {
      const transformedData = response.data.map((user) => ({
        key: user.id,
        id: user.id,
        name: user.name,
        age: Math.floor(Math.random() * 50) + 20,
        phone: user.phone,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
          zipcode: user.address.zipcode,
        },
        city: user.address.city,
        zipcode: user.address.zipcode,
      }));
      setData(transformedData);
    });
  }, []);

  return (
    <div>
      <h2 className="dash-title">CONTACTS</h2>
      <p>List of Contacts for Future Reference</p>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "1000px" }}
        rowSelection={{
          type: "checkbox",
        }}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>
              {`My Name is ${record.name}, I'am ${
                record.age
              } Years Old. My Email is ${
                record.email
              }, My Phone is ${record.phone.slice(0, 12)} . I'am from ${
                record.address.city
              } , My Address is ${record.address.street}, `}
            </p>
          ),
        }}
      />
    </div>
  );
};

export default Contacts;
