import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const App=() => {
  const [movies, setMovies]= useState([]);
  const [isLoading, setIsLoading]= useState(false);//initially set loading to false
  const [error, setError]= useState(null);
  //const [timer, setTimer]=useState(null);

 
  const fetchMoviesHandler=useCallback(async()=>{
    setIsLoading(true);   //when is function is called we need to set to true
    setError(null);
    try {
      const response=await fetch('https://swapi.dev/api/films');
      if (!response.ok){
        throw new Error('Something went wrong');
      }
      const data= await response.json();
      
        const transformedMovies=data.results.map(movieData=>{
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date
          };
        });
        setMovies(transformedMovies);
      } catch (error){
        setError(error.message)
      }

        setIsLoading(false);  //once data is retrieved we need to set o false 
    }, []);
    useEffect(()=>{
      fetchMoviesHandler();
    }, [fetchMoviesHandler])
  
    /*useEffect(() => {
      return () => {
        clearInterval(timer);
      };
    }, [timer]);
    const retryHandler = () => {
      setTimer(setInterval(() => {
        console.log("Retrying");
      }, 1000));
    };
  
    const cancelHandler = () => {
      clearInterval(timer);
    };*/
    let content= <p>Found no movies!</p>  
    if(error){
      content=<p>{error}</p>
     /*content=<p>{error} && {<button onClick={retryHandler}>Retrying...</button>} && 
     {<button onClick={cancelHandler}>Cancel</button>}</p>;
     }*/
    }
    if (movies.length>0) {
    content= <MoviesList movies={movies} />;
   }
   if (isLoading) {
    content= <p>Loading...</p>;
   } 
return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} >Fetch Movies</button>
      </section>
      <section>
        {content}
        
      </section>
    </React.Fragment>
  );
}
export default App;

