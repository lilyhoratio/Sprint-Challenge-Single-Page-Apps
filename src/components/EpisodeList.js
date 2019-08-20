import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js';

export default function EpisodeList() {

    const [episode, setEpisode] = useState([])
    console.log(episode)
  
    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
            console.log(response.data.results)
            setEpisode(response.data.results)
        })
        .catch(error => console.log("API error:", error))
      
    }, [])
  
    return <section className='episode-list grid-view'>
        {episode.map(anEpisode => (<EpisodeCard anEpisode={anEpisode}/>))}
      </section>
}
