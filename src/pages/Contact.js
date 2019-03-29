import React from "react"
import Layout from "../components/layout"
import HomeHero from "../components/homeHero"
import MessageUs from "../components/messageUs"

class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <HomeHero
          title="Welcome to the About Us"
          text="We help young graduates and career people achieve their long and short
      term academic and professional goals"
          imgUrl="url('./static/images/admissionsbg.jpg')"
          openModal={this.onOpenModal}
        />
        {/* Contact */}
        <MessageUs />
      </Layout>
    )
  }
}

export default Contact
