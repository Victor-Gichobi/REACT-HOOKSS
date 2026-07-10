import { useState } from "react";

function AddMovie({ addMovie }) {

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: ""
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    addMovie({
      ...movie,
      rating: Number(movie.rating)
    });

    setMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: ""
    });
  };

  return (
    <div className="add-movie">

      <input
        name="title"
        placeholder="Title"
        value={movie.title}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={movie.description}
        onChange={handleChange}
      />

      <input
        name="posterURL"
        placeholder="Poster URL"
        value={movie.posterURL}
        onChange={handleChange}
      />

      <input
        name="rating"
        type="number"
        min="1"
        max="5"
        placeholder="Rating"
        value={movie.rating}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        Add Movie
      </button>

    </div>
  );
}

export default AddMovie;