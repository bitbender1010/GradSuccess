import React from "react"


const styleLeft = {
    minWidth: '40%', 
    height: '300px', 
    background: '', 
    color: 'black', 
    fontWeight: 'bolder'
}

const styleRight = {
    background: '', 
    height: '300px', 
    minWidth: '60%'
}
const AboutBox = ({first, second}) => (
<div>
<div css={{ display: 'flex', margin: '100px 15%', fontFamily: 'poppins' }}>
    <div css={styleLeft}> {first} </div>

    <div css={styleRight}> {second} <br/> <br/> {second} </div>
</div>
</div>
)

export default AboutBox