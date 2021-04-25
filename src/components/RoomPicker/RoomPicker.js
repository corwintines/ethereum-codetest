// Libraries
import React from 'react'

// Styles
import './RoomPicker.css'

const RoomPicker = (props) => {
  return (
    <div className="RoomPickerContainer">
      {props.rooms.map((room, idx) => {
        return (
          <div
            key={idx}
            onClick={() => props.selectRoom(room.name.en)}
          > 
          {
            room.name.en === props.selectedRoom 
              ? (
              <div className="RoomPickerSelected">
                <p>{room?.name?.en}</p>
              </div>
              )
              : (
              <div>
                <p>{room?.name?.en}</p>
              </div>
              )
            }
          </div>
        )
      })}
      {/* <div><p>Favorite</p></div> */}
    </div>
  )
}

export default RoomPicker