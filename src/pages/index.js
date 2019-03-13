import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeHero from "../components/homeHero"
import TitleAndText from "../components/titleNtext"
import UniDivider from "../components/uniDivider"
import Steps from "../components/steps"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`success`, `application`, `university`]} />
    <HomeHero button="Get Started" imgUrl="url('./static/images/bg-image.jpg')"/>
    <TitleAndText
      title="Apply With Confidence"
      text="There is something very important that should be here that we do not have currently however, we're going to be putting it in very very soon"
    />
    <UniDivider />
    <Steps />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
