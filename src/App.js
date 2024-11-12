import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await(
      await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=6.5&sort_by=year')
  ).json();
  setMovie(json.data.movies);
  setLoading(false);
  };
  useEffect(() =>{
    getMovie()
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
        ):(
        <div>
          {movies.map((movie) =>( 
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={movie.medium_cover_image}/>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            ))}
          </div>)}
    </div>
  );
}

export default App;
