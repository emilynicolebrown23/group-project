import React from 'react'
import Search from './Search.js'
import { withShelters } from '../context/ShelterProvider.js'

const SearchList = (props) => {
    console.log(props)
    const mappedSearch = props.searches.map(shelter => <Search
                                                            
                                                            key={shelter._id}
                                                            shelter= {shelter}
                                                                    />)

        return (
            <div>
                {mappedSearch}
            </div>
        )
}

export default withShelters(SearchList)