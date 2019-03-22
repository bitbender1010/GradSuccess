import { Link } from "gatsby"
import React from "react"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Image from "./logoImage"
import fb from "../images/fb.svg"
import tw from "../images/tw.svg"
import ig from "../images/ig.svg"

const slash = css({
  fontSize: "20px",
  fontWeight: "bold"
})

const iconRight = css({
  marginRight: "20px"
})
const Footer = () => (
  <div css={{ margin: "0 auto" }}>
    <div
      css={{
        display: "flex",
        margin: "0px auto",
        color: 'gray',
        width: "70%",
        paddingTop: "50px",
      }}
    >
      {" "}
      <div
        css={{
          width: "60%",
          fontSize: "15px",
        }}
      >
        <div>
          Home Page <span css={slash}> / </span>
          Services and Prices <span css={slash}> / </span>
          About Us <span css={slash}> / </span>
          Contact <span css={slash}> / </span> Blog{" "}
          <span css={slash}> / </span>
          Privacy Policy <span css={slash}> / </span>
          Website Terms of Use <span css={slash}> / </span>
          Disclaimer <span css={slash}> / </span>
          Client Terms of Service
        </div>
        <br /> <br />
        <div>
          GradSuccess Suite A54 Prima-Tek Plaza Egbeda Lagos
        </div>
      </div>
      <div
        css={{
          width: "40%",
        }}
      >
        <div>
          <Link to="/">
            <div
              css={{
                width: "200px",
                margin: ".5em auto .1em",
                float: "right",
              }}
            >
              <Image />
            </div>
          </Link>
        </div>
        {/* Social Icons*/}
        <div
          css={{
            clear: "both",
            float: "right",
            margin: "0px auto",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {/*Social Icons butons*/}
          <img
            src={fb}
            alt="Facebook"
            css={iconRight}
          />
          <img
            src={tw}
            alt="Twitter"
            css={iconRight}
          />
          <img
            src={ig}
            alt="Instagram"
            css={iconRight}
          />
        </div>
      </div>
    </div>
    <div css={{width: '70%',
  margin: '0 auto'}}>
    © {new Date().getFullYear()}, Built By 
    <a href="https://www.phosmobile.org"> PhosMobile</a>
    <h2 css={theme => ({ color: theme.color })}> HELLO FOOTER </h2>
    </div>
  </div>
)

export default Footer
