import React, { useState } from "react";
import "./Calendar.css";
import { Badge, Calendar, Modal, Form, Input, Select, Button } from "antd";

const { Option } = Select;

const initialEvents = {
  "2024-09-08": [
    { type: "warning", content: "This is warning event." },
    { type: "success", content: "This is usual event." },
  ],
  "2024-09-10": [
    { type: "warning", content: "This is warning event." },
    { type: "success", content: "This is usual event." },
    { type: "error", content: "This is error event." },
  ],
  "2024-09-15": [
    { type: "warning", content: "This is warning event" },
    { type: "success", content: "This is very long usual event......" },
    { type: "error", content: "This is error event 1." },
    { type: "error", content: "This is error event 2." },
    { type: "error", content: "This is error event 3." },
    { type: "error", content: "This is error event 4." },
  ],
};

const CalendarPage = () => {
  const [events, setEvents] = useState(initialEvents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventList, setEventList] = useState([]);
  const [isEventsModalVisible, setIsEventsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const getListData = (value) => {
    const dateString = value.format("YYYY-MM-DD");
    return events[dateString] || [];
  };

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const handleDateSelect = (date) => {
    const selectedDateStr = date.format("YYYY-MM-DD");
    setSelectedDate(selectedDateStr);
    setEventList(events[selectedDateStr] || []);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newEvent = {
          type: values.type,
          content: values.content,
        };
        setEvents((prevEvents) => ({
          ...prevEvents,
          [selectedDate]: [...(prevEvents[selectedDate] || []), newEvent],
        }));
        setIsModalOpen(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsEventsModalVisible(false);
  };

  const toggleEventsModal = () => {
    setIsEventsModalVisible(!isEventsModalVisible);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <h2 className="dash-title">EVENTS</h2>
        <p>Create a New Event</p>
        <Button className="toggle-sidebar-btn" onClick={toggleEventsModal}>
          {isEventsModalVisible ? "Hide All Events" : "Show All Events"}
        </Button>
        <Calendar cellRender={cellRender} onSelect={handleDateSelect} />
        <Modal
          title="Add Event"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Add Event"
          cancelText="Cancel"
        >
          <Form form={form} layout="vertical">
            <Form.Item
              name="type"
              label="Event Type"
              rules={[
                { required: true, message: "Please select an event type!" },
              ]}
            >
              <Select placeholder="Select an event type">
                <Option value="success">Success</Option>
                <Option value="warning">Warning</Option>
                <Option value="error">Error</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="content"
              label="Event Content"
              rules={[
                { required: true, message: "Please input event content!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>

      <Modal
        open={isEventsModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <h2 style={{ color: "cd201f" }}>All Events</h2>
        <ul className="events-list">
          {Object.entries(events).map(([date, eventList]) => (
            <li key={date}>
              <strong>{date}:</strong>
              <ul>
                {eventList.map((event, index) => (
                  <li key={index}>
                    <Badge status={event.type} text={event.content} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default CalendarPage;
