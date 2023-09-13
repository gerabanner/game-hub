import React, { useEffect } from 'react';
import { useState } from 'react'
import apiClient from '../../services/api-client';
import { Text } from '@chakra-ui/react';


type Game = {
    id: number,
    name: string
}

type FetchGamesReponse = {
    count: number,
    results: Game[]
}

const GameGrid = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGamesReponse>(`/games`)
            .then(res => setGames(res.data.results))
            .catch(error => setError(error.message));
    },[]);

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