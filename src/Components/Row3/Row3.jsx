import "./Row3.css";
import Pie from "../Pie/Pie";
import Bar from "../Bar/Bar";

function Row3() {
  return (
    <div className="row3">
      <div className="row3-item">
        <h2>Campaign</h2>

        <Pie />
      </div>
      <div className="row3-item">
        <h2>Sales Quantity</h2>
        <Bar />
      </div>
    </div>
  );
}

export default Row3;
