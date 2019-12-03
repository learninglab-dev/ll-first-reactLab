import React, { useState } from 'react'
import { Container } from 'shards-react'


function App() {
  const urls = {
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg',
    gif: 'https://media.giphy.com/media/HZUHce5TyYixq/giphy.gif',
  }
  const [showImg, setShowImg] = useState(true)

  if (showImg) {
    return (
      <Container style={{display: 'flex', padding: '10%', justifyContent: 'space-between', flexWrap: 'wrap', backgroundColor: '#e2e8ed', minHeight: '100vh', margin: 0, flexDirection: 'row' }}>
        <div style={{maxHeight: '300px'}}>
          <button style={{border: '5px solid white', padding: 0}} onClick={() => setShowImg(false)}>
            <img src={urls.img} alt='my img' width='300px' />
          </button>
        </div>
      </Container>
    )
  } else {
    return (
      <Container style={{display: 'flex', padding: '10%', justifyContent: 'space-between', flexWrap: 'wrap', backgroundColor: '#e2e8ed', minHeight: '100vh', margin: 0, flexDirection: 'row' }}>
        <div style={{maxHeight: '300px'}}>
          <button style={{border: '5px solid white', padding: 0}} onClick={() => setShowImg(true)}>
            <img src={urls.gif} alt='my img' width='300px' />
          </button>
        </div>
      </Container>
    )
  }
}

export default App
