import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct } from './productSlice'
import { useState } from 'react'

function ProductList() {
   const [inputValue, setInputValue] = useState('')
   const dispatch = useDispatch()
   const products = useSelector((state) => state.products)

   return (
      <div>
         <h1>상품 등록</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="상품명 입력" />
         <button onClick={() => dispatch(addProduct(inputValue))}>등록</button>

         <ul>
            {products.map((product) => (
               <li key={product.id}>
                  {product.text}
                  <button onClick={() => dispatch(deleteProduct(product.id))}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ProductList
