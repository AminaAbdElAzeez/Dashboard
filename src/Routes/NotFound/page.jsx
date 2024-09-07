import { Button } from "antd";
import { replace, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "./NotFound.css";

function NotFoundPage() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/", replace);
  };
  return (
    <div className="not-found">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Button
        onClick={handleSignIn}
        type="primary"
        icon={<UserOutlined />}
        style={{ padding: "20px", fontSize: "20px" }}
      >
        Sign in
      </Button>
    </div>
  );
}

export default NotFoundPage;
