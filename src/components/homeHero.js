import React from 'react'

const HomeHero = () => (
    <div style={{
        background: "linear-gradient(295deg, rgba(0,169,157,0.7315301120448179) 0%, rgba(0,169,157,1) 100%), url('./static/images/bg-image.jpg')",
        height: '450px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }}>
        <h1 style={{
            color: 'white',
            textAlign: 'center',
            textTransform: 'capitalize'
        }}>
            Let's guide you to Success
        </h1>
        <p style={{
            color: 'white',
            textAlign: 'center',
            margin: '0 auto',
            maxWidth: '600px'
        }}>We help young graduates and career people achieve their long and short term academic and professional goals</p>
    </div>
)

export default HomeHero 
