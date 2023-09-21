import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../../types/games/GameQuery.module'

type Props = {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
    //Games
    // Action Games
    // Xbox Games
    // Xbox Action Games

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return (
        <Heading marginY={5} fontSize={'5xl'} as='h1'>
            {heading}
        </Heading>
    )
}

export default GameHeading