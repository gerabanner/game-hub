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

    const { error, data: games, isLoading } = useGames(gameQuery);

    const skeletons = [1, 2, 3, 4, 5, 6];

    if(error) return <Text>{error.message}</Text>

    return (
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding={10}
                spacing={6}
            >
                {isLoading &&
                    skeletons.map(skeleton =>
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    )}
                {games?.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard games={game} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
    )
}

export default GameGrid