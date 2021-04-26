// Libraries
import React, { useContext } from 'react'

// Contexts
import { TalksContext } from '../../contexts/TalksContext'

// Styles
import './Details.css'

const Details = (props) => {
  const { talks } = useContext(TalksContext)

  const talk = talks.filter((talk) => talk.code === props.match.params.id)[0]
  const startTime = new Date(talk.slot.start)
  const endTime = new Date(talk.slot.end)
  const speakers = talk.speakers.map((speaker) => speaker.name).join(', ')

  return (
    <div className="DetailsContainer">
      <h1>{talk.title}</h1>
      <h5>{`Time: ${startTime.toTimeString()} - ${endTime.toTimeString()}`}</h5>
      <h5>{`Duration: ${talk.duration} minutes`}</h5>
      <p>{`Speakers: ${speakers}`}</p>
      <p>{`Abstract: ${talk.abstract}`}</p>
      <p>{`Description: ${talk.description}`}</p>
    </div>
  )
}

export default Details