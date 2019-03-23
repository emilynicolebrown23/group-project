import React, { Component } from 'react'
import axios from 'axios'


const ShelterContext = React.createContext()

class ShelterProvider extends Component {
    constructor(){
        super()
        this.state = {
            searches: [],
            dangerResult: ''
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

    setDanger = (dangerResult) => {
        this.setState({
            dangerResult
        })
    }



    

    

    render(){

        console.log(this.state.dangerResult)
        return (
            <ShelterContext.Provider
                value={{
                    searches: this.state.searches,
                    getSearch: this.getSearch,
                    setDanger: this.setDanger,
                    dangerResult: this.state.dangerResult
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