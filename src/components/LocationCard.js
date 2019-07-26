import React from 'react';
import {Card, Image} from 'semantic-ui-react';

// export default function LocationCard ({ name, type, dimension, residents }) {
export default function LocationCard ({location}) {
  const { name, type, dimension, residents } = location

  const numResidents = residents.length;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{type}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {numResidents} residents
      </Card.Content>
    </Card>
  )
}
