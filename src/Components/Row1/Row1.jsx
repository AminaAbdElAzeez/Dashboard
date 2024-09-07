import {
  MailOutlined,
  DollarOutlined,
  CompassOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "./Row1.css";
import Row1PieChart from "../Row1PieChart/Row1PieChart";

function Row1() {
  return (
    <div className="row1-container">
      <div className="row1-item">
        <div className="row1-left">
          <MailOutlined className="row1-icon" />
          <p className="row-1-desc">12,361</p>
          <h4 className="row1-title">Emails Sent</h4>
        </div>
        <div className="row1-right">
          <Row1PieChart colors={["#4caf50", "#ff9800", "#f44336"]} />
        </div>
      </div>
      <div className="row1-item">
        <div className="row1-left">
          <DollarOutlined className="row1-icon" />
          <p className="row-1-desc">431,225</p>
          <h4 className="row1-title">Sales Obtained</h4>
        </div>
        <div className="row1-right">
          <Row1PieChart colors={["#2196f3", "#ffeb3b", "#9c27b0"]} />
        </div>
      </div>
      <div className="row1-item">
        <div className="row1-left">
          <UserAddOutlined className="row1-icon" />
          <p className="row-1-desc">32,441</p>
          <h4 className="row1-title">New Clients</h4>
        </div>
        <div className="row1-right">
          <Row1PieChart colors={["#3f51b5", "#00bcd4", "#8bc34a"]} />
        </div>
      </div>
      <div className="row1-item">
        <div className="row1-left">
          <CompassOutlined className="row1-icon" />
          <p className="row-1-desc">1,325,134</p>
          <h4 className="row1-title">Traffic Received</h4>
        </div>
        <div className="row1-right">
          <Row1PieChart colors={["#795548", "#e91e63", "#607d8b"]} />
        </div>
      </div>
    </div>
  );
}

export default Row1;
