import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { useGenres } from "../../hooks/genres/useGenres"
import React from "react";

const GenreList = () => {

    const { genres, isLoading, error } = useGenres();

    return (
        <React.Fragment>
            {error && <Text>{error}</Text>}
            {isLoading && <Text>Loading...</Text>}
            <HStack>
                <List>
                    {genres.map(genre => <ListItem>{genre.name}</ListItem>)}
                </List>
            </HStack>
        </React.Fragment>
    )
}

export default GenreList