import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

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
                    <img src={movie.medium_cover_image} alt={movie.title} />

                    <h1>{movie.title}</h1>
                    <ul>
                        {movie.genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                    <p>{movie.description_intro}</p>
                </div>
            }
        </div>
    );
}

export default Detail;