import './searchBar.css'


export default function SearchBar(props) {
   return (
      <div className='container'>
         <input id='myInput' className='botonAgregar' type='search' placeholder="id.."/>
         <button className='botonAgregar' onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
