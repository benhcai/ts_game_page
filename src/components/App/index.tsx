import { ReactElement, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "components/Home"
import { ChakraProvider, FormLabel, FormControl, Select } from "@chakra-ui/react"


const App = (): ReactElement => {

    return (
        <BrowserRouter>
            <ChakraProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </ChakraProvider>
        </BrowserRouter >
    )
}

export default App