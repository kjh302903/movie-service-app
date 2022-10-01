import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

const Detail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(()=> {
        getMovie();
    },[]);
    return (
        <div>
            {loading ?
                <h1>Loading...</h1> :
                <div>
                    <div className={styles.background}>
                        <img className = {styles.bimg} src= {movie.background_image} alt = "" />
                    </div>
                    <div className = {styles.contents}>
                        <img src={movie.medium_cover_image} alt={movie.title} />
                        <div className={styles.letters}>
                            <h1>{movie.title}</h1>
                            <ul>
                                {movie.genres.map((genre) => (
                                    <li key={genre}>{genre}</li>
                                ))}
                            </ul>
                            <p>year : {movie.year}</p>
                            <p>rating : {movie.rating} / 10</p>
                            <p>runtime : {movie.runtime}(min)</p>
                            <p>{movie.description_intro}</p>
                            
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Detail;