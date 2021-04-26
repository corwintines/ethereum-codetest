// Libraries
import React from 'react'

// Styles
import './SpeakerDetails.css'

const SpeakerDetails = (props) => {
  const {
    speaker
  } = props

  return (
    <div className="SpeakerDetailsContainer">
      <h3>{speaker.name}</h3>
      <p>{`Biography: ${speaker.biography}`}</p>
      <hr />
    </div>
    
  )
}

export default SpeakerDetails