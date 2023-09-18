import './App.css'
import React from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import GameGrid from './components/game/GameGrid'
import GenreList from './components/genres/GenreList'

function App() {

  return (
    <React.Fragment>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
      >
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} paddingX={5}>
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <GameGrid />
        </GridItem>
      </Grid>
    </React.Fragment>
  )
}

export default App
