import React, { Component } from 'react'
import { withShelters } from './context/ShelterProvider'


class Searchbar extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange = e => {
        const value = e.target.value
        this.setState({
            [e.target.name]: value
        })
    }
    // handleChange = e => {
    //     const { value } = e.target
    //     this.setState({userInput: value})
    // }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.userInput)
        this.props.getSearch(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }

    render(){
        console.log(this.props)
        return (
           
            <form onSubmit={this.handleSubmit}>
                <select name="userInput" className="selector" onChange= {this.handleChange}>
                    <option value = "----"> Select State </option>
                    <option value = "New York"> New York </option>
                    <option value = "California"> California </option>
                    <option value = "Illinois"> Illinois </option>
                    <option value = "Texas"> Texas </option> 
                    <option value = "Utah"> Utah </option>
                </select>
            
            <button className="search button">Search</button>
            </form>
        )
    }


}

export default withShelters(Searchbar)