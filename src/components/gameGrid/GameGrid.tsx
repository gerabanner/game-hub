import React, { useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import { useGames } from '../../hooks/games/useGames';




const GameGrid = () => {

    const { error, games} = useGames();
    

    return (
        <React.Fragment>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </React.Fragment>
    )
}

export default GameGrid