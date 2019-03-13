import React from "react"
import { Link } from "gatsby"
import Modal from "react-responsive-modal"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeHero from "../components/homeHero"
import TitleAndText from "../components/titleNtext"
import UniDivider from "../components/uniDivider"
import Steps from "../components/steps"
import FeaturedTestimonial from "../components/featuredTestimonial"

class IndexPage extends React.Component {
  constructor(props){
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
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
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
