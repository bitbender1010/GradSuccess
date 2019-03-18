import React from 'react'

const ChooseUsCard = ({title, text, imgUrl}) => (
    <div style={{
        width: '250px',
        background: 'white',
        padding: '2em 1.2em',
        borderRadius: '5px',
        boxShadow: '0px 5px 20px rgba(59,132,117,0.8)'
    }}>
        <img src={imgUrl} alt="icon" style={{
            width: '80px',
            align: 'center',
            display: 'flex',
            margin: '0 auto 1em'
        }} />
        <h4 style={{marginBottom: '5px', textAlign: 'center', color: '#19a99d'}} >{title}</h4>
        <p style={{ fontSize: "13px", lineHeight: 1.4, textAlign: 'center', marginBottom: '0' }}>
            {text}
        </p>
    </div>
)

export default ChooseUsCard