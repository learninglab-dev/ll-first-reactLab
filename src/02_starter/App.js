import React from 'react'
import Layout from './Layout'
import urls from './data'
import Switch from './Switch'
import { Row, Col } from 'shards-react'


//the top-level component for our app. I've added some basic styling and a flexbox layout for you so your gifs make a nice grid :)
export default function App() {
  const imgToGifs = urls.map( item => {
    return <Switch imgUrl={item.img} gifUrl={item.gif} />
  })
  return (
    <Layout>
      {imgToGifs}
    </Layout>
  )
}
