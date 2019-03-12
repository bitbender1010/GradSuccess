import { Link } from "gatsby"
import React from "react"
import Image from "./logoImage"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">
        <div
          style={{
            width: "150px",
            margin: ".5em auto .1em",
          }}
        >
          <Image />
        </div>
      </Link>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          padding: ".3em 8em",
          textTransform: "uppercase",
          background: "#4A4A4A",
          color: "white",
          fontWeight: "700",
          fontSize: ".9em",
        }}
      >
        <Link to="/Admissions">Admissions</Link>
        <Link to="/Careers">Job/Careers</Link>
        <Link to="/Scholarships">Scholarships</Link>
        <Link to="About">About Us</Link>
        <Link to="Blog">Blog</Link>
        <Link to="Contact">Contact</Link>
      </ul>
    </div>
  </header>
)

export default Header
