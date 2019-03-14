import React from "react"
import PryButton from "./pryButton"

const PackageCardElement = ({ imgUrl, title, text }) => (
  <div
    stlye={{
      width: "305px",
    }}
  >
    <img src={imgUrl} alt="image for package" />
    <div style={{
        color: 'white'
    }}>
      <h2>{title}</h2>
      <p>{text}</p>
      <PryButton small={true} text="Get Started" />
    </div>
  </div>
)

export default PackageCardElement
