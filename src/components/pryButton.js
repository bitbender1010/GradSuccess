import React from "react"
import Radium from "radium"

class PryButton extends React.Component {
  render() {
    return (
      <div>
        <button style={this.props.small ? SmallButtonStyles : BigButtonStyles}>{this.props.text}</button>
      </div>
    )
  }
}

PryButton = Radium(PryButton)

const BigButtonStyles = {
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
  boxShadow: '0 3px 10px rgba(0,0,0,0.5)'
}

const SmallButtonStyles = {
  color: "#111",
  textAlign: "center",
  minWidth: "100px",
  minHeight: "30px",
  fontSize: "12px",
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
    boxShadow: '0 1px 10px rgba(0,0,0,0.2)'
  },
  transition: "all .2s ease-out",
  boxShadow: '0 3px 10px rgba(0,0,0,0.5)'
}


export default PryButton
