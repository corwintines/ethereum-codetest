// Libraries
import React, { useContext } from 'react'

// Components
import SpeakerDetails from '../../components/SpeakerDetails/SpeakerDetails';

// Contexts
import { SpeakersContext } from '../../contexts/SpeakersContext'
import { TalksContext } from '../../contexts/TalksContext'

const Speakers = () => {
  const { speakers } = useContext(SpeakersContext)
  const { talks } = useContext(TalksContext)
  return (
    <div>
      {
        speakers.map((speaker) => {
          return (
            <SpeakerDetails
              key={speaker.code}
              speaker={speaker}
              talks={talks}
            />
          )
        })
      }
    </div>
  )
}

export default Speakers