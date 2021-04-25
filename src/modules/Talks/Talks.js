// Libraries
import React, { useContext, useState } from 'react'

// Components
import DatePicker from '../../components/DatePicker/DatePicker'
import RoomPicker from '../../components/RoomPicker/RoomPicker'
import TalksPreview from '../../components/TalksPreview/TalksPreview'

// Contexts
import { EventContext } from '../../contexts/EventContext'
import { RoomsContext } from '../../contexts/RoomsContext'
import { TalksContext } from '../../contexts/TalksContext'

const Talks = () => {
  const { event } = useContext(EventContext)
  const { rooms } = useContext(RoomsContext)
  const { talks } = useContext(TalksContext)

  const [selectedDate, selectDate] = useState(new Date(event.date_from))
  const [selectedRoom, selectRoom] = useState(rooms[0]?.name?.en)

  const filteredTalks = talks.filter((talk) => talk.slot.room.en === selectedRoom).filter((talk) => {
    const talkDate = new Date(talk.slot.start)
    return (
      talkDate.getUTCFullYear() === selectedDate.getUTCFullYear() &&
      talkDate.getUTCMonth() === selectedDate.getUTCMonth() &&
      talkDate.getUTCDate() === selectedDate.getUTCDate() 
    )
  }).sort((talk1, talk2) => {
    let talk1Date = new Date(talk1.slot.start)
    let talk2Date = new Date(talk2.slot.start)

    return talk1Date - talk2Date
  })

  return (
    <div>
      <DatePicker
        endDate={event?.date_to}
        selectDate={selectDate}
        selectedDate={selectedDate}
        startDate={event?.date_from}
      />
      <RoomPicker
        rooms={rooms}
        selectedRoom={selectedRoom}
        selectRoom={selectRoom}
      />
      {
        filteredTalks.map((talk) => {
          return (
            <TalksPreview
              key={talk.code}
              talk={talk}
            />
          )
        })
      }
    </div>
  )
}

export default Talks