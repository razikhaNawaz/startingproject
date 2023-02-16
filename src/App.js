import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const App=() => {
  const [movies, setMovies]= useState([]);
  const [isLoading, setIsLoading]= useState(false);//initially set loading to false

  async function fetchMoviesHandler(){
    setIsLoading(true);   //when is function is called we need to set to true
    const response=await fetch('https://swapi.dev/api/films');
    const data= await response.json();
    
      const transformedMovies=data.results.map(movieData=>{
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformedMovies)
      setIsLoading(false); //once data is retrieved we need to set o false
    }
return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} >Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && <p>No movies found.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}
export default App;

/*function fetchMoviesHandler(){
  fetch('https://swapi.dev/api/films').then((response)=>{
    return response.json();
  })
  .then((data)=>{
    const transformedMovies=data.results.map(movieData=>{
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      }
    })
    setMovies(transformedMovies)


     {!isLoading && <MoviesList movies={movies} />} //we render the movies list when loading
     {isLoading && <P>Loading...</P>} when loading it should display like this
  })*/