import {Link} from "react-router-dom";
import styles from "./Movie.module.css"

const Movie = ({movie}) => {
    return (
        <div className = {styles.movie}>
            <div className= {styles.Img}>
                <img src={movie.medium_cover_image} alt = {movie.title}/>
            </div>
            <div className= {styles.contents}>
            <h2>
                <Link to = {`/movie/${movie.id}`}>
                    {movie.title}
                </Link>
            </h2>
            <p>{movie.year}</p>
            <p>{movie.rating}</p>
            <p>{movie.summary}</p>
            </div>
        </div>
    );
}
export default Movie;