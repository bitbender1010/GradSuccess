import React from "react"
import { jsx, css } from "@emotion/core"
import send from "../images/send.svg"
import contactpic from '../images/contactpic.jpg'


const breakpoints = [375, 576, 768 ]

const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
  )


const inputStyle = {
  background: "none",
  border: "none",
  outline: "none",
  fontSize: "20px",
  borderBottom: "1px solid gray",
  width: "45%",
  fontFamily: "poppins",
  marginBottom: "70px",
}

const pad = {
  marginRight: "10px",
}

const button = {
  width: "250px",
  borderRadius: "50px",
  background: "yellow",
  height: "60px",
  border: "none",
  outline: "none",
  justifySelf: "center",
  color: "#111",
  fontWeight: 'bold',
  fontFamily: "poppins",
  margin: "0px auto",
  cursor: "pointer",
}

const MessageUs = () => (
  <div css={{
    maxWidth: '900px',
    margin: '0 auto'
  }}>
    <div css={{  height: "700px", [mq[2]]: {
      margin: "30px 10px 0px 15px"
  } }}>
      <h1> Let's Talk </h1>
      {/* */}
      <div css={{ display: "flex" }}>
        <div css={{ width: "50%", height: "300px", [mq[2]]: {
          width: "100%"
      } }}>
          <p>
            {" "}
            We’d love to hear what you are working on. Drop us a note here and
            we’ll get back to you within 24 hours.{" "}
          </p>
          <br /> <br />
          <form css={{ display: "flex", flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="Your Name"
              css={css`
                ${inputStyle};
                margin-right: 5%;
              `}
            />
            <input type="text" placeholder="Email Address" css={inputStyle} />
            <br /> <br />
            <input
              type="text"
              placeholder="Phone Number"
              css={css`
                ${inputStyle};
                margin-right: 5%;
              `}
            />
            <input
              type="text"
              placeholder="Message"
              css={css`
                ${inputStyle};
                width: 95%;
              `}
            />
            {/* Describe */}
            <button css={button}> Send Message </button>
          </form>
        </div>

        <div
          css={{
            width: "50%",
            height: "300px",
            background: "blue",
            alignItems: "flex-end",
            marginLeft: "50px",
            [mq[2]]: {
              display: 'none'
          }
          }}
        >
          <img src={contactpic} />
        </div>
      </div>

    </div>
  </div>
)

export default MessageUs
