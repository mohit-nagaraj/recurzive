
import Button from "./base/button";
import { FaMicrophone } from "react-icons/fa";
const ActiveCallDetail = ({ assistantIsSpeaking, volumeLevel, onEndCallClick }) => {
  return (
    <div>
      <button
      className="glow-icon"
      style={{
        backgroundColor: "white",
        color: "black",
        border: "2px solid #ddd",
        borderRadius: "50%",
        padding: "2rem ",
        fontSize: "16px",
        outline: "none",
        // boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <FaMicrophone size={36} color={assistantIsSpeaking ? "#3ef07c" : "#f03e3e"}/>
    </button>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button type="label" label="End Call" onClick={onEndCallClick} />
      </div>
    </div>
  );
};

export default ActiveCallDetail;
