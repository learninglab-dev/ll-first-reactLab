import React, { createContext, useState } from 'react'
import App from './App'


export const SaveContext = createContext()


export default function Save() {

  const [savedComponents, addComponent] = useState([])
  console.log(savedComponents);

  return (
    <SaveContext.Provider value={[savedComponents, addComponent]}>
      <App />
    </SaveContext.Provider>
  )

}
