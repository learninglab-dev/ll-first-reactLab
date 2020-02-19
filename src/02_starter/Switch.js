import React, { useState } from 'react'
import Image from './Img'

export default function Switch(props) {
  const { imgUrl, gifUrl } = props
  const [showImg, setShowImg] = useState(true)

  if(showImg) {
    return <Image url={imgUrl} alt='img' onClick={() => setShowImg(false)} />
  } else {
    return <Image url={gifUrl} alt='gif' onClick={() => setShowImg(true)} />
  }
}
