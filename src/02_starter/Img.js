//a component that displays an image goes here
import React from 'react'

export default function Image(props) {

  // props = {
  //   url: 'url goes here',
  //   test: 'test',
  //   another: 'another'
  // }

  return <img src={props.url} alt='cute kitten' width='300px'/>
}
