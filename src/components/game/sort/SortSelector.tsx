import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

export const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Revelance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevanse</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release date</MenuItem>
                <MenuItem>Populatiry</MenuItem>
            </MenuList>
        </Menu>
    )
}
