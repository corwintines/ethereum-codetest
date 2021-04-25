// Libraries
import React, { useContext, useState } from 'react'

// Components
import DatePicker from '../../components/DatePicker/DatePicker'
import RoomPicker from '../../components/RoomPicker/RoomPicker'

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
  })
  console.log(filteredTalks)

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
      <p>Talks</p>
    </div>
  )
}

export default Talks