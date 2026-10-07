function Filter({ titleFilter, setTitleFilter, minimumRating, setMinimumRating }) {
  return (
    <div className="filter-controls">
      <label className="search-control">
        <span className="search-icon" aria-hidden="true" />
        <span className="visually-hidden">Search by title</span>
        <input
          type="search"
          value={titleFilter}
          onChange={(event) => setTitleFilter(event.target.value)}
          placeholder="Search films & shows"
        />
      </label>
      <label className="rating-control">
        <span className="filter-star" aria-hidden="true">★</span>
        <span className="visually-hidden">Minimum rating</span>
        <select value={minimumRating} onChange={(event) => setMinimumRating(event.target.value)}>
          <option value="0">Any rating</option>
          <option value="3">3.0 & up</option>
          <option value="4">4.0 & up</option>
          <option value="4.5">4.5 & up</option>
        </select>
        <span className="select-chevron" aria-hidden="true">⌄</span>
      </label>
    </div>
  )
}

export default Filter