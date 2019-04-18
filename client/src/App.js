import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Involved from './components/Involved'
import Prevention from './components/Prevention'
import Resources from './components/Resources'
import Landing from './components/Landing'
import Home from './components/Home'
import { withShelters } from './context/ShelterProvider'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            info: []
        }
    }


    render(){
        const {location} = this.props
        console.log(location)
        return (
            <div className="app-container">
                {location.pathname !== "/" && <Nav/>}
                <Switch>     
                    <Route exact path="/" component= { Landing } />
                    <Route path="/home" component= { Home } />
                    <Route path="/resources" component= { Resources } />
                    <Route path="/prevention" component={ Prevention } />
                    <Route path="/involved" component={ Involved } /> 
                    <Route path="/contact" component= { Contact } />
                </Switch>
                <div>
                    <ScrollUpButton
                        StopPosition={0}
                        ShowAtPosition={150}
                        EasingType='easeOutCubic'
                        AnimationDuration={500}
                        ContainerClassName='ScrollUpButton__Container'
                        TransitionClassName='ScrollUpButton__Toggled'  
                        style={{}}
                        ToggledStyle={{}}
                    />
                </div>

            </div>
        )
    }
}


export default withRouter(withShelters(App))
