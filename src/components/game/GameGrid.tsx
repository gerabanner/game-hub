import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames from '../../hooks/useGames';
import { GameQuery } from '../../types/games/GameQuery.module';

type Props = {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {

    const { error, data, isLoading } = useGames(gameQuery);

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <React.Fragment>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding={10}
                spacing={5}
            >
                {isLoading &&
                    skeletons.map(skeleton =>
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    )}
                {data.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard games={game} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </React.Fragment>
    )
}

export default GameGrid