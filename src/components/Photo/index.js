import React from 'react'

export const Photo = (props) => {
  return (
    <img 
        style={{width: '100%', height: '200px', margin:'0'}} 
        src={props.img}
        alt={props.description}
        onClick={props.navigate}
        />
  )
}
