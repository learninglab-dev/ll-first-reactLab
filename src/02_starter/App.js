import React, { useState } from 'react'
import Layout from './Layout'
import Switch from './Switch'
import imgSources from './data'


//the top-level component for our app. I've added some basic styling and a flexbox layout for you so your gifs make a nice grid :)
export default function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const imgToGifs = imgSources.map((urls, i) => {
    return <Switch img={urls.img} gif={urls.gif} alt={i} key={i} increment={increment} decrement={decrement} />
  })
  return (
    <Layout>
      {imgToGifs}
      {count === 3 && <h2> '3 is the MAGIC NUMBER!!!'</h2>}
    </Layout>
  )
}
