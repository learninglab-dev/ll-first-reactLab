//a component that displays an image goes here
import React from 'react'

export default function Image(props) {

  props = {
    hi: 'url goes here',
    test: 'test',
    another: 'another'
  }


  const someVariable = props.hi
  return <img src={someVariable} alt='cute kitten' width='300px'/>
}
