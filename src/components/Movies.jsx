import React, { useState } from 'react'

const Movies = () => {
  const [movies, setMovies] = useState([
    { id: 1, name: "Harry Poter", imageSrc: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg" },
    { id: 2, name: "The Killer", imageSrc: "https://m.media-amazon.com/images/M/MV5BMTg3NzQ2NDgyNF5BMl5BanBnXkFtZTcwMDc1NzIyMw@@._V1_.jpg" },
    { id: 3, name: "A Diary of a wimpy kid", imageSrc: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg" },
    { id: 4, name: "James Bond 007", imageSrc: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg" }
  ].sort((a, b) => a.name.localeCompare(b.name)))

  const [selectedOption, setSelectedOption] = useState('name-up')


  async function handleOnSubmit(e) {
    e.preventDefault()
    let name = e.target[0].value;
    let url = e.target[1].value;
    setMovies([...movies, {
      id: [...movies].length + 1,
      name: name,
      imageSrc: url
    }])
  
    console.log(movies)
    
    e.target.reset();
    sorting(selectedOption)
  }

  function handleOnChange(e) {
    let newSelectedOption = (e.target.value);
    setSelectedOption(newSelectedOption)
    sorting(newSelectedOption);
  }

  function sorting(selectedOption) {
    console.log(selectedOption)
    selectedOption === 'name-up' ? setMovies((prev) => [...prev].sort((a, b) => a.name.localeCompare(b.name))) :
    selectedOption === 'name-down' ? setMovies((prev) => [...prev].sort((a, b) => b.name.localeCompare(a.name))) :
    selectedOption === 'id' && setMovies((prev) => [...prev].sort((a, b) => a.id - b.id))

  }


  return (
    <div className='test'>
      <h1>Movies</h1>

      <select id="filtering" onChange={handleOnChange}>
        <option value="name-up">Filter by Name A-Z</option>
        <option value="name-down">Filter by Name Z-A</option>
        <option value="id">Filter by Id</option>
      </select>

      {movies.map((movie, i) => {
        return (
          <div key={movie.id}>
            <h5>{i + 1}</h5>
            <h3>{movie.name}</h3>
            <img alt={movie.name} src={movie.imageSrc}></img>
          </div>
        )
      })}

      <form onSubmit={handleOnSubmit}>
        <label>Movie Name: </label>
        <input type="text" />
        <label>Movie Image URL: </label>
        <input type="text" />
        <button type="submit">Add</button>
      </form>

    </div>
  )
}

export default Movies
