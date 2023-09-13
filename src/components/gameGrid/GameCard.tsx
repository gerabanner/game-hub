import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react"
import { Game } from "../../types/games/Game.module"

type Props = {
    games: Game
}

const GameCard = ({ games }: Props) => {
    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={games.background_image} />
            <CardBody>
                <Heading fontSize={'2xl'}>{games.name}</Heading>
            </CardBody>

        </Card>
    )
}

export default GameCard