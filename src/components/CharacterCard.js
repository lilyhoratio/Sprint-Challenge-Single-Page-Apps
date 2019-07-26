import React from 'react'

export default function CharacterCard ({character}) {
  const {id, name, status, species, location} = character;
  console.log(location)
  return (
    <div>
      <h2>{name}</h2>
      <span>{location.name}</span>
    </div>
  )
}
