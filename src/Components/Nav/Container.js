import React from 'react'
import Cardd from '../Cards/Cardd'
import fellas from '../../DB/fellas';
import './Container.css';

function createCard(contact) {
  return (

    <Cardd 
      key={contact.id}
      name={contact.name}
      image={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

const Container = () => {
  return (
<>
<h1 style={{display:"flex",justifyContent:"center"}} >GoMyCode Fellas</h1>
<div className="grid-container">
      
      {fellas.map(createCard)}
    </div></>
      
  )
}

export default Container
