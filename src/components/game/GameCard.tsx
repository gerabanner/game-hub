import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../../types/games/Game.module"
import PlatformIconList from "./platform/PlatformIconList"
import CriticScore from "./criticScore/CriticScore"
import getCroppedImageUrl from "../../services/image-url"

type Props = {
    games: Game
}

const GameCard = ({ games }: Props) => {
    return (
        <Card width={'300px'} borderRadius={10} overflow={'hidden'}>
            <Image src={getCroppedImageUrl(games.background_image)} />
            <CardBody>
                <Heading fontSize={'2xl'}>{games.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={games.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={games.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard