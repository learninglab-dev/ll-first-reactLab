//a component that displays an image goes here
import React from 'react'
import Button from './Button'


export default function Img(props) {

  const { source, alt, clickFunction } = props

  return (
    <div style={{maxHeight: '500px'}}>
      <Button onClick={clickFunction}>
        <img src={source} alt={alt} width='300px' />
      </Button>
    </div>
  )

}
