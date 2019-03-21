import React from "react"
import Layout from "../../components/layout"
import HomeHero from "../../components/homeHero"
import EssayReview from "../../components/essayReview"
import EssayRedraft from "../../components/essayRedraft"

class EssaysPage extends React.Component {
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
        <div style={{
          display: 'flex',
          width: '30%',
          height: '70px',
          margin: '0px auto',
          verticalAlign: 'middle',
          outline: 'none',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <div onClick={this.toggleTabs("review")} style={{
          height: '70px',
          width: '50%',
          border: 'none',
          outline: 'none',
          verticalAlign: 'middle'
        }}>
          <button style={{
            border: 'none',
            height: '70px',
            width: '100%',
            background: 'black',
            opacity: '0.6',
            verticalAlign: 'middle',
            textAlign: 'center',
            outline: 'none'
          }}> <h3 style={{marginBottom: '0px', color: 'white'}}> Essay Review</h3> </button>
        </div>
        <div onClick={this.toggleTabs("redraft")} style={{
          height: '70px',
          width: '50%',
          border: 'none',
          outline: 'none'
        }}>
          <button style={{
            height: '70px',
            width: '100%',
            background: 'black',
            opacity: '0.6',
            border: 'none',
            outline: 'none',
            verticalAlign: 'middle'
          }}> <h3 style={{marginBottom: '0px', color: '#19a99d'}}> Essay Redraft </h3> </button>
        </div>
        </div>
        {this.state.reviewTab && <div> <EssayReview /> </div>}
        {this.state.redraftTab && <div> <EssayRedraft /> </div>}
      </Layout>
    )
  }
}

// const EssaysPage = () => (
//   <Layout>
//     <HomeHero
//       title="Admissions Center - Essays"
//       text="We help young graduates and career people achieve their long and short
//         term academic and professional goals"
//       imgUrl="url('.././static/images/admissionsbg.jpg')"
//     />
//     <div>this page is working</div>
//   </Layout>
// )

export default EssaysPage
