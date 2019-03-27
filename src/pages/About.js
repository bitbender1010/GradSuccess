import React from "react"
import Layout from "../components/layout"
import HomeHero from "../components/homeHero"
import AboutBox from "../components/aboutBox"
import WhyChooseUs from "../components/whyChooseUs"
import Team from "../components/team"
import man from "../images/man.jpg"


const text1 = '-- About Us'
const text2 = 'Blue Label Labs builds products. We’re a 64-person mobile, tablet, watch, TV, AR/VR, IoT and web design, development and marketing agency based in New York City, Seattle and San Francisco.'

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
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
      <AboutBox first={text1} second={text2}/>
      {/* Breaker */}
      <WhyChooseUs title="Why Choose Us For Your Admission Process" imgUrl="url('./static/images/admissionsbg.jpg')" />
      <AboutBox first={text1} second={text2}/>
      <div>
      <h1 css={{textAlign: 'center'}}> Meet the Team </h1>
    <div css={{display: 'flex', flexWrap: 'wrap', margin: '0px auto', justifyContent: 'center'}}>
    <Team imgUrl={man} jobTitle="Creative Director" name="David"/>
    <Team imgUrl={man} jobTitle="Head of Product" name="Simon"/>
    <Team imgUrl={man} jobTitle="Director, Marketing" name="Joseph"/>
    </div>
    </div>
        </Layout>
    )}
}

export default AboutUs