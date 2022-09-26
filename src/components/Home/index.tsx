import { ReactElement } from "react"
import GameList from "components/GameList"
import withErrorBoundary from "components/hoc/withErrorBoundary"

const Home = (): ReactElement => {

    return (
        <div>
            <GameList></GameList>
        </div>
    )
}

export default withErrorBoundary(Home)