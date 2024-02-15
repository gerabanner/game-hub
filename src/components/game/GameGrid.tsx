import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames from '../../hooks/useGames';
import { GameQuery } from '../../types/games/GameQuery.module';
import React from 'react';

type Props = {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {

    const { error, data: games, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);

    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>

    return (
        <Box padding={10}>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={6}
            >
                {isLoading &&
                    skeletons.map(skeleton =>
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    )}
                {games?.pages.map((page, indx) =>
                    <React.Fragment key={indx}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard games={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                )}

            </SimpleGrid>
            {hasNextPage && <Button marginY={5} onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </Button>}
        </Box>
    )
}

export default GameGrid