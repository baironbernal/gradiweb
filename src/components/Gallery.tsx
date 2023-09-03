// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect } from 'react'
import { getProducts } from '../store/slices/product/thunks';
import { useAppDispatch, useAppSelector } from '../hooks/store.hook';

// Import Swiper styles
import 'swiper/css';
import CardProduct from './CardProduct';

const Gallery = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {products.nodes.map(({title, featuredImage} ) => (
        <SwiperSlide>
          <CardProduct key={title} title={title} featuredImage={featuredImage} />
        </SwiperSlide>
      ))}
      
      ...
    </Swiper>
    </div>
  )
}

export default Gallery
