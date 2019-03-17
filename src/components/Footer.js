import { Link } from "gatsby"
import React from "react"
import Image from "./logoImage"
import fb from "../images/fb.svg"
import tw from "../images/tw.svg"
import ig from "../images/ig.svg"

const slash = {
  color: "yellow",
  fontSize: "20px",
  fontWeight: "bold",
}

const Footer = () => (
  <div style={{margin: '0 auto'}}>
    <div
      style={{
        display: "flex",
        margin: "0px auto",
        color: "gray",
        width: "70%",
        paddingTop: "50px",
      }}
    >
      {" "}
      <div
        style={{
          width: "60%",
          fontSize: "15px",
        }}
      >
        <div>
          {" "}
          Home Page <span style={slash}> / </span>
          Services and Prices <span style={slash}> / </span>
          About Us <span style={slash}> / </span>
          Contact <span style={slash}> / </span> Blog{" "}
          <span style={slash}> / </span>
          Privacy Policy <span style={slash}> / </span>
          Website Terms of Use <span style={slash}> / </span>
          Disclaimer <span style={slash}> / </span>
          Client Terms of Service{" "}
        </div>{" "}
        <br /> <br />
        <div>
          {" "}
          GradSuccess 1171 S. Robertson Blvd. #140 Los Angeles CA 90035 +1 (310)
          815-9553 © 2019 GradSuccess{" "}
        </div>
      </div>
      <div
        style={{
          width: "40%",
        }}
      >
        {" "}
        {/* Right Part*/}
        <div style={{}}>
          <Link to="/">
            <div
              style={{
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
          style={{
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
            style={{
              marginRight: "20px",
            }}
          />
          <img
            src={tw}
            alt="Twitter"
            style={{
              marginRight: "20px",
            }}
          />
          <img
            src={ig}
            alt="Instagram"
            style={{
              marginRight: "10px",
            }}
          />
        </div>
        
      </div>
      
    </div>
    © {new Date().getFullYear()}, Built By
            <a href="https://www.phosmobile.org">PhosMobile</a>
  </div>
)

export default Footer
