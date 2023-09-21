import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/react.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from '../game/searchInput/SearchInput'

type Props = {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding={'10px'}>
            <Image boxSize={'60px'} src={logo} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar