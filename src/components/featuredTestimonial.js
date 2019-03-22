import React from 'react'
import PryButton from './pryButton';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core'


const ImgDivStyles = css({
    flex: 1,
    background: "linear-gradient(295deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,.7) 100%), url('./static/images/8years.jpeg')",
    backgroundSize: 'cover',
    color: 'white',
    padding: '3em',
    boxShadow: '30px 30px 0px rgba(87,222,191, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px'
})

const FeaturedTestimonial =  () => (
    <div css={{
        display: 'flex',
        background: 'white',
        padding: '4em 10em'
    }}>
        <div css={{
            flex: 1,
            padding: '3em 5em 3em 0',
            alignSelf: 'center'
        }}>
            <p>
                I never expected getting an admission to an ivy league school to be so professional and straight-forward. GradSuccess team really did all of the heavy lifting allowing me align my thoughts and clearly lay out my goals, I was pleasantly surprised at the end of the process.
            </p>
            <h4>Damilola Kosibote</h4>
        </div>
        <div css={ImgDivStyles}>
            <h1 css={{
                fontSize: '1.3em',
                lineHeight: '1.4em',
                textAlign: 'center'
            }}>Over 8 years of helping applicants fulfill their dreams.</h1>
            <PryButton text="Work With An Expert" />
        </div>
    </div>
)

export default FeaturedTestimonial