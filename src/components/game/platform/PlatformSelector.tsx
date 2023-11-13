import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../../../hooks/usePlatform'
import { Platform } from '../../../types/platforms/Platforms.module'

type Props = {
    onSelectPlatform: (platform: Platform) => void,
    selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {

    const { data: platform, isLoading, error } = usePlatform();

    if (error) return null;

    if (isLoading) return <Spinner />

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {platform?.map(platform =>
                    <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                )}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector