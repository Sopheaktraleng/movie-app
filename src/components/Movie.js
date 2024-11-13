import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Styles from "./Movie.module.css"
function Movie({coverimg, title, summary, genres, year }){
    return (
        <div className={Styles.movie}>
              <img src={coverimg} alt={title} className={Styles.movie_img}/>
              <h2>
                <Link to ="/movie" className={Styles.movie_title}>{title}</Link>
              </h2>
              <h3 className={Styles.movie_year}>{year}</h3>
              <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
              <ul className={Styles.movie_genres}>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
        </div> 
    );
}
Movie.propTypes = {
  coverimg: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;