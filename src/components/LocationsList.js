import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import LocationCard from './LocationCard.js';

export default function LocationsList() {

    const [Locations, setLocations] = useState([])
    console.log(Locations)
  
    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
          setLocations(response.data.results)
        })
        .catch(error => console.log("API error:", error))
      
    }, [])
  
    return <section className='location-list grid-view'>
        {/* {Locations.map(location => (<LocationCard location={location}/>))} */}
      </section>
}
