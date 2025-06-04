import React, { useState } from 'react'

function Quiz03() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])
   const employeesList = employees.map((employee) => (
      <li
         key={employee.id}
         onDoubleClick={() => {
            onRemove(employee.id)
         }}
      >
         사원명: {employee.name}, 부서: {employee.dept}
      </li>
   ))

   const [inputName, setInputName] = useState('')
   const [inputDept, setInputDept] = useState('')
   const [nextId, setNextId] = useState(5)

   const onChangeName = (e) => setInputName(e.target.value)

   const onChangeDept = (e) => setInputDept(e.target.value)

   const onClick = () => {
      const nextEmployees = employees.concat({
         id: nextId,
         name: inputName,
         dept: inputDept,
      })
      setEmployees(nextEmployees)
      setNextId(nextId + 1)
      setInputName('')
      setInputDept('')
   }

   const onRemove = (id) => {
      const nextEmployees = employees.filter((employee) => employee.id !== id)
      setEmployees(nextEmployees)
   }

   return (
      <>
         <input type="text" value={inputName} placeholder="사원 이름" onChange={onChangeName} />
         <input type="text" value={inputDept} placeholder="부서" onChange={onChangeDept} />
         <button onClick={onClick}>추가</button>
         <ul>{employeesList}</ul>
      </>
   )
}

export default Quiz03
