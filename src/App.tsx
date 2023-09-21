import './App.css'
import React, { useState } from 'react'
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/navBar/NavBar'
import GameGrid from './components/game/GameGrid'
import GenreList from './components/genres/GenreList'
import PlatformSelector from './components/game/platform/PlatformSelector'
import { GameQuery } from './types/games/GameQuery.module'
import { SortSelector } from './components/game/sort/SortSelector'
import GameHeading from './components/game/GameHeading'

type Props = {
  onSearch: (searchText: string) => void;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'} paddingX={5}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <Box paddingLeft={10}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </React.Fragment>
  )
}

export default App
