import React, { useEffect, useState } from 'react'
import ImgToGif from './ImgToGif'
import imgSources from './data'


export default function FetchData() {
  const [imgToGifs, setImgToGifs] = useState()

  //this is a mock showing how you might fetch these urls from an API
  useEffect(() => {
    async function fetchImgs() {
      return await imgSources
    }
    fetchImgs().then(data => {
      console.log(data);
      const imgToGifs = data.map(urls => {
        return <ImgToGif src={urls} alt={'alt'} />
      })
      setImgToGifs(imgToGifs)
    })
    return /*return a cleanup function*/
  }, [])

  if (!imgToGifs) {
    return <h2>Loading...</h2>
  } else {
    return imgToGifs
  }
}
