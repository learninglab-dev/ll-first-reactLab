//a component that handles the state of our img/gif button goes here
import React, { useState } from 'react'
import Img from './Img'

export default function Switch(props){
  const { img, gif, alt, increment, decrement } = props
  const [showImg, setShowImg] = useState(true)
  if (showImg) {
    return <Img
              src={img}
              alt={alt}
              onClick={() => {
                setShowImg(false)
                increment()
              }}
              />
  } else {
    return <Img
            src={gif}
            alt={alt}
            onClick={() => {
              setShowImg(true)
              decrement()
            }}
    />
  }
}
