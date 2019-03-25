import React from "react"
import Modal from "react-responsive-modal"
import{ jsx, css } from "@emotion/core"

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "../components/homeHero"
import TitleAndText from "../components/titleNtext"
import UniDivider from "../components/uniDivider"
import Steps from "../components/steps"
import FeaturedTestimonial from "../components/featuredTestimonial"
import BigCountCTA from "../components/bigCountCTA"


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }
  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <Layout>
        <SEO title="Home" keywords={[`success`, `application`, `university`]}/>
        <HomeHero
          title="Get expert help with your applications"
          text="We help young graduates and career people achieve their long and short
        term academic and professional goals"
          button="Get Started"
          imgUrl="url('./static/images/bg-image.jpg')"
          openModal={this.onOpenModal}
        />
        <TitleAndText
          title="Apply With Confidence"
          text="There is something very important that should be here that we do not have currently however, we're going to be putting it in very very soon"
          />
        <UniDivider />
        <Steps />
        <FeaturedTestimonial />
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple Modal here</h2>
        </Modal>
        <BigCountCTA />
      </Layout>
    )
  }
}

export default IndexPage
