// Libraries
import React from 'react'

// Styles
import './SpeakerDetails.css'

const SpeakerDetails = (props) => {
  const {
    speaker,
    talks
  } = props

  const filteredTalks = talks.filter((talk) => {
    return speaker.submissions.includes(talk.code)
  })
  const filteredTalkTitles = filteredTalks.map((talk) => talk.title)

  return (
    <div className="SpeakerDetailsContainer">
      <h3>{speaker.name}</h3>
      <p>{`Biography: ${speaker.biography}`}</p>
      <p>{`Talks: ${filteredTalkTitles.join(', ')}`}</p>
      <hr />
    </div>
    
  )
}

export default SpeakerDetails