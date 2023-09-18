import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {

    const { data, isLoading, error } = useGenres();

    if(error) return null;
    if(isLoading) return <Spinner/>;

    return (
        <React.Fragment>
            <HStack>
                <List>
                    {data.map(genre =>
                        <ListItem paddingY={'5px'}>
                            <HStack>
                                <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                                <Text fontSize={'lg'}>{genre.name}</Text>
                            </HStack>
                        </ListItem>
                    )}
                </List>
            </HStack>
        </React.Fragment>
    )
}

export default GenreList