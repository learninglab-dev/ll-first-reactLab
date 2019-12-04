//a component that displays an image goes here
import React from 'react'


export default function Img() {
  return React.createElement("img", {
   src: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg',
   alt: 'my alt',
   width: '300px',
   height: '280px'
 })
}
