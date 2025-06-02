function Quiz01() {
   return (
      <>
         <p>오늘의 날씨는 맑음입니다.</p>
         <p>오늘의 강수확률은 0%입니다.</p>
      </>
   )
}

// 에러이유 : 부모요소가 없기 떄문이다.(해결: 부모태그나 fragment 이용)
export default Quiz01
