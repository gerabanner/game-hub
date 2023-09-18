import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import useGenres from "../../hooks/useGenres";

const GenreList = () => {

    const { data, isLoading, error } = useGenres();

    return (
        <React.Fragment>
            {error && <Text>{error}</Text>}
            {isLoading && <Text>Loading...</Text>}
            <HStack>
                <List>
                    {data.map(genre => <ListItem>{genre.name}</ListItem>)}
                </List>
            </HStack>
        </React.Fragment>
    )
}

export default GenreList