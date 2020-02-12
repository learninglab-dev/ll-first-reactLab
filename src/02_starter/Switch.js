//a component that handles the state of our img/gif button goes here
import React, { useState } from 'react'
import Image from './Img'


export default function Switch(props) {
  const { imgUrl, gifUrl } = props
  const [showImage, setShowImage] = useState(true)
  // [true, () => {updates showImage}]
  if (showImage) {
    return <Image url={imgUrl} alt='img' onClick={() => setShowImage(false)}/>
  } else {
    return <Image url={gifUrl} alt='gif' onClick={() => setShowImage(true)}/>
  }
}
