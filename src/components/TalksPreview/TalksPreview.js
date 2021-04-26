// Libraries
import React from 'react'
import { 
  Link,
} from 'react-router-dom'

// Styles
import './TalksPreview.css'

const TalksPreview = (props) => {
  const {
    talk,
  } = props

  const startTime = new Date(talk.slot.start)
  const endTime = new Date(talk.slot.end)
  const speakers = talk.speakers.map((speaker) => speaker.name).join(', ')
  return (
    <div className="TalksPreviewContainer">
      <h3>{talk.title}</h3>
      <h5>{`Time: ${startTime.toTimeString()} - ${endTime.toTimeString()}`}</h5>
      <h5>{`Duration: ${talk.duration} minutes`}</h5>
      <p>{`Speakers: ${speakers}`}</p>
      <p>{`Abstract: ${talk.abstract}`}</p>
      <p>{`Description: ${talk.description}`}</p>
      <Link to={`/details/${talk.code}`}>More</Link>
      <hr />
    </div>
  )
}

export default TalksPreview