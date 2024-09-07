import { Flex, Spin } from "antd";

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

const Spinner = () => {
  return (
    <Flex
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    </Flex>
  );
};

export default Spinner;
