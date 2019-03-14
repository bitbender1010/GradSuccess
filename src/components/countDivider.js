import React from 'react'
import PryButton from './pryButton';

const flexCount = {
    display: 'flex',
    /*border: '2px solid blue',*/
    padding: '60px',
    background: 'black',
    opacity: '0.6',
    margin: '0px auto'
}

const CountDivider =  () => (
<div>
    <div style={flexCount}>
        <div style={{
            flex: 1,
            textAlign: 'center',
            /*border: '2px solid red',*/
        }}>
        <div style={{
            color: '#00a99d',
            fontWeight: 'bolder',
            fontSize: '40px',
            fontFamily: '"Aleo", serif',
            paddingBottom: '15px'
        }}> 3000+ </div>
        <div style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: '"Poppins", sans-serif'
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
            fontWeight: 'bolder',
            fontSize: '40px',
            fontFamily: '"Aleo", serif',
            paddingBottom: '15px'
        }}> 100+ </div>
        <div style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: '"Poppins", sans-serif'
        }}> Consulting Satisfied </div>
        </div>

        <div style={{
            flex: 1,
            textAlign: 'center',
            /*border: '2px solid red'*/
        }}>
        <div style={{
            color: '#00a99d',
            fontSize: '30px',
            fontWeight: 'bolder',
            fontSize: '40px',
            fontFamily: '"Aleo", serif',
            paddingBottom: '15px'
        }}> ~90% </div>
        <div style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: '"Poppins", sans-serif'
        }}><p> Successful Clients </p> </div>
        </div>
    </div>
</div>
)

export default CountDivider