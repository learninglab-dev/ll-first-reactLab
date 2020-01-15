import React, { useState } from 'react'
import Img from './Img'

//This component contains all the "business logic" of our img to gif widgets. It will determine what our widget needs to show and then tell React to call the appropriate child component.
export default function Switch(props) {
  const { img, gif, alt } = props
  const [showImg, setShowImg] = useState(true)
  const src = showImg ? img : gif
  return <Img src={src} alt={alt} onClick={() => setShowImg(!showImg)}/>
}
