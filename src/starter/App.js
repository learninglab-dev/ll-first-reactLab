import React, {useState} from 'react'
import Layout from './Layout'
import imgSources from './data'
import ImgToGif from './ImgToGif'


//the top-level component for our app. I've added some basic styling and a flexbox layout for you so your gifs make a nice grid :)
export default function App() {

  const [imgCount, setImgCount] = useState(imgSources.length)

  function incrementImgCount() {
    setImgCount(imgCount+1)
  }

  function decrementImgCount() {
    setImgCount(imgCount-1)
  }

  const imgToGifs = imgSources.map((source, i) => {
    return <ImgToGif imgUrl={source.imgUrl} gifUrl={source.gifUrl} imgAlt={source.imgAlt} gifAlt={source.gifAlt} key={i} increment={incrementImgCount} decrement={decrementImgCount} />
  })


  return (
    <>
    <Layout>
      {imgToGifs}
    </Layout>
    <h2>Image Count = {imgCount}</h2>
    </>
  )
}
