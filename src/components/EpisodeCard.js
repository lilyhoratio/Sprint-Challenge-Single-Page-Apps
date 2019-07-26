import React from 'react';
import {Card, Image} from 'semantic-ui-react';

export default function EpisodeCard ({anEpisode}) {
  const {name, episode, characters} = anEpisode

  const numCharacters = characters.length

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{episode}</Card.Meta>
      </Card.Content>
      <Card.Content extra>{numCharacters} characters</Card.Content>
    </Card>
  )
}
