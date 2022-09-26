import { ReactElement, ChangeEvent } from "react"
import { Game } from 'types'
import GameCard from "components/GameCard"
import GameFilter from "components/GameFilter"

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
        <div>
            <GameFilter onChange={onFilterChange} />
            <ul>
                {games.map(game => (
                    < li key={game.id} >
                        <GameCard content={game}></GameCard>
                    </li>
                ))}
            </ul >
        </div>
    )
}

export default GameList