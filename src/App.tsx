import './App.css'
import React from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
    <React.Fragment>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}>
      <GridItem area={'nav'} bg={'coral'}>NAV</GridItem>
      <Show above='lg'>
      <GridItem area={'aside'} bg={'gold'}>aside</GridItem>
      </Show>
      <GridItem area={'main'} bg={'dodgerblue'}>main</GridItem>
      </Grid>
    </React.Fragment>
  )
}

export default App
