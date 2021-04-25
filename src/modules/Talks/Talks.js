// Libraries
import React, { useContext, useState } from 'react'

// Components
import DatePicker from '../../components/DatePicker/DatePicker'
import RoomPicker from '../../components/RoomPicker/RoomPicker'

// Contexts
import { EventContext } from '../../contexts/EventContext'
import { RoomsContext } from '../../contexts/RoomsContext'

const Talks = () => {
  const { event } = useContext(EventContext)
  const { rooms } = useContext(RoomsContext)

  const [selectedDate, selectDate] = useState(event.date_from)
  const [selectedRoom, selectRoom] = useState(rooms[0]?.name?.en)

  return (
    <div>
      <DatePicker
        endDate={event?.date_to}
        selectDate={selectDate}
        selectedDate={new Date(selectedDate)}
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