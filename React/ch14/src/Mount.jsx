import React, { Component } from 'react'

class Mount extends Component {
   // 1. 컴포넌트 생성시 가장먼저 실행되는 함수, 이 과정에서 초기 state 지정
   constructor(props) {
      super(props)
      this.state = { count: 0 } // 초기 state
   }

   // 2. 가상돔(Virtual DOM)만 구성됨
   render() {
      console.log('✔렌더링 중')
      return <div>{this.state.count}</div>
   }

   // 3. 실제 브라우저 돔(Real Browser DOM)이 구성됨
   // ref(useRef)가 지정되어 있다면 이 시점에 해당 DOM에 연결
   // => 실제로 브라우저 상에 보이는 시점

   // 4. 컴포넌트가 화면에 모두 렌더링되고 난 뒤 실행됨
   // => 실제 DOM 접근 가능
   // => API 호출 가능

   // useEffect(() => {}, []) 와 동일
   componentDidMount() {
      console.log('✔컴포넌트 마운트 완료')
   }
}

export default Mount
