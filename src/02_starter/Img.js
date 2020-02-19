//a component that displays an image goes here
import React from 'react'
import Button from './Button'

export default function Img({ src, onClick, alt }) {
  return (
    <div style={{maxHeight: '300px'}}>
        <Button onClick={onClick}>
        <img src={src} alt={alt} width='300px' />
        </Button>
    </div>
  )
}
