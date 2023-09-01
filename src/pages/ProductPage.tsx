import React, { useEffect } from 'react'
import { getProducts } from '../store/slices/product/thunks';
import { useAppDispatch, useAppSelector } from '../hooks/store.hook';

const ProductPage = () => {

  const dispatch = useAppDispatch();
  const product = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts())
    console.log(product)
  }, [])
  

  return (
    <div>
      
    </div>
  )
}

export default ProductPage
