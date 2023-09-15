import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../../hooks/games/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {

    const { error, games, isLoading } = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <React.Fragment>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding={10}
                spacing={10}
            >
                {isLoading &&
                    skeletons.map(skeleton =>
                        <GameCardSkeleton key={skeleton} />)}
                {games.map(game =>
                    <GameCard key={game.id} games={game} />
                )}
            </SimpleGrid>
        </React.Fragment>
    )
}

export default GameGrid