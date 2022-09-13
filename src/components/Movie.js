const Movie = ({movie}) => {
    return (
        <div>
            <img src={movie.medium_cover_image} alt = {movie.title}/>
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
                {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}
export default Movie;