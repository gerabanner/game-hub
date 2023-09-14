import { Card, CardBody, CardHeader, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../../types/games/Game.module"
import PlatformIconList from "../platform/PlatformIconList"

type Props = {
    games: Game
}

const GameCard = ({ games }: Props) => {
    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={games.background_image} />
            <CardBody>
                <Heading fontSize={'2xl'}>{games.name}</Heading>
                <PlatformIconList platforms={games.parent_platforms.map(p => p.platform)} />
            </CardBody>
        </Card>
    )
}

export default GameCard