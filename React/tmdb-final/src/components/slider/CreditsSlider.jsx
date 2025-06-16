import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieCredits } from '../../features/movies/moviesSlice'
import { useParams } from 'react-router-dom'
import { Loading, MarginDiv } from '../../styles/StyledComponent'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/scrollbar'
import '../css/CreditsSlider.css'

function CreditsSlider() {
   const { movieId } = useParams()
   const dispatch = useDispatch()
   const { movieCredits, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieCredits(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <Loading />
   if (error) return <p>Error: {error}</p>

   return (
      <MarginDiv>
         <h2>출연배우</h2>
         <Swiper
            slidesPerView={5}
            spaceBetween={30}
            scrollbar={{
               hide: false,
            }}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            modules={[Scrollbar, Autoplay]}
            className="mySwiper"
         >
            {movieCredits &&
               movieCredits.cast.map((cast) => (
                  <SwiperSlide key={cast.id}>
                     <div style={{ padding: 20 }}>
                        <img src={cast.profile_path ? `https://image.tmdb.org/t/p/w400${cast.profile_path}` : '/images/person.png'} alt={cast.name} />
                        <p style={{ fontWeight: 'bold' }}>{cast.name}</p>
                     </div>
                  </SwiperSlide>
               ))}
         </Swiper>
      </MarginDiv>
   )
}

export default CreditsSlider
