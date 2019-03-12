import React from "react"
import step1 from "../images/step1.svg"
import step2 from "../images/step2.svg"
import step3 from "../images/step3.svg"

const ImgStyles = {
  width: "100px",
  marginBottom: 0,
}

const DivStyles = {
  padding: "2em",
  flex: 1,
}

const TextStyles = {
  fontSize: "14px",
  textAlign: 'justify',
  textJustify: 'inter-word',
}

const Steps = () => (
  <div
    style={{
      display: "flex",
      padding: "2.3em 10em",
    }}
  >
    <div style={DivStyles}>
      <img src={step1} alt="step 1 icon" style={ImgStyles} />
      <h4
        style={{
          margin: "7px 0",
        }}
      >
        Let's know your needs
      </h4>
      <p style={TextStyles}>
        Your advancement in career or academia is of interest to us. We have
        garnered the skills to fine-tune your essays and resumes for the best
        results so don't hesitate to engage us.
      </p>
    </div>
    <div style={DivStyles}>
      <img src={step2} alt="step 1 icon" style={ImgStyles} />
      <h4
        style={{
          margin: "7px 0",
        }}
      >
        Let us know your needs
      </h4>
      <p style={TextStyles}>
        The average associate at gradsuccess has a history of accomplishments at
        high-end institutions and organizations, so be rest-assured you're
        entrusting your work to the very best.
      </p>
    </div>
    <div style={DivStyles}>
      <img src={step3} alt="step 1 icon" style={ImgStyles} />
      <h4
        style={{
          margin: "7px 0",
        }}
      >
        Let us know your needs
      </h4>
      <p style={TextStyles}>
        We always exceed your expectations, so by the time you're set to apply,
        you're sure success is only one click away.
      </p>
    </div>
  </div>
)

export default Steps
