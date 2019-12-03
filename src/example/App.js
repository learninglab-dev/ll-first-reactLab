import React from 'react'
import Layout from './Layout'
import ImgToGif from './ImgToGif'
import imgSources from './data'


export default function App() {
  const imgToGifs = imgSources.map(urls => {
    return <ImgToGif src={urls} alt={'alt'} key={urls.img} />
  })
  return (
    <Layout>
      {imgToGifs}
    </Layout>
  )
}
