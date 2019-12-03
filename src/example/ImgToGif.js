import React, { useState } from 'react'
import Img from './Img'

//This component contains all the "business logic" of our img to gif widgets. It will determine what our widget needs to show and then tell React to call the appropriate child component.
export default function ImgToGif({ src, alt }) {
  const [showImg, setShowImg] = useState(true)
  if (showImg) {
    return <Img src={src.img} alt={alt} onClick={() => setShowImg(false)}/>
  } else {
    return <Img src={src.gif} alt={alt} onClick={() => setShowImg(true)}/>
  }
}
