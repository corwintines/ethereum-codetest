// Libraries
import React from 'react'

// Styles
import './TalksPreview.css'

const TalksPreview = (props) => {
  const {
    talk
  } = props

  return (
    <p>{talk.title}</p>
  )
}

export default TalksPreview