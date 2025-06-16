import { Input, Button } from '../styles/StyledComponent'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Banner.css'

function Banner() {
   const [searchQuery, setSearchQuery] = useState('')
   const navigate = useNavigate()

   const handleInputChange = (event) => {
      setSearchQuery(event.target.value)
   }

   const handleSearch = (event) => {
      event.preventDefault() //기본 sumbit 버튼의 성질 방지
      //공백 제거 함수
      if (searchQuery.trim()) {
         // navigate(이동할 경로)
         navigate(`/search?query=${searchQuery}`) //검색어를 query 파라미터로 전달
      }
   }

   return (
      <div className="banner">
         <div className="search">
            <h1 className="header_msg">환영합니다! 수백만 개의 영화를 지금 살펴보세요.</h1>

            <form className="search_form" onSubmit={handleSearch}>
               <Input $height="40px" $fontSize="1.1rem" value={searchQuery} onChange={handleInputChange} />
               <Button $width="100px" type="submit">
                  검색
               </Button>
            </form>
         </div>
      </div>
   )
}

export default Banner
