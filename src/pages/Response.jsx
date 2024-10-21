import React from "react";
import "./Response.css";

function Response() {
  return (
    <div className="thanks-container">
      <div className="thanks-content">
        <h2>Thanks for Your Response</h2>
        <p>
          We appreciate your time and effort in filling out the form. Stay tuned
          for more updates!
        </p>
        <img
          src="/public/thanksGIF.gif"
          width="300"
          height="295"
          alt="Thank You Animation"
        />
      </div>
    </div>
  );
}

export default Response;
