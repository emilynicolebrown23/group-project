import React, { Component } from 'react'
import axios from 'axios'


const ShelterContext = React.createContext()

class ShelterProvider extends Component {
    constructor(){
        super()
        this.state = {
            searches: []
        }
    }

    getSearch = (userInput) => {
        console.log(userInput)
       
        axios.get(`/shelterlist/?state=${userInput}`).then (response => {
            console.log(response.data)
            this.setState({
                searches: response.data,
                usersState: ''
            })
        })
    }

    

    

    render(){
        return (
            <ShelterContext.Provider
                value={{
                    searches: this.state.searches,
                    getSearch: this.getSearch
                }}>
                {this.props.children}
            </ShelterContext.Provider>
        )
    }


}

export const withShelters = C => props => (
    <ShelterContext.Consumer>
            { value => <C {...props} {...value}/>}
    </ShelterContext.Consumer>
)


export default ShelterProvider