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
        const { value } = e.target
        this.setState({userInput: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.getSearch(this.state.userInput)
        this.setState({
            userInput: e.target.value,
            userInput: ''
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="search-form">
                <input className= 'search'
                    type='select'
                    name='search'
                    value={this.state.search}
                    placeholder= "       Search     "
                    onChange= {this.handleChange}
                    />
                <select className="selector">
                    <option value = "----"> ---- </option>
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