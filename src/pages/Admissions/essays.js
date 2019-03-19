import React from "react"
import Layout from "../../components/layout"
import HomeHero from "../../components/homeHero"

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
        <div onClick={this.toggleTabs("review")}>
          <button>review</button>
        </div>
        <div onClick={this.toggleTabs("redraft")}>
          <button>redraft</button>
        </div>
        {this.state.reviewTab && <div>this page is working</div>}
        {this.state.redraftTab && <div>this other page is working</div>}
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
