import React from "react"
import{ jsx, css } from "@emotion/core"
import Layout from "../../components/layout"
import HomeHero from "../../components/homeHero"
import EssayReview from "../../components/essayReview"
import EssayRedraft from "../../components/essayRedraft"

class Scholarship extends React.Component {
  constructor(props) {
    super(props)
    this.state = { reviewTab: true, redraftTab: false }
    this.toggleTabs = this.toggleTabs.bind(this)
  }
  toggleTabs = arg => e => {
    if (arg === "review") {
      console.log("here at review")
      this.setState({ reviewTab: true, redraftTab: false })
    }
    if (arg === "redraft") {
      console.log("here at redraft")
      this.setState({ reviewTab: false, redraftTab: true })
    }
  }

  render() {
    return (
      <Layout>
        <HomeHero
          title="Admissions Center - Essays"
          text="We help young graduates and career people achieve their long and short
        term academic and professional goals"
          imgUrl="url('.././static/images/admissionsbg.jpg')"
        />
        <div css={{
          display: 'flex',
          width: '30%',
          height: '70px',
          margin: '0px auto',
          verticalAlign: 'middle',
          outline: 'none',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <div onClick={this.toggleTabs("review")} css={{
          height: '50px',
          width: '50%',
          border: 'none',
          outline: 'none',
          verticalAlign: 'middle'
        }}>
          <button css={{
            border: 'none',
            height: '50px',
            width: '100%',
            background: 'black',
            opacity: '0.6',
            verticalAlign: 'middle',
            textAlign: 'center',
            outline: 'none',
            cursor: 'pointer'
          }}> <h4 css={{marginBottom: '0px', color: this.state.reviewTab ? 'white' : '#19a99d'}}> Essay Review</h4> </button>
        </div>
        <div onClick={this.toggleTabs("redraft")} css={{
          height: '50px',
          width: '50%',
          border: 'none',
          outline: 'none'
        }}>
          <button css={{
            height: '50px',
            width: '100%',
            background: 'black',
            opacity: '0.6',
            border: 'none',
            outline: 'none',
            verticalAlign: 'middle',
            cursor: 'pointer'
          }}> <h4 css={{marginBottom: '0px', color: this.state.redraftTab ? 'white' : '#19a99d'}}> Essay Redraft </h4> </button>
        </div>
        </div>
        {this.state.reviewTab && <div> <EssayReview /> </div>}
        {this.state.redraftTab && <div> <EssayRedraft /> </div>}
      </Layout>
    )
  }
}


export default Scholarship
