import React from "react"
import PryButton from "../components/pryButton"

class HomeHero extends React.Component {
  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.props.openModal()
  }

  render() {
    const button = this.props.button
    const imgUrl = this.props.imgUrl
    const title = this.props.title
    const text = this.props.text
    return (
      <div
        css={{
          background: button
            ? `linear-gradient(295deg, rgba(0,169,157,0.5) 0%, rgba(0,169,157,1) 100%), ${imgUrl}`
            : `linear-gradient(295deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,.7) 100%),${imgUrl}`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: button ? 'top' : 'center',
            backgroundSize:'cover',
          height: button ? "450px" : '300px',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
        css={{
            color: "white",
            textAlign: "center",
            textTransform: "capitalize",
            padding: '10px'
          }}
        >
          {title}
        </h1>
        <p
        css={{
            color: "white",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "600px",
            padding: '10px'
          }}
        >
          {text}
        </p>
        <div
        css={{
            margin: "1em auto 0"
          }}
          onClick={this.openModal}
        >
          {button && <PryButton text={button} />}
        </div>
      </div>
    )
  }
}

export default HomeHero
