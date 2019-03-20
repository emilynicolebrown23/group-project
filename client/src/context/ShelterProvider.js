import React, { Component } from 'react'
import axios from 'axios'


const ShelterContext = React.createContext()

class ShelterProvider extends Component {
    constructor(){
        super()
        this.state = {
            shelters: []
        }
    }

    getSearch = (userInput) => {
        axios.get(`./shelterlist`)
        this.setState({
            searches: Response.data
        })
    }

    return(){
        return (
            <ShelterContext.Provider
                value={{
                    searches: this.state.searches
                }}>
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