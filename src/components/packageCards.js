import React from 'react'
import{ jsx, css } from "@emotion/core"
import PackageCardElement from './packageCardElement';


const PackageCards = ({service}) => (
    <div css={{
        width: '70%',
        display:'flex',
        alignContent: 'center',
        justifyContent: 'space-around',
        margin: '1em auto 4em'
    }}>
        <PackageCardElement imgUrl="./static/images/admission-resumebg-small.jpg" title="CV/Resume" text="This is the explaination for the resume and cv part of the card" buttonUrl={`${service}/cv-resume`} />
        <PackageCardElement imgUrl="./static/images/admission-resumebg-small.jpg" title="Complete Packages" text="This is the explaination for the resume and cv part of the card" buttonUrl={`${service}/complete-packages`} />
        <PackageCardElement imgUrl="./static/images/admission-resumebg-small.jpg" title="Essays" text="This is the explaination for the resume and cv part of the card" buttonUrl={`${service}/essays`} />
    </div>
)


export default PackageCards