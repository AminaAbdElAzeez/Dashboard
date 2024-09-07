import Row1 from "../../../Components/Row1/Row1";
import Row2 from "../../../Components/Row2/Row2";
import Row3 from "../../../Components/Row3/Row3";
import "./Root.css";

function Root() {
  return (
    <div>
      <h2 className="dash-title">DASHBOARD</h2>
      <p>Welcome to your dashboard</p>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

export default Root;
