import React from "react"
import { Link } from "gatsby"
import agenda from "../images/agenda.svg"
import pdf from "../images/pdf.svg"


const SampleEssays = () => (
<div>
    <div style={{
        textAlign: 'center'
    }}> <h2> Read Our Sample Essays </h2> </div>

        {/* main box*/}
    <div style={{
        display: 'flex',
        width: '70%',
        margin: '50px auto'
    }}>
    <div style={{
        marginRight: '50px',
        padding: '50px',
        background: 'white'
    }}> 
        <div style={{
            display: 'flex'
        }}> <div> <img src={agenda} alt="book"/> </div>
            <div>
            <div> <h3> Expository Essay </h3> </div>
            <div style={{
                display: 'flex'
            }}> <img src={pdf} /> <h5> View this sample </h5> </div>
            </div>
        
        </div>

        <div style={{
            display: 'flex'
        }}> 
        <span style={{
            width: '200px',
            textAlign: 'right',
            paddingRight: '30px'
        }}> Paper Title: </span> <span> Online Education </span>
        </div>

        {/* second part*/}
        <div style={{
            display: 'flex'
        }}> <span style={{
            width: '200px',
            textAlign: 'right',
            paddingRight: '30px'
        }}> Academic Level: </span> <span> College </span>
        </div>

        {/* second part*/}
        <div style={{
            display: 'flex'
        }}> <span style={{
            width: '200px',
            textAlign: 'right',
            paddingRight: '30px'
        }}> Discipline: </span> <span> Ethics </span>
        </div>

        {/* second part*/}
        <div style={{
            display: 'flex'
        }}> <span style={{
            width: '200px',
            textAlign: 'right',
            paddingRight: '30px'
        }}> Paper Format: </span> <span> APA </span>
        </div>
</div>

        {/* *Second Part*/}
        <div style={{
            padding: '50px',
            background: 'white'
        }}> 
            <div style={{
                display: 'flex'
            }}> <div> <img src={agenda} alt="book"/> </div>
                <div>
                <div> <h3> Expository Essay </h3> </div>
                <div style={{
                    display: 'flex'
                }}> <img src={pdf} /> <h5> View this sample </h5> </div>
                </div>
            
            </div>
    
            <div style={{
                display: 'flex'
            }}> 
            <span style={{
                width: '200px',
                textAlign: 'right',
                paddingRight: '30px'
            }}> Paper Title: </span> <span> Online Education </span>
            </div>
    
            {/* second part*/}
            <div style={{
                display: 'flex'
            }}> <span style={{
                width: '200px',
                textAlign: 'right',
                paddingRight: '30px'
            }}> Academic Level: </span> <span> College </span>
            </div>
    
            {/* second part*/}
            <div style={{
                display: 'flex'
            }}> <span style={{
                width: '200px',
                textAlign: 'right',
                paddingRight: '30px'
            }}> Discipline: </span> <span> Ethics </span>
            </div>
    
            {/* second part*/}
            <div style={{
                display: 'flex'
            }}> <span style={{
                width: '200px',
                textAlign: 'right',
                paddingRight: '30px'
            }}> Paper Format: </span> <span> APA </span>
            </div>
    </div>

</div>
</div>
)

export default SampleEssays