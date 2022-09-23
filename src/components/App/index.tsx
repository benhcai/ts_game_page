import { ReactElement, useState } from "react"
import Home from "components/Home"

const App = (): ReactElement => {
    const [count, setCount] = useState(0)

    return (
        <div>
            Hi
            <div>{ count }</div>    
            <div className="">
                <button onClick={() => {
                    setCount(count => ++count)
                }}>Increment</button>
            </div>
            <Home></Home>
        </div>
    )
}

export default App