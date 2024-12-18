import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

type Props = {
    onSelectSortOrder: (sortOrder: string) => void,
    sortOrder: string
}

export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-meacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' }
    ];

    const currentSortOrder = sortOrders.find(o => o.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order =>
                    <MenuItem onClick={() => onSelectSortOrder(order.value) } key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}
