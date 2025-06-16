import React, { useEffect, useState } from 'react'
import { getMovies } from '../../api/tmdbApi'

const MoviesList = () => {
   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      // 영화 목록 가져오기
      const fetchMovies = async () => {
         try {
            setLoading(true)
            const movieList = await getMovies() // 1페이지의 영화 목록 가져오기
            setMovies(movieList.data.results)
         } catch (err) {
            setError(err.message)
         } finally {
            setLoading(false)
         }
      }

      fetchMovies()
   }, [])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>Popular Movies</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MoviesList
