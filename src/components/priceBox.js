import React from "react"
import PryButton from "../components/pryButton"

const PriceBox = ({text, price}) => (
<div>
    <div style={{
        width: '250px',
        border: '2px solid blue',
        textAlign: 'center',
        borderColor: "#19a99d",
        borderRadius: '5px',
        boxShadow: '0px 5px 15px rgba(59,132,117,0.5)',
        padding: '20px'
    }}>
        <h2 style={{
            marginBottom: '5px',
            fontWeight: 'bolder',
            fontFamily: 'Poppins'
        }}>{text}</h2>
        <div style={{
            border: '0.5px solid #19a99d',
            width: '100%',
            margin: 'auto',
            marginBottom: '10px'
        }}> {/* line */}</div>
        <h3 style={{
            marginBottom: '20px',
            color: "#19a99d",
            fontWeight: 'bolder',
            fontFamily: 'Poppins'
        }}>{price}</h3>
        <PryButton text="ADD TO CART"/>
    </div>
</div>
)

export default PriceBox