import { Game } from "types"
import { Link } from "react-router-dom"
import { ReactElement } from "react"
import { AspectRatio, Box, Heading, Image } from "@chakra-ui/react"

interface Props {
    content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
    const { id, title, thumbnail, short_description, genre } = content
    const link = `/game/${id}`
    return (
        <Box bg="gray.600" color="gray.200" borderRadius="md" overflow="hidden" h="md">
            <Link to={link}>
                <AspectRatio ratio={1} width="full" maxHeight="xs" >
                    <Image src={thumbnail} alt={`${title} logo`}></Image>
                </AspectRatio>
            </Link>
            <Box padding={2}>
                <Heading size="">{title}</Heading>
                <p>{short_description}</p>
                <p>{genre}</p>
            </Box>
        </Box >
    )
}

export default GameCard