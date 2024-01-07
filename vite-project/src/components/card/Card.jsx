
import React from 'react';
import './Card.css'


export default function Card(props) {
   
   return(
      <div key = {props.id} className = "carta" >
          <button  className='botonEliminar' onClick={() => {alert(props.onClose)}}>X</button>
          <h2 className='numeroDeCarta'>{props.id}</h2>
          <h2 className='nombre'>{props.name}</h2>
          <h2 className='status'> {props.status}</h2>
          <h2 className='species'>{props.species}</h2>
          <h2 className='gender'>{props.gender}</h2>
          <h2 className='origen'> {props.origen}</h2>
          <img src={props.image} alt=''  margin = '10px'/>
      </div>
    
   );
}
