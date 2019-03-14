import React from 'react'
import PryButton from './pryButton';

const lowerCount = {
    background: '#00a99d',
    textAlign: 'center'
}

const slash = {
    color: 'yellow',
    fontSize: '30px',
    fontWeight: 'bold'
}

const LowerCTA =  () => (
    <div>
    {/* Get Started */}
    <div style={lowerCount}>
        <div style={{
            fontWeight: 'bold',
            color: 'white',
            paddingTop: '5%'
        }}><h2> Get Expert Help With Your Application </h2> </div>
        <div><h4 style={{
            color: 'white',
            fontWeight: '500',
            fontFamily: '"Poppins", sans-serif'
        }}> CV REDRAFTS <span style={slash}> / </span> 
        ESSAY REDRAFTS <span style={slash}> / </span> 
        CV REVIEWS <span style={slash}> / </span> 
        ESSAY REVIEWS </h4> </div>
        <div style={{
            padding: '40px'
        }}>
        <PryButton text="Get Started" />
        <button style={{
            border: '2px solid yellow',
            minWidth: '200px',
            minHeight: '50px',
            margin: '0px auto',
            outline: 'none',
            background: 'none',
            color: 'white',
            fontFamily: '"Poppins", sans-serif'
        }}> Learn More </button> </div>
    </div>
</div>
)
    export default LowerCTA