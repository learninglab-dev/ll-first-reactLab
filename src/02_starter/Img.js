//a component that displays an image goes here
import React from 'react'
import Button from './Button'

export default function Image(props) {
  return (
    <Button onClick={props.onClick}>
      <img src={props.url} alt={props.alt} width='300px'/>
    </Button>
  )
}
