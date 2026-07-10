function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.posterURL}
        alt={movie.title}
        width="220"
        height="300"
      />

      <h2>{movie.title}</h2>

      <p>{movie.description}</p>

      <h3>⭐ {movie.rating}</h3>
    </div>
  );
}

export default MovieCard;