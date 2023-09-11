import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import { Button } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Button colorScheme='purple'>CLICK</Button>
    </React.Fragment>
  )
}

export default App
