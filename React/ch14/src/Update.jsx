import React, { Component } from 'react'

class Update extends Component {
   constructor(props) {
      super(props)
      this.state = { count: 0 } // 초기 state
   }

   // 버튼 클릭 시 count 증가 → 업데이트 발생
   handleClick = () => {
      this.setState({ count: this.state.count + 1 })
   }

   // 2. 최초 마운트 또는 state/props 변경 → 호출
   // 업데이트시 기존 가상돔(Virtual DOM)과 새로운 가상돔(New Virtual DOM)을
   // 비교 후 변화된 부분을 새로운 가상돔(New Virtual DOM)에 반영
   render() {
      console.log('✔렌더링 중')
      return (
         <div>
            <p>{this.state.count}</p>
            <button onClick={this.handleClick}>+1</button>
         </div>
      )
   }

   // 마운트 후 한 번만 실행
   componentDidMount() {
      console.log('✔컴포넌트 마운트 완료')
   }

   // 1. props 또는 state 변경 시 호출됨 → 렌더링 여부 결정
   shouldComponentUpdate(nextProps, nextState) {
      console.log('✔shouldComponentUpdate 호출')
      console.log('현재 state:', this.state.count, '→ 다음 state:', nextState.count)
      return true // false이면 render()는 호출되지 않음
   }

   // 3. DOM이 업데이트 되기 직전의 props와 state를 가져올 수 있음
   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('✔getSnapshotBeforeUpdate 호출')
      console.log('이전 state:', prevState.count)
      return '스냅샷 데이터' // 아래 componentDidUpdate로 전달됨
   }

   // 4. 새로운 가상돔(New Virtual DOM)을 실제 브라우저 돔(Real Browser DOM)에 반영

   // 5.업데이트 완료 후 호출
   // useEffect(() => {}, [state]) 와 동일한 시점에 실행
   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('✔componentDidUpdate 호출')
      console.log('이전 state:', prevState.count)
      console.log('스냅샷:', snapshot)
   }

   // 6. 언마운트 직전 정리
   // useEffect(() => { return () => {}}, []) 뒷정리 함수와 동일한 시점에 실행
   // ctrl + s 버튼 누르면 실행됨
   componentWillUnmount() {
      console.log('😈componentWillUnmount 호출')
   }
}

export default Update
