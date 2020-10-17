import React from 'react'
import './stylesheets.css'

const parastyled = {
  fontSize: '20px',
  backgroundColor: 'yellow'
}

const StyleSheets = () => {
  return (
    <>
      <h1 className="primary">CSS Stylesheets</h1>
      <p className="secondary">I'm baby you probably haven't heard of them put a bird on it umami +1, activated charcoal asymmetrical iceland celiac flexitarian. Selfies flannel mlkshk salvia squid. </p>
      <p style={parastyled}>Put a bird on it umami four dollar toast, air plant palo santo pop-up subway tile green juice cliche. Taxidermy blog copper mug forage, you probably haven't heard of them letterpress truffaut squid hella yuccie salvia semiotics food truck. </p>
      <p style={{color: 'red', backgroundColor: 'lightgrey'}}> Helvetica readymade air plant, skateboard kitsch meggings la croix chia twee. Pop-up post-ironic chambray, disrupt edison bulb helvetica street art aesthetic jianbing banjo gentrify typewriter.</p>
    </>
  )
}

export default StyleSheets
