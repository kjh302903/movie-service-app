import {Link} from "react-router-dom";
import styles from "./Movie.module.css"

const Movie = ({movie}) => {
    return (
        <div className = {styles.movie}>
            <div className={styles.show}>
                <div className= {styles.Img}>
                    <img src={movie.medium_cover_image} alt = {movie.title}/>
                </div>
                <div className= {styles.contents}>
                <h2>
                    <Link to = {`/movie/${movie.id}`}>
                        {movie.title}
                    </Link>
                </h2>
                <p>year : {movie.year}</p>
                <p>rating : {movie.rating}</p>
                <p>{movie.summary ? (movie.summary.length > 120 ? `${movie.summary.slice(0,120)}...` : movie.summary) : null}</p>
                </div>
            </div>
        </div>
    );
}
export default Movie;