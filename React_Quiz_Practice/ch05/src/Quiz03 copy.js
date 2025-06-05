import React, { useState } from 'react'
import './App.css'

const Quiz03 = () => {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' },
      { id: 2, name: '메타몽', img: '/images/메타몽.png' },
      { id: 3, name: '파이리', img: '/images/파이리.png' },
   ])

   const [inputName, setInputName] = useState('')
   const [nextId, setNextId] = useState(4)

   const onChange = (e) => setInputName(e.target.value)

   const pokesList = pokemons.map((poke) => (
      <li key={poke.id} onDoubleClick={() => onRemove(poke.id)}>
         <div>
            <img src={poke.img} alt={poke.name} width="130" />
            <p>{poke.name}</p>
         </div>
      </li>
   ))

   //concat() 2개 이상의 배열을 합치는 메소드

   const onClick = () => {
      const nextPoke = pokemons.concat({
         id: nextId,
         name: inputName,
         img: './images/' + inputName + '.png',
         // 입력받은 이름을 이용해서 이미지 가져옴
      })
      setPoke(nextPoke)
      setNextId(nextId + 1)
      setInputName(inputName)
   }

   const onRemove = (id) => {
      const nextPoke = pokemons.filter((poke) => poke.id !== id)
      setPoke(nextPoke)
   }

   return (
      <>
         <h2>포켓몬 도감</h2>
         <input type="text" value={inputName} onChange={onChange}></input>
         <button onClick={onClick}>등록</button>
         <ul>{pokesList}</ul>
      </>
   )
}

export default Quiz03
