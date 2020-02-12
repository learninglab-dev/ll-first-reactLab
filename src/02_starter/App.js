import React from 'react'
import Layout from './Layout'
import imgSources from './data'
import Image from './Img'
import Switch from './Switch'
import { Row, Col } from 'shards-react'


//the top-level component for our app. I've added some basic styling and a flexbox layout for you so your gifs make a nice grid :)
export default function App() {
  //call Switch here rather than Image
  return (
    <Layout>
      <Switch
        imgUrl='https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg'
        gifUrl='https://media.giphy.com/media/HZUHce5TyYixq/giphy.gif'/>
      <Switch
        imgUrl='https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg'
        gifUrl='https://media.giphy.com/media/VS3f7UiKom7hS/giphy.gif' />
     <Switch
        imgUrl='https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg'
        gifUrl='https://media.giphy.com/media/XHY2TRKxJQfsrwS33v/giphy.gif' />
    </Layout>
  )
}
