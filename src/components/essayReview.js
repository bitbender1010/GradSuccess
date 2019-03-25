import React from "react"
import PriceBox from "../components/priceBox"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core'


const EssayReview = () => (
<div>
<div css={{
    width: '70%',
    margin: '0px auto',
    padding: '50px 0px'
}}>
    <h2 css={{
        color: '#19a99d'
    }}> Essay Review Plans </h2>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni </p>
    <br/>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni </p>
    <br/> <br/>
    <h2 css={{
        color: '#19a99d'
    }}> A Quick Glance at Our Essay Review Plans </h2>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni </p>
    <br/>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni </p>
    <br/> <br/>

    <div css={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        margin: '0px auto'
    }}>
    <PriceBox text="STANDARD" price="N10,000" />     <div css={{ width: '50px'}}> </div>
    <PriceBox text="RUSH PRICE" price="N20,000" />
    </div>
</div>
</div>
)

export default EssayReview