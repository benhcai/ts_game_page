import { ReactElement, ChangeEvent } from "react"
import { Game } from 'types'
import GameCard from "components/GameCard"
import GameFilter from "components/GameFilter"
import { SimpleGrid, ListItem, UnorderedList, ListIcon, Box } from "@chakra-ui/react"

interface Props {
    err?: string
    games: Game[],
    onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
    if (err) {
        return <p>Unable to fetch games</p>
    }
    if (games?.length === 0) {
        return <p>No games available</p>
    }
    return (
        <Box>
            <GameFilter onChange={onFilterChange} />
            <UnorderedList listStyleType="none" margin={10} marginTop={0}>
                <SimpleGrid columns={[1, 1, 2, 3, 4]} spacingX={[2]} spacingY={[4]}>
                    {games.map(game => (
                        <ListItem key={game.id} >
                            <GameCard content={game}></GameCard>
                        </ListItem>
                    ))}
                </SimpleGrid>
            </UnorderedList>
        </Box >
    )
}

export default GameList