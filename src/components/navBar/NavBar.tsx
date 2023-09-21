import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/react.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from '../game/searchInput/SearchInput'

const NavBar = () => {
    return (
        <HStack padding={'10px'}>
            <Image boxSize={'60px'} src={logo} />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar