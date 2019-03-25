import React from "react"
import { Link } from "gatsby"
import Modal from "react-responsive-modal"
import{ jsx, css } from "@emotion/core"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import HomeHero from "../../components/homeHero"
import TitleAndText from "../../components/titleNtext"
import UniDivider from "../../components/uniDivider"
import Steps from "../../components/steps"
import FeaturedTestimonial from "../../components/featuredTestimonial"

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
        <SEO title="Home" keywords={[`success`, `application`, `university`]} />
        <HomeHero
          title="Welcome to the Career Center"
          text="We help young graduates and career people achieve their long and short
        term academic and professional goals"
          imgUrl="url('./static/images/careersbg.jpg')"
          openModal={this.onOpenModal}
        />
        <TitleAndText
          title="Career Success Has Never Been This Simple"
          text="University admissions is a daunting process, from personal statements, reference
          letters and several certificating tests (IELTS, GMAT &amp; GMAT to name a few), there’s
          so much involved. 
          At GradSuccess, we have expertise in preparing our clients for the most competitive
          universities. Through our novel array of packages we are able to provide our clients
          with cutting-edge services ranging from reviews, redrafts and one-on-one coaching
          about preferred options."
        />
        <UniDivider />
        <Steps />
        <FeaturedTestimonial />
        <div css={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple Modal here</h2>
        </Modal>
      </Layout>
    )
  }
}

export default IndexPage
