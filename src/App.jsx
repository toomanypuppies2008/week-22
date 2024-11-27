import './App.css';
import Header from './components/header';
import Container from './components/container';
import { fetchData } from './fetchApi';
import { useEffect, useState } from 'react';

function App() {
  const [characters,setNames] = useState ([])
  useEffect(()=> {
    fetchData().then(data => setNames(data))
  },[])
 return(
  <div className='App'>
    <Header />
    <Container characters={characters}/>
  </div>
 )
}

export default App
