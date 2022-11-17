import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movieData, setMovieData]=useState([])

  function fetchMovieHandler(){ 
    //console.log("hi")  
    fetch('https://swapi.dev/api/films/').then(response=>{
       
    return response.json();    
    })
    .then(data=>{
      //debugger
      const transormedData=data.results.map(elem=>{
        return{
          id:elem.episode_id,
          title: elem.title,
          releaseDate: elem.release_date,
          openingText: elem.opening_crawl
        }
      })
      setMovieData(transormedData)
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movieData} />
      </section>
    </React.Fragment>
  );
}

export default App;
