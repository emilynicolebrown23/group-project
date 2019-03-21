import React from 'react'
import { withShelters } from '../context/ShelterProvider'

const Search = (props) => {
    const {name, address: {street, city, state: addressState}, phone, description, website, photo, state } = props.shelter

    // let street = address[address.length - 3]
    // let city = ''
    // let state = ''

    console.log(photo)
    return (
        <div className="search-container">
            <h1>{name}</h1>
            <p>Street Address: {street} City:{city} {addressState}</p>
            <h4>Phone number: {phone}</h4>
            <p>{description}</p>
            <a target="_new" href={website}>Visit website</a>
            <img src={photo} alt="women shelter"/>
            

        </div>
    )

}


export default withShelters(Search)
