import React from "react";

const HeadingTitle = ({ title }) => {
  return (
    <div className="heading-tile" style={divStyle}>
      <h2 style={h2Style}>{title}</h2>
    </div>
  );
};
const divStyle = {
  padding: "10px 30px",
  backgroundColor: "#fff",
};
const h2Style = {
  color: "var(--primary-color)",
  fontSize: "30px",
  fontWeight: "500",
  borderBottom: "2px solid var(--primary-color)",
  width: "max-content",
  paddingBottom: "5px",
};

export default HeadingTitle;
