import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Services from "./Services"
import About from "./About"

function App(){
    return(
        <div>
            <nav>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/services">Services</Link>
            </nav>
            <main>
                <Switch>
                    <Route exact path = "/">
                        <Home />
                    </Route>
                    <Route path = "/about">
                        <About />
                    </Route>
                    <Route path = "/services">
                        <Services />
                    </Route>
                </Switch>
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default App