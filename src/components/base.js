import React from "react";

function Base ({ isShow }) {
  return (
    <div
      className="base-div"
      style={{
        display: `${isShow}`
      }}
    >
      <p className="heading">Welcome to Triangle Calc</p>
      <p style={{ opacity: "0.8" }}>Select a tab to get Started.</p>
    </div>
  );
};

export default Base;
