import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import styles from "./Home.module.css"
import Loading from "../components/Loading"

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`
        )).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className={styles.container}>
            {loading ?
                <Loading></Loading> :
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            movie={movie} />
                    ))}
                </div>
            }
        </div>
    );
}

export default Home;
