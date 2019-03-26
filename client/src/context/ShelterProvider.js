import React, { Component } from 'react'
import axios from 'axios'


const ShelterContext = React.createContext()

class ShelterProvider extends Component {
    constructor(){
        super()
        this.state = {
            searches: [],
            dangerResult: '',
            dangerLevel: ''
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
        if (dangerResult >= 8){
            this.setState({
                dangerLevel: "high",
                dangerResult
            })
        } else if (dangerResult >= 5 && dangerResult < 8){
            this.setState({
                dangerLevel: "moderate",
                dangerResult
            })
        } else if (dangerResult < 5 ){
            this.setState({
                dangerLevel: "variable",
                dangerResult
            })
        
        }

    }

    // setDangerLevel = (dangerResult) => {
    //     if (dangerResult >= 8){
    //         this.setState({
    //             dangerLevel: "high"
    //         })
    //     } else if (dangerResult >= 5 && dangerResult < 8){
    //         this.setState({
    //             dangerLevel: "moderate"
    //         })
    //     } else if (dangerResult < 5 ){
    //         this.setState({
    //             dangerLevel: "variable"
    //         })
        
    //     }
    // }

    render(){

        console.log(this.state.dangerResult)
        return (
            <ShelterContext.Provider
                value={{
                    searches: this.state.searches,
                    getSearch: this.getSearch,
                    setDanger: this.setDanger,
                    dangerResult: this.state.dangerResult,
                    dangerLevel: this.state.dangerLevel
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