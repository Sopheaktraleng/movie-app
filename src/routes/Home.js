import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
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
    return(
        <div>
            {loading ? (
                <h1>Loading...</h1>
                ):(
                    <div>
                        {movies.map((movie) =>( 
                            <Movie
                                key={movie.id} 
                                coverimg={movie.medium_cover_image} 
                                title = {movie.title} 
                                summary={movie.summary} 
                                genres={movie.genres}  
                            />
                        ))}
                    </div>)}
        </div>
    );
}
export default Home;