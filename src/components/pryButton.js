import React from "react"

const PryButton = ({ text }) => (
  <div>
    <button
      style={{
        color: "#47DCBC",
        textAlign: "center",
        minWidth: "300px",
        minHeight: "50px",
        fontSize: "25px",
        backgroundColor: "yellow",
        border: "none",
        margin: "0px auto",
      }}
    >
      {text}
    </button>
  </div>
)

export default PryButton
