import styled from 'styled-components';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchBar/SearchBar.jsx';
import characters from './data.js';
import './App.css'

const Titulo = styled.div`
  font-size: 2em;
  color: blue;
  text-align: center;
`

function App() {
  return (
  <>
        <div>
           <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
      <Titulo>  
        <h1>COLECCION RICK AND MORTY</h1>
      </Titulo>
      <div className='App' >
         <Cards characters={characters} />
      </div> 
      </>
  )
}

export default App
