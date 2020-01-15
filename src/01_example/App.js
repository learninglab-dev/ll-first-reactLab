import React from 'react'
import Layout from './Layout'
import Switch from './Switch'
import imgSources from './data'


export default function App() {
  const imgToGifs = imgSources.map((urls, i) => {
    return <Switch img={urls.img} gif={urls.gif} alt={i} key={i} />
  })
  return (
    <Layout>
      {imgToGifs}
    </Layout>
  )
}
