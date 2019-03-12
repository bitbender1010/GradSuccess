import React from "react"
import step1 from "../images/step1.svg"
import step2 from "../images/step2.svg"
import step3 from "../images/step3.svg"

const ImgStyles = {
  width: "100px",
  marginBottom: 0
}

const DivStyles = {
    padding: '10px'
}

const Steps = () => (
  <div style={{
      display: 'flex',
      padding: '2.5em 6em',
      
  }}>
    <div style={DivStyles}>
      <img src={step1} alt="step 1 icon" style={ImgStyles} />
      <h4>Let's know your needs</h4>
      <p>
        Your advancement in career or academia is of interest to us. We have
        garnered the skills to fine-tune your essays and resumes for the best
        results so don't hesitate to engage us.
      </p>
    </div>
    <div style={DivStyles}>
      <img src={step2} alt="step 1 icon" style={ImgStyles} />
      <h4>Let us know your needs</h4>
      <p>
      The average associate at gradsuccess has a history of accomplishments at high-end institutions and organizations, so be rest-assured you're entrusting your work to the very best.
      </p>
    </div>
    <div style={DivStyles}>
      <img src={step3} alt="step 1 icon" style={ImgStyles} />
      <h4>Let us know your needs</h4>
      <p>
      We always exceed your expectations, so by the time you're set to apply, you're sure success is only one click away.
      </p>
    </div>
  </div>
)

export default Steps
