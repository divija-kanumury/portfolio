import React from 'react'
import './books.css'
import BOOK1 from '../../assets/book1.jpg'
import BOOK2 from '../../assets/book2.jpg'
import BOOK3 from '../../assets/book3.jpg'
import BOOK4 from '../../assets/book4.jpg'

import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: BOOK1,
    name: 'The Stationery Shop',
    author: 'By Marjan Kamali'
  },
  {
    id: 2,
    image: BOOK2,
    name: 'The Hidden Staircase',
    author: 'By Carolyn Keene'
  },
  {
    id: 3,
    image: BOOK3,
    name: 'Truly Devious',
    author: 'By Maureen Johnson'
  },
  {
    id: 4,
    image: BOOK4,
    name: 'The Seven Husbands of Evelyn Hugo',
    author: 'By Taylor Jenkins Reid'
  }
]
const Books = () => {
  return (
    <section id = 'books'>
      <h5>My Favourite</h5>
      <h2>Books</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
      {
        data.map(({id,image,name,author},index) =>{
          return (
            <SwiperSlide key = {id} className="testimonial">
              <div className="client_avatar">
                <img src={image} alt={name}/>
              </div>
              <h5>{name}</h5>
              <small>{author}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Books
