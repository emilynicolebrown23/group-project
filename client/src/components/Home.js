import React from 'react'
import Searchbar from '../Searchbar'
import SearchList from './SearchList'

const Home = () => {
    return (
        <div className="home-container">
               
            <Searchbar/>
            <SearchList/>
        </div>
    )
}

export default Home