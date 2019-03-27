import React from "react"
import { Link } from "gatsby"
import{ jsx, css } from "@emotion/core"
import agenda from "../images/agenda.svg"
import pdf from "../images/pdf.svg"
import PryButton from "../components/pryButton"


const SampleEssays = () => (
<div css={{
    padding: '30px 0px'
}}>
    <div css={{
        textAlign: 'center'
    }}> <h2> Read Our Sample Essays </h2> </div>

        {/* main box*/}
    <div css={{
        display: 'flex',
        width: '70%',
        margin: '50px auto'
    }}>
    <div css={{
        marginRight: '50px',
        padding: '50px',
        background: 'white'
    }}> 
        <div css={{
            display: 'flex'
        }}> <div> <img src={agenda} alt="book"/> </div>
            <div>
            <div> <h3> Expository Essay </h3> </div>
            <div css={{
                display: 'flex'
            }}> <img src={pdf} /> <h5> View this sample </h5> </div>
            </div>
        
        </div>

        <div css={{
            display: 'flex',
            fontFamily: 'popins'
        }}> 
        <span css={{
            width: '200px',
            textAlign: 'right',
            paddingRight: '30px',
            color: 'gray'
        }}> Paper Title: </span> <span> Online Education </span>
        </div>

        {/* second part*/}
        <div css={{
            display: 'flex',
            fontFamily: 'popins'
        }}> <span css={{
            width: '200px',
            textAlign: 'right',
            paddingRight: '30px',
            color: 'gray'
        }}> Academic Level: </span> <span> College </span>
        </div>

        {/* second part*/}
        <div css={{
            display: 'flex',
            fontFamily: 'popins'
        }}> <span css={{
            width: '200px',
            textAlign: 'right',
            paddingRight: '30px',
            color: 'gray'
        }}> Discipline: </span> <span> Ethics </span>
        </div>

        {/* second part*/}
        <div css={{
            display: 'flex',
            fontFamily: 'popins'
        }}> <span css={{
            width: '200px',
            textAlign: 'right',
            paddingRight: '30px',
            color: 'gray'
        }}> Paper Format: </span> <span> APA </span>
        </div>
</div>

        {/* *Second Part*/}
        <div css={{
            padding: '50px',
            background: 'white'
        }}> 
            <div css={{
                display: 'flex'
            }}> <div> <img src={agenda} alt="book"/> </div>
                <div>
                <div> <h3> Expository Essay </h3> </div>
                <div css={{
                    display: 'flex'
                }}> <img src={pdf} /> <h5> View this sample </h5> </div>
                </div>
            
            </div>
    
            <div css={{
                display: 'flex',
                fontFamily: 'popins'
            }}> 
            <span css={{
                width: '200px',
                textAlign: 'right',
                paddingRight: '30px',
                color: 'gray'
            }}> Paper Title: </span> <span> Online Education </span>
            </div>
    
            {/* second part*/}
            <div css={{
                display: 'flex',
                fontFamily: 'popins'
            }}> <span css={{
                width: '200px',
                textAlign: 'right',
                paddingRight: '30px',
                color: 'gray'
            }}> Academic Level: </span> <span> College </span>
            </div>
    
            {/* second part*/}
            <div css={{
                display: 'flex',
                fontFamily: 'popins'
            }}> <span css={{
                width: '200px',
                textAlign: 'right',
                paddingRight: '30px',
                color: 'gray'
            }}> Discipline: </span> <span> Ethics </span>
            </div>
    
            {/* second part*/}
            <div css={{
                display: 'flex',
                fontFamily: 'popins'
            }}> <span css={{
                width: '200px',
                textAlign: 'right',
                paddingRight: '30px',
                color: 'gray'
            }}> Paper Format: </span> <span> APA </span>
            </div>
    </div>

</div>

</div>
)

export default SampleEssays