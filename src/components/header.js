import { Link } from "gatsby"
import React from "react"
import{ jsx, css } from "@emotion/core"
import Image from "./logoImage"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">
        <div
          css={{
            width: "150px",
            margin: ".5em auto .1em",
          }}
        >
          <Image />
        </div>
      </Link>
      <ul
        css={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          padding: ".3em 8em",
          textTransform: "uppercase",
          background: "#4A4A4A",
          color: "white",
          fontWeight: "700",
          fontSize: ".9em",
          marginBottom: '0'
        }}
      >
        <Link to="/admissions" activeStyle={{color: 'white'}} >Admissions</Link>
        <Link to="/careers" activeStyle={{color: 'white'}} >Job/Careers</Link>
        <Link to="/scholarships" activeStyle={{color: 'white'}} >Scholarships</Link>
        <Link to="about" activeStyle={{color: 'white'}} >About Us</Link>
        <Link to="blog" activeStyle={{color: 'white'}} >Blog</Link>
        <Link to="contact" activeStyle={{color: 'white'}}>Contact</Link>
      </ul>
    </div>
  </header>
)

export default Header
