import React, { Fragment, useState } from "react";
import Typical from "react-typical";
 const TypicalText = ({ text, duration }) => {
    const steps = ["", 500, text[0], duration];
    for (let i = 1; i < text.length; i++) {
      steps.push(steps[i * 2] + text[i], duration);
    }
    steps.push(text, 3000);
  
    return (
      <div
        style={{
        
          fontSize: 20,
          fontWeight: "900",
          color: "#888888"
        }}
      >
        {/* <div style={{ position: "absolute", opacity: 0.15 }}>{text}</div> */}
        <Typical
          steps={steps}
          loop={Infinity}
          style={{ padding: 0 }}
        />
      </div>
    );
  };

  export default TypicalText;