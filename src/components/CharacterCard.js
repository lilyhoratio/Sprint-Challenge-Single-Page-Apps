import React from 'react';
import {Card, Image, Header} from 'semantic-ui-react';

export default function CharacterCard ({character}) {
  const {name, status, species, location, image} = character;
  
  return (
    <Card>
      <Card.Content>
        <Image src={image} />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{species}</Card.Meta>
        <Card.Description>Rick is {status} and lives in {location.name}</Card.Description>
      </Card.Content>
    </Card>
  )
};