import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from './productSlice'
import React, { useState } from 'react'

function ProductList() {
   const products = useSelector((state) => state.products)
   const dispatch = useDispatch()
   const [newProduct, setNewProduct] = useState('')

   return (
      <div>
         <input value={newProduct} onChange={(e) => setNewProduct(e.target.value)} placeholder="상품명" />
         <button onClick={() => dispatch(addProduct(newProduct))}>상품 추가</button>
         <ul>
            {products.map((product) => (
               <li key={product.id}>
                  {product.name}
                  <button onClick={() => dispatch(removeProduct(product.id))}>상품 삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default ProductList
