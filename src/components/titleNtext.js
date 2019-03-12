import React from 'react'


const TitleAndText = ({title, text, buttonUrl}) => (
    <div>
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
    </div>
)

export default TitleAndText