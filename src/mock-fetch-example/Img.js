import React from 'react'
import Button from './Button'


export default function Img({ src, onClick }) {
  return (
    <div style={{maxHeight: '500px'}}>
      <Button onClick={onClick}>
        <img src={src} alt='my img' width='300px' />
      </Button>
    </div>
  )
}
