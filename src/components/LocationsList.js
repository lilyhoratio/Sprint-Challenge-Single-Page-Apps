import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard.js';

export default function LocationsList() {

    const [locations, setLocations] = useState([])
    // console.log(locations)
  
    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
            console.log(response.data.results)
            setLocations(response.data.results)
        })
        .catch(error => console.log("API error:", error))
      
    }, [])
  
    return <section className='location-list grid-view'>
        {/* {locations.map(location => (<LocationCard location={location}/>))} */}
        {locations.map(location => (<LocationCard {...location}/>))}
      </section>
}
