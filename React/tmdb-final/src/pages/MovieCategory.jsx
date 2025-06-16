// 인기영화, 현재 상영중 영화, 개봉예정 영화
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/movies/moviesSlice'

import { Wrap, Main, Loading } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import Button from '@mui/material/Button'

function MovieCategory({ category }) {
   const dispath = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })

   // page가 바뀔때 또는 category가 바뀔때(메뉴 눌렀을때)마다 실행
   useEffect(() => {
      dispath(fetchMovies({ category, page: page[category] }))
   }, [dispath, page, category])

   // 페이지 번호 1씩 증가
   const loadMore = () => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: prevPage[category] + 1, // prevPage.category + 1
      }))
   }

   if (loading && page === 1) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <Loading />
            </Main>
            <Footer />
         </Wrap>
      )
   }

   if (error) {
      return (
         <Wrap>
            <Menu />
            <Main>
               <h2>Error: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieCard movies={movies} />
            <Button
               variant="outlined"
               sx={{
                  margin: '20px auto',
                  display: 'block',
                  width: '500px',
               }}
               onClick={loadMore}
            >
               더보기
            </Button>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
