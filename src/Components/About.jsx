import React from 'react'

const About = (props) => {
  return (
    <>
     <div className={`text-center fs-3 my-3 text-${props.mode==="Light"?"dark":"white"}`} style={{fontFamily:'sans-serif'}}>Welcome to About</div> 
    </>
  )
}

export default About
