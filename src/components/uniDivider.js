import React from 'react'
import pic1 from '../images/uni1.png'
import pic2 from '../images/uni2.png'
import pic3 from '../images/uni3.png'
import pic4 from '../images/uni4.png'
import pic5 from '../images/uni5.png'


const ImgStyle = {
    transform: 'scale(0.7,0.7)',
    marginBottom: '0'
}

const UniDivider =  () => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        background: 'white',
        padding: '0 5em'

    }}>
        <img src={pic1} alt="Goldman Sachs logo" style={ImgStyle}/>
        <img src={pic2} alt="Goldman Sachs logo" style={ImgStyle}/>
        <img src={pic3} alt="Goldman Sachs logo" style={ImgStyle}/>
        <img src={pic4} alt="Goldman Sachs logo" style={ImgStyle}/>
        <img src={pic5} alt="Goldman Sachs logo" style={ImgStyle}/>
    </div>
)

export default UniDivider