import React from 'react'
import Layout from './Layout'
import imgSources from './data'
import Image from './Img'


//the top-level component for our app. I've added some basic styling and a flexbox layout for you so your gifs make a nice grid :)
export default function App() {
  return (
    <Layout>
      <Image hi='https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg' test='test' another='another' />
      <Image hi='https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg' />
      <Image hi='https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg' />
    </Layout>
  )
}
