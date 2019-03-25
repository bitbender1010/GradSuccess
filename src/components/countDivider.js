import React from 'react'
import{ jsx, css } from "@emotion/core"
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
    <div css={flexCount}>
        <div css={{
            flex: 1,
            textAlign: 'center',
            /*border: '2px solid red',*/
        }}>
        <div css={{
            color: '#00a99d',
            fontWeight: 'bolder',
            fontSize: '40px',
            fontFamily: '"Aleo", serif',
            paddingBottom: '15px'
        }}> 3000+ </div>
        <div css={{
            color: 'white',
            fontSize: '20px',
            fontFamily: '"Poppins", sans-serif'
        }}> Consulting Minutes </div>
        </div>

        <div css={{
            flex: 1,
            textAlign: 'center',
            /*border: '2px solid red'*/
        }}>
        <div css={{
            color: '#00a99d',
            fontSize: '30px',
            fontWeight: 'bolder',
            fontSize: '40px',
            fontFamily: '"Aleo", serif',
            paddingBottom: '15px'
        }}> 100+ </div>
        <div css={{
            color: 'white',
            fontSize: '20px',
            fontFamily: '"Poppins", sans-serif'
        }}> Consulting Satisfied </div>
        </div>

        <div css={{
            flex: 1,
            textAlign: 'center',
            /*border: '2px solid red'*/
        }}>
        <div css={{
            color: '#00a99d',
            fontSize: '30px',
            fontWeight: 'bolder',
            fontSize: '40px',
            fontFamily: '"Aleo", serif',
            paddingBottom: '15px'
        }}> ~90% </div>
        <div css={{
            color: 'white',
            fontSize: '20px',
            fontFamily: '"Poppins", sans-serif'
        }}><p> Successful Clients </p> </div>
        </div>
    </div>
</div>
)

export default CountDivider