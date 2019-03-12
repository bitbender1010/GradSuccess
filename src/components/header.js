import { Link } from "gatsby"
import React from "react"
import Image from "./logoImage"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">
          <div style={{
        width: '150px',
        margin: '.8em auto'
        }}><Image /></div>
      </Link>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-around',
        padding: '0 8em',
        textTransform: 'uppercase',
        background: '#4A4A4A'
      }}>
        <Link>
          Admissions
        </Link>
        <li>
          Job/Careers
        </li>
        <li>
          Scholarships
        </li>
        <li>
          About Us
        </li>
        <li>
          Blog
        </li>
        <li>
          Contact
        </li>
      </ul>
    </div>
  </header>
)



export default Header
