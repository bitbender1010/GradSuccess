import React from 'react'
import TitleAndText from "../components/titleNtext"
import PryButton from './pryButton';

const flexCount = {
    display: 'flex',
    /*border: '2px solid blue',*/
    padding: '100px',
    background: 'lightgray'
}

const lowerCount = {
    background: 'lightblue',
    textAlign: 'center'
}

const slash = {
    color: 'yellow',
    fontSize: '30px',
    fontWeight: 'bold'
}

const countDivider =  () => (
<div>
    <div style={flexCount}>
        <div style={{
            flex: 1,
            textAlign: 'center',
            /*border: '2px solid red',*/
        }}>
        <div style={{
            color: '#00a99d',
            fontSize: '30px',
            fontWeight: 'bolder'
        }}> 3000+ </div>
        <div style={{
            color: 'black'
        }}> Consulting Minutes </div>
        </div>

        <div style={{
            flex: 1,
            textAlign: 'center',
            /*border: '2px solid red'*/
        }}>
        <div style={{
            color: '#00a99d',
            fontSize: '30px',
            fontWeight: 'bolder'
        }}> 100+ </div>
        <div style={{
            color: 'black'
        }}> Consulting Minutes </div>
        </div>

        <div style={{
            flex: 1,
            textAlign: 'center',
            /*border: '2px solid red'*/
        }}>
        <div style={{
            color: '#00a99d',
            fontSize: '30px',
            fontWeight: 'bolder'
        }}> ~90% </div>
        <div style={{
            color: 'black'
        }}> Successful Clients </div>
        </div>
    </div>
    {/* Get Started */}
    <div style={lowerCount}>
        <div style={{
            fontSize: '20px',
            fontWeight: 'bold'
        }}> Get Expert Help With Your Application </div>
        <div> CV REDRAFTS <span style={slash}> / </span> 
        ESSAY REDRAFTS <span style={slash}> / </span> 
        CV REVIEWS <span style={slash}> / </span> 
        ESSAY REVIEWS </div>
        <PryButton text="Get Started"/>
        <button style={{
            border: '2px solid yellow',
            minWidth: '200px',
            minHeight: '50px',
            margin: '0px auto',
            outline: 'none'
        }}> Learn More </button>
    </div>
</div>
)

export default countDivider