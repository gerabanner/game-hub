import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import React from "react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import { Genre } from "../../types/genres/Genre.module";

type Props = {
    onSelectGenre: (genre: Genre) => void,
    selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {

    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <React.Fragment>
            <HStack>
                <List>
                    {data.map(genre =>
                        <ListItem key={genre.id} paddingY={'5px'}>
                            <HStack>
                                <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                                <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant={'link'} fontSize={'lg'}>{genre.name}</Button>
                            </HStack>
                        </ListItem>
                    )}
                </List>
            </HStack>
        </React.Fragment>
    )
}

export default GenreList