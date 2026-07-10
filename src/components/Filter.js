function Filter({ setSearchTitle, setSearchRating }) {
  return (
    <div className="filter">

      <input
        type="text"
        placeholder="Search movie..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Minimum Rating"
        min="0"
        max="5"
        onChange={(e) => setSearchRating(Number(e.target.value))}
      />

    </div>
  );
}

export default Filter;