// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { useEffect } from 'react'
import { getProducts } from '../store/slices/product/thunks';
import { useAppDispatch, useAppSelector } from '../hooks/store.hook';

// Import Swiper styles
import 'swiper/css';
import CardProduct from './CardProduct';
import classes from './sass/gallery.module.scss'

const Gallery = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products);

    const swiper = useSwiper();    

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className={classes.gallery}>
      <div className={classes.gallery__header}>
        <h1>Discover our planet friendly offer</h1>
        <div className={classes.gallery__headerButtons}>
          <img src="icons/left.png" id="swiper-forward" alt=""  />
          <img src="icons/right.png" id="swiper-back" alt="" />
        </div>
      </div>
      <Swiper
      spaceBetween={'1rem'}
      slidesPerView={1}
      navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
      breakpoints={{
        870: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        // when window width is >= 640px
        1000: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 40
        },
        
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {products.nodes.map(({title, featuredImage,tags, prices} ) => (
        <SwiperSlide key={title} >
          <CardProduct key={title} 
          title={title} 
          featuredImage={featuredImage}
          tags={tags}
          prices={prices}
           />
        </SwiperSlide>
      ))}
    </Swiper>
    <button className={classes.gallery__button}>Browse all products</button>
    </div>
  )
}

export default Gallery
