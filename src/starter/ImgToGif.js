//a component that handles the state of our img/gif button goes here
import React from 'react'
import Img from './Img'


export default function ImgToGif(props) {
  const [imgShowing, setImgShowing] = React.useState(true)

  const { imgUrl, imgAlt, gifUrl, gifAlt, decrement, increment } = props

  if (imgShowing) {
    return <Img source={imgUrl} alt={imgAlt} clickFunction={() => { setImgShowing(false)
    decrement()
    }
    } />
  } else {
    return <Img source={gifUrl} alt={gifAlt} clickFunction={() => {       setImgShowing(true)
    increment()
    }
    } />
  }
}
