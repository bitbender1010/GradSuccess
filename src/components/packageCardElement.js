import React from "react"
import PryButton from "./pryButton"
import {Link} from 'gatsby'

const PackageCardElement = ({ imgUrl, title, text, buttonUrl }) => (
  <div
    style={{
      background: "#19a99d",
      width: "250px",
      borderRadius: '5px',
      boxShadow: '0px 5px 10px rgba(59,132,117,0.5)'
    }}
  >
    <img src={imgUrl} alt="image for package" style={{marginBottom: '5px'}}/>
    <div
      style={{
        color: "white",
      padding: '0 1em 1em'
      }}
    >
      <h4 style={{marginBottom: '5px'}}>{title}</h4>
      <p style={{ fontSize: "13px", lineHeight: 1.2 }}>{text}</p>
      <Link to={buttonUrl}><PryButton small={true} text="Get Started" /></Link>
    </div>
  </div>
)

export default PackageCardElement
