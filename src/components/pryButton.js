import React from "react"
import Radium from "radium"

class PryButton extends React.Component {
  render() {
    return (
      <div>
        <button style={ButtonStyles}>{this.props.text}</button>
      </div>
    )
  }
}

PryButton = Radium(PryButton)

const ButtonStyles = {
  color: "#111",
  textAlign: "center",
  minWidth: "200px",
  minHeight: "50px",
  fontSize: "17px",
  background: "yellow",
  border: "none",
  margin: "0px auto",
  fontFamily: `"Poppins", sans-serif`,
  fontWeight: "700",
  cursor: "pointer",
  textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
  ":hover": {
    background: "#47dcbc",
    color: "yellow",
  },
  transition: "all .2s ease-out",
}
export default PryButton
