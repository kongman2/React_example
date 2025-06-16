import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import MovieCategory from './pages/MovieCategory'
import SearchResults from './pages/SearchResults'
import NotFound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />

         {/* 
         최초로 메뉴 클릭시 MovieCategory 컴포넌트 렌더링(마운트) 이후 메뉴 클릭시 MovieCategory 컴포넌트 재렌더링 X (라우터를 사용한 경우 같은 컴포넌트 사용시 props가 바뀌어도 재렌더링 X) 
         => category props 가 바뀔때 재렌더링이 일어나도록 하기 위해서 key props 사용 필요
         */}

         <Route path="/popular" element={<MovieCategory key="popular" category="popular" />} />
         <Route path="/now_playing" element={<MovieCategory key="now_playing" category="now_playing" />} />
         <Route path="/upcoming" element={<MovieCategory key="upcoming" category="upcoming" />} />
         <Route path="/search" element={<SearchResults />} />
         <Route path="/detail/:movieId" element={<Detail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
