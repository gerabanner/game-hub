import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../../types/games/Game.module"
import PlatformIconList from "./platform/PlatformIconList"
import CriticScore from "./criticScore/CriticScore"
import getCroppedImageUrl from "../../services/image-url"
import Emoji from "./emoji/Emoji"

type Props = {
    games: Game
}

const GameCard = ({ games }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(games.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={games.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={games.metacritic} />
                </HStack>
                <Heading fontSize={'2xl'}>{games.name}<Emoji rating={games.rating_top} /></Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard