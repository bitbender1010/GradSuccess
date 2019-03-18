import React from "react"
import ChooseUsCard from "./chooseUsCard"
import PryButton from "./pryButton"

const WhyChooseUs = ({ title, imgUrl }) => (
  <div
    style={{
      background: `linear-gradient(295deg, rgba(0,169,157,0.5) 0%, rgba(0,169,157,1) 100%), ${imgUrl}`,
      paddingBottom: "5em",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <h2
      style={{
        textAlign: "center",
        paddingTop: "2em",
        paddingBottom: "1em",
        color: "white",
      }}
    >
      {title}
    </h2>
    <div
      style={{
        width: "70%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <ChooseUsCard
        title="Excellent Service"
        text="Excellence is our watch word. We are ready to go above and beyond to secure the best outcomes for our clients.
"
        imgUrl="./static/images/scores.svg"
      />
      <ChooseUsCard
        title="Global Orientation"
        text="Global. Our clients go to some of the most prestigious institutions around the world, and so our work is always set out to compete globally.
"
        imgUrl="./static/images/scores.svg"
      />
      <ChooseUsCard
        title="Speedy Delivery"
        text="Speed. We don't believe half-baked is better than none. We get the whole package ready and deliver in time to surpass your expectations.
"
        imgUrl="./static/images/scores.svg"
      />
    </div>
    <div style={{
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'center',
        marginTop: '3em'
    }}>
      <PryButton text="Get Started" />
    </div>
  </div>
)

export default WhyChooseUs
