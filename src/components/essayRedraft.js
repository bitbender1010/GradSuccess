import React from "react"
import{ jsx, css } from "@emotion/core"
import PriceBox from "../components/priceBox"

const EssayRedraft = () => (
    <div>
    <div css={{
        width: '70%',
        margin: '0px auto',
        padding: '50px 0px'
    }}>
        <h2 css={{
            color: '#19a99d'
        }}> Essay Redraft Plans </h2>
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
        <PriceBox text="STANDARD" price="N20,000" />     <div css={{ width: '50px'}}> </div>
        <PriceBox text="RUSH PRICE" price="N50,000" />
        </div> <br/>

        {/* Lower part */}
        <h2 css={{
            color: '#19a99d'
        }}> A Quick Glance at Our Essay Review Plans </h2>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni </p>
        <br/>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni </p>
        <br/> <br/>

        {/* buttons */}
        <div css={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            margin: '0px auto'
        }}>
        <PriceBox text="STANDARD" price="N20,000" />     <div css={{ width: '50px'}}> </div>
        <PriceBox text="RUSH PRICE" price="N50,000" />
        </div> <br/>


    </div>
    </div>
    )
    
    export default EssayRedraft