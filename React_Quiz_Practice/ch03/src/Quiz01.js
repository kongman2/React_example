import App from './App.css'

function Quiz01(props) {
   const { children, rain, wind, temp } = props
   return (
      <div>
         <p>오늘은 {children}</p>
         <p>오늘의 강수확률은 {rain}</p>
         <p>오늘의 풍속은 {wind}</p>

         <table>
            <tr>
               <th>시간</th>
               <th>온도</th>
            </tr>
            <tr>
               <td>오전</td>
               <td>{temp.morning}</td>
            </tr>
            <tr>
               <td>오후</td>
               <td>{temp.afternoon}</td>
            </tr>
            <tr>
               <td>저녁</td>
               <td>{temp.evening}</td>
            </tr>
         </table>
      </div>
   )
}

export default Quiz01
