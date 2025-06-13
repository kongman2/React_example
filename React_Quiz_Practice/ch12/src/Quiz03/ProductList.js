import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './productSlice'
import React, { useState } from 'react'

function ProductList() {
   const products = useSelector((state) => state.products)
   const dispatch = useDispatch()
   const [newProduct, setNewProduct] = useState('')
   return (
      <div>
         <input value={newProduct} onChange={(e) => setNewProduct(e.target.value)} placeholder="상품 입력" />
         <button onClick={() => dispatch(add(newProduct))}>상품 추가</button>
         <ul>
            {products.map((product) => (
               <li key={product.id}>
                  {product.name}
                  <button onClick={() => dispatch(remove(product.id))}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ProductList
