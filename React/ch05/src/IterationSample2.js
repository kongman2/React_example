function IterationSample2() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name, index) => <li key={index}>{name}</li>)

   /*
   리액트에서는 요소를 반복해서 생성할때 key를 지정해주는 것이 좋다.
   key -> 요소들을 구분하기 위한 것

   nameList = [<li key="0">눈사람</li>, <li key="1">얼음</li>, <li key="2">눈</li>, <li key="3">바람</li>]
   */
   return <ul>{nameList}</ul>
}

export default IterationSample2
