import fish from '../../../assets/fish.png'
import drool from '../../../assets/drool.webp'
import smile from '../../../assets/smile.png'
import { Image, ImageProps } from '@chakra-ui/react'

type Props = {
    rating: number
}

const Emoji = ({ rating }: Props) => {

    if (rating < 3) return null;

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: fish, alt: 'fish', boxSize: '25px' },
        4: { src: smile, alt: 'recommended', boxSize: '25px' },
        5: { src: drool, alt: 'exceptional', boxSize: '25px' }
    }

    return (
        <Image {...emojiMap[rating]} marginTop={1}/>
    )
}

export default Emoji