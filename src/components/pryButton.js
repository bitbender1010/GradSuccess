import React from "react"

const PryButton = ({ text }) => (
  <div>
    <button
      style={{
        color: "#47DCBC",
        textAlign: "center",
        minWidth: "200px",
        minHeight: "50px",
        fontSize: "17px",
        backgroundColor: "yellow",
        border: "none",
        margin: "0px auto",
        fontFamily: `"Poppins", sans-serif`,
        fontWeight: '700',
        cursor: 'pointer',
        textShadow: '1px 1px 3px rgba(0,0,0,0.2)'
      }}
    >
      {text}
    </button>
  </div>
)

export default PryButton
