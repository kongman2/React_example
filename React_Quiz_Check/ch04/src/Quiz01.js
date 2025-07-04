import React, { useState } from 'react'

function Quiz01() {
   const [form, setForm] = useState({ username: '', message: '', email: '' })
   const { username, message, email } = form

   const onClick = () => {
      alert(`입력값: ${username}, ${message}, ${email}`)

      setForm({ username: '', message: '', email: '' })
   }
   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   const onChange = (e) => {
      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }

      setForm(nextForm)
   }
   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="이름 입력" value={username} onChange={onChange} />
         <input type="text" name="message" placeholder="메시지 입력" value={message} onChange={onChange} />
         <input type="text" name="email" placeholder="이메일 입력" value={email} onChange={onChange} onKeyDown={onKeyDown} />
         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default Quiz01
