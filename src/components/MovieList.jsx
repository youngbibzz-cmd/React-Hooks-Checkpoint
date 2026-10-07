import { useState } from 'react'
import AddMovie from './AddMovie.jsx'
import Filter from './Filter.jsx'
import MovieCard from './MovieCard.jsx'

const startingMovies = [
  {
    id: 1,
    title: 'Inception',
    description: "A skilled thief enters people's dreams to steal secrets.",
    posterURL: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Interstellar',
    description: 'A team of explorers travels beyond this galaxy to save humanity.',
    posterURL: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'The Grand Budapest Hotel',
    description: 'A legendary concierge and his lobby boy become tangled in a caper.',
    posterURL: 'https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg',
    rating: 4.6,
  },
  {
    id: 4,
    title: 'The Matrix',
    description: 'A hacker discovers the startling truth behind the world he knows.',
    posterURL: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    rating: 4.7,
  },
  {
    id: 5,
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with the Fremen on a path of destiny and revenge.',
    posterURL: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    rating: 4.8,
  },
  {
    id: 6,
    title: 'Everything Everywhere All at Once',
    description: 'An unlikely hero discovers that the fate of every universe is in her hands.',
    posterURL: 'https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
    rating: 4.5,
  },
]

function MovieList() {
  const [movies, setMovies] = useState(startingMovies)
  const [titleFilter, setTitleFilter] = useState('')
  const [minimumRating, setMinimumRating] = useState('0')
  const [isAddOpen, setIsAddOpen] = useState(false)

  const visibleMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.trim().toLowerCase())
    && movie.rating >= Number(minimumRating),
  )

  function addMovie(movieDetails) {
    setMovies((currentMovies) => [
      { ...movieDetails, id: Math.max(0, ...currentMovies.map((movie) => movie.id)) + 1 },
      ...currentMovies,
    ])
    setIsAddOpen(false)
  }

  return (
    <section className="collection" id="collection" aria-labelledby="collection-title">
      <div className="collection-heading">
        <div>
          <p className="eyebrow collection-eyebrow">YOUR EVER-GROWING WATCHLIST</p>
          <h2 id="collection-title">The collection <span className="collection-count">{movies.length.toString().padStart(2, '0')}</span></h2>
        </div>
        <button className="add-button" type="button" onClick={() => setIsAddOpen(true)}>
          <span className="add-plus" aria-hidden="true">+</span> Add a title
        </button>
      </div>

      <div className="collection-toolbar">
        <div className="collection-label">ALL TITLES <span>{visibleMovies.length.toString().padStart(2, '0')}</span></div>
        <Filter
          titleFilter={titleFilter}
          setTitleFilter={setTitleFilter}
          minimumRating={minimumRating}
          setMinimumRating={setMinimumRating}
        />
      </div>

      {visibleMovies.length > 0 ? (
        <div className="movie-grid">
          {visibleMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      ) : (
        <div className="empty-state">
          <span className="empty-mark" aria-hidden="true">⌕</span>
          <h3>No titles found</h3>
          <p>Try another title or lower the minimum rating.</p>
        </div>
      )}

      <AddMovie isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} onAdd={addMovie} />
    </section>
  )
}

export default MovieList