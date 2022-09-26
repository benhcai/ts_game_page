import { Game } from "types"
import { Link } from "react-router-dom"
import { ReactElement } from "react"

interface Props {
    content: Game
}

const GameCard = ({ content }: Props): ReactElement => {
    const { id, title, thumbnail, short_description, genre } = content
    const link = `/game/${id}`
    return (
        <Link to={link}>
            <img src={thumbnail} alt={`${title} logo`}></img>
            <h2>{title}</h2>
            <p>{short_description}</p>
            <p>{genre}</p>
        </Link>
    )
}

export default GameCard