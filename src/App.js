import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {

  const [movies, setMovies] = useState([
    {
      title: "Avatar",
      description: "A marine on an alien planet.",
      posterURL: "https://m.media-amazon.com/images/I/61OUGpUfAyL.jpg",
      rating: 5
    },
    {
      title: "Interstellar",
      description: "A journey through space and time.",
      posterURL:
        "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
      rating: 4
    },
    {
      title: "The Dark Knight",
      description: "Batman fights the Joker.",
      posterURL:
        "https://m.media-amazon.com/images/I/81AJdOIEIhL._AC_SL1500_.jpg",
      rating: 5
    }
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
  );

  return (
    <div className="App">
      <h1>Movie App</h1>

      <Filter
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
      />

      <AddMovie addMovie={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;