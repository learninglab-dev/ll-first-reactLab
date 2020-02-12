//a component that displays an image goes here
import React from 'react'
import Button from './Button'

export default function Image({ url, alt, onClick }) {

  // const { url, alt }  = props
  // props = {
  //   url: 'url goes here',
  //   alt: 'alt'
  //   test: 'test',
  //   another: 'another'
  // }

  return (
    <Button onClick={onClick}>
      <img src={url} alt={alt} width='300px'/>
    </Button>
  )

}
