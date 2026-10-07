function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img className="movie-poster" src={movie.posterURL} alt={`${movie.title} poster`} loading="lazy" />
        <span className="rating-badge" aria-label={`Rating ${movie.rating} out of 5`}>
          <span aria-hidden="true">★</span> {Number(movie.rating).toFixed(1)}
        </span>
        <span className="poster-shade" />
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    </article>
  )
}

export default MovieCard