import React, { useState } from 'react'

function Quiz02() {
   const [projects, setProjects] = useState([
      { id: 1, name: '프로젝트 A', status: '미완료' },
      { id: 2, name: '프로젝트 B', status: '완료' },
   ])

   const [inputName, setInputName] = useState('')
   const [inputStatus, setInputStatus] = useState('')
   const [nextId, setNextId] = useState(3)

   const onChangeName = (e) => setInputName(e.target.value)
   // select 박스에서는 option태그의 value속성값을 가져온다.
   const onChangeStatus = (e) => setInputStatus(e.target.value)

   const onClick = () => {
      if (inputName.trim() === '') return // 빈 값은 추가하지 않음
      const nextProjects = projects.concat({
         id: nextId,
         name: inputName,
         status: inputStatus,
      })

      setProjects(nextProjects)

      setNextId(nextId + 1)
      setInputName('')
      setInputStatus('미완료')
   }

   const projectList = projects.map((project) => (
      <li key={project.id} onDoubleClick={() => onRemove(project.id)}>
         프로젝트명: {project.name}, 상태: {project.status}
      </li>
   ))

   const onRemove = (id) => {
      const nextProjects = projects.filter((project) => project.id !== id)
      setProjects(nextProjects)
   }

   return (
      <>
         <input type="text" value={inputName} onChange={onChangeName} />
         <select value={inputStatus} onChange={onChangeStatus}>
            <option value="미완료">미완료</option>
            <option value="완료">완료</option>
         </select>
         <button onClick={onClick}>추가</button>
         <ul>{projectList}</ul>
      </>
   )
}

export default Quiz02
