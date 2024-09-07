import { Fragment, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  ContactsOutlined,
  LineChartOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  BarChartOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Avatar, Modal, theme } from "antd";
import { Link, Outlet, replace, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../../Store/Actions/AuthActions";

const { Header, Sider, Content } = Layout;

function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const token = useSelector((state) => state.token);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    setIsModalVisible(true);
  };

  const confirmLogout = () => {
    dispatch(removeToken());
    navigate("/", replace);
    setIsModalVisible(false);
  };

  const cancelLogout = () => {
    setIsModalVisible(false);
  };

  const menuItems = [
    {
      label: <Link to="/dashboard">Dashboard</Link>,
      key: "1",
      icon: <HomeOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: <Link to="team">Manage Team</Link>,
      key: "2",
      icon: <UsergroupAddOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: <Link to="contacts">Contacts Info</Link>,
      key: "3",
      icon: <ContactsOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: <Link to="form">Profile Form</Link>,
      key: "4",
      icon: <UserOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: <Link to="calendar">Calendar</Link>,
      key: "5",
      icon: <CalendarOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: <Link to="bar">Bar Chart</Link>,
      key: "6",
      icon: <BarChartOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: <Link to="pie">Pie Chart</Link>,
      key: "7",
      icon: <PieChartOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: <Link to="line">Line Chart</Link>,
      key: "8",
      icon: <LineChartOutlined style={{ fontSize: "20px" }} />,
    },
  ];

  return (
    <Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={{ padding: "100px 15px 20px 15px", textAlign: "center" }}>
            <Avatar
              icon={<UserOutlined style={{ fontSize: "20px" }} />}
              style={{
                marginBottom: "15px",
                width: collapsed ? "40px" : "65px",
                height: collapsed ? "40px" : "65px",
                transition: "width 0.5s , height 0.5s",
                backgroundColor: "#bfbfbf",
              }}
            />
            {!collapsed && token && (
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  marginBottom: "10px",
                  textTransform: "capitalize",
                }}
              >
                {name ? name : "User"}
              </h4>
            )}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            items={menuItems}
            defaultSelectedKeys={["1"]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "#001529",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: "16px",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "#fff",
              }}
            />
            {token && (
              <Button
                onClick={handleLogout}
                type="primary"
                icon={<UserOutlined />}
                style={{ padding: "15px" }}
              >
                Log out
              </Button>
            )}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      <Modal
        title="Confirm Logout"
        open={isModalVisible}
        onOk={confirmLogout}
        onCancel={cancelLogout}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure you want to log out🖐🤝?</p>
      </Modal>
    </Fragment>
  );
}

export default DashboardLayout;
