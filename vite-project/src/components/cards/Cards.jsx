import Card from "../card/Card"
import './cards.css'

export default function Cards(props) {

   return(<div className="contenedor">
         {props.characters.map((item) =>{
           return(
            <Card 
                id = {item.id}
                onClose = {item.onClose}
                name = {item.name}
                status = {item.status}
                species = {item.species}
                gender = {item.gender}
                origen = {item.name.origen}
                image ={item.image}
                />
           )
          })}
       </div>
      ) 
}
