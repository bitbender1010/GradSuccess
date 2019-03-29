import React from "react"

const inputStyle = {
    background: 'none',
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid black',
    width: '50%',
    fontFamily: 'poppins'
}

const MessageUs = () => (
<div css={{margin: '100px'}}>
    <h1> Let's Talk </h1>
    {/* */}
    <div css={{display: 'flex'}}>
    <div css={{width: '50%', height: '300px', background: 'red'}}> 
    <p> We’d love to hear what you are working on. Drop us a note here and we’ll get back to you within 24 hours. </p> 
    
    <form css={{display: 'flex', flexWrap: 'wrap'}}>
        <input type="text" placeholder="Your Name" css={inputStyle} css={{marginRight: '20px'}}/>

        <input type="text" placeholder="Email Address" css={inputStyle}/>

        <input type="text" placeholder="Phone Number" css={inputStyle}/>

        <input type="text" placeholder="Budget Range" css={inputStyle}/>

        <input type="text" placeholder="Where do you hear about us?" css={inputStyle}/>
    </form>
    </div>

    <div css={{width: '50%', height: '300px', background: 'blue'}}>
    <img src=""/>
    </div>
    </div>

</div>
)

export default MessageUs