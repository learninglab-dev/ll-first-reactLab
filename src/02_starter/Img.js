//a component that displays an image goes here
import React from 'react'

export default function Img(props) {
  return (
    <div style={{maxHeight: '500px'}}>
        <img src='https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg' alt='my img' width={props.width} />
    </div>
  )
}
