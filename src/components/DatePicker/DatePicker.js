// Libraries
import React from 'react'

// Styles
import './DatePicker.css'

// Utils
import { default as getDatesBetween } from './utils/getDatesBetween'

const dateHash = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday', 
  6: 'Saturday'
}

const DatePicker = (props) => {
  const {
    endDate,
    selectDate,
    selectedDate,
    startDate,
  } = props
  let dates = []
  if (endDate && startDate) {
    dates = getDatesBetween(new Date(startDate), new Date(endDate))
  }

  return (
    <div className="DatePickerContainer">
      {
        dates.map((date, idx) => {
          return (
            <div
              key={idx}
              className="DatePickerDate"
              onClick={() => selectDate(new Date(date))}
            >
              {
                (
                  date.getUTCFullYear() === selectedDate.getUTCFullYear() &&
                  date.getUTCMonth() === selectedDate.getUTCMonth() &&
                  date.getUTCDate() === selectedDate.getUTCDate() 
                )
                  ? (
                    <div className="DatePickerSelected">
                        <p>{dateHash[date.getUTCDay()]}</p>
                        <p>{date.getUTCDate()}</p>
                    </div>
                  )
                  : (
                    <div>
                        <p>{dateHash[date.getUTCDay()]}</p>
                        <p>{date.getUTCDate()}</p>
                    </div>
                  )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default DatePicker