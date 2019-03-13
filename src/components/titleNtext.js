import React from 'react'
import PryButton from './pryButton';


const TitleAndText = ({title, text, button}) => (
    <div style={{
        padding: '2em'
    }}>
        <h2 style={{
            color: '#00a99d',
            textAlign: 'center',
            margin: '1em auto .5em'
        }}>{title}</h2>
        <p style={{
            textAlign: 'center',
            margin: '.1em auto 1em',
            maxWidth: '800px'
        }}>{text}</p>
        {button && <PryButton text={button} />}
    </div>
)

export default TitleAndText