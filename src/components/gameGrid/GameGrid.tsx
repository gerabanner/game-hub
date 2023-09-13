import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../../hooks/games/useGames';
import GameCard from './GameCard';




const GameGrid = () => {

    const { error, games} = useGames();

    return (
        <React.Fragment>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding={10} spacing={10}>
                {games.map(game => <GameCard key={game.id} games={game}/>)}
            </SimpleGrid>
        </React.Fragment>
    )
}

export default GameGrid