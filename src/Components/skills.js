import { LinearProgress } from "@mui/material";
export default function Skills({ skill, percent }) {
  return (
    <div className="col-md-4  col-sm-5 col-sx-3 ">
      <div
        className="d-flex"
        style={{ justifyContent: "space-between", }}
      >
        <h6>{skill}</h6>
        <h6>{percent}%</h6>
      </div>
      <LinearProgress variant="determinate"  sx={{height:'8px',borderRadius:'10px',marginTop:'5px'}} color="primary" value={percent} />
    </div>
  );
}
