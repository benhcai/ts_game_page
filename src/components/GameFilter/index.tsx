import { ChangeEvent, ReactElement } from "react"
import { PLATFORMS, GENRES, TAGS, SORT_BY } from "./constants"
import { Flex, FormControl, FormLabel, Input, Select, HStack } from "@chakra-ui/react"


interface Props {
    onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => {
    return (
        <form onChange={onChange}>
            <FormControl>
                <Flex justifyContent="space-between" w="full" maxW="xl">
                    <FormLabel htmlFor="platform-select">
                        Platform:
                        <Select name="platform" id="platform-select">
                            {PLATFORMS.map(platform => (
                                <option value={platform.value} key={platform.value}>{platform.display}</option>
                            ))}
                        </Select>
                    </FormLabel>
                    <FormLabel htmlFor="genre-select">
                        Genre:
                        <Select name="genre" id="genre-select">
                            {GENRES.map(genre => (
                                <option value={genre.value} key={genre.value}>{genre.display}</option>
                            ))}
                        </Select>
                    </FormLabel>
                    <FormLabel htmlFor="tags-select">
                        Tags:
                        <Select name="tag" id="tags-select">
                            {TAGS.map(tags => (
                                <option value={tags.value} key={tags.value}>{tags.display}</option>
                            ))}
                        </Select>
                    </FormLabel>
                    <FormLabel htmlFor="sort_by-select">
                        Sort by:
                        <Select name="sortBy" id="sort_by-select">
                            {SORT_BY.map(sort_by => (
                                <option value={sort_by.value} key={sort_by.value}>{sort_by.display}</option>
                            ))}
                        </Select>
                    </FormLabel>
                </Flex>
            </FormControl>
        </form>
    )
}

export default GameFilter