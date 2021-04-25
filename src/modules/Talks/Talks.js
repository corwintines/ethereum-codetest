// Libraries
import React, { useContext, useState } from 'react'

// Components
import DatePicker from '../../components/DatePicker/DatePicker'

// Contexts
import { EventContext } from '../../contexts/EventContext'

const Talks = () => {
  const { event } = useContext(EventContext)
  const [selectedDate, selectDate] = useState(event.date_from)

  return (
    <div>
      <DatePicker
        endDate={event?.date_to}
        selectDate={selectDate}
        selectedDate={new Date(selectedDate)}
        startDate={event?.date_from}
      />
      <p>Talks</p>
    </div>
  )
}

export default Talks