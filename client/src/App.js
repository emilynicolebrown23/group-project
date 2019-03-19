import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Involved from './components/Involved'
import Prevention from './components/Prevention'
import Resources from './components/Resources'
import Landing from './components/Landing'
import Home from './components/Home'
import './style.css'

class App extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         user: "Joe"
    //     }
    // }


    render(){
        return (
            <div className="app-container">
                <Nav/>
                <Switch>
                    <Route exact path="/" component= { Home } />
                    <Route path="/landing" component= { Landing } />
                    <Route path="/resources" component= { Resources } />
                    <Route path="/prevention" component={ Prevention } />
                    <Route path="/involved" component={ Involved } /> 
                    <Route path="/contact" component= { Contact } />
                </Switch>

            </div>
        )
    }
}


export default withRouter(App)
