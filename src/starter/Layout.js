import React from 'react'
import { Container } from 'shards-react'


export default function Layout({children}) {
  return (
    <Container style={{display: 'flex', padding: '10%', justifyContent: 'space-between', flexWrap: 'wrap', backgroundColor: '#e2e8ed', minHeight: '100vh', margin: 0, flexDirection: 'row' }}>
      {children}
    </Container>
  )
}
