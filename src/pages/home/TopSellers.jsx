
import React, { useEffect, useState } from 'react'
import BookCard from '../books/bookCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


const TopSallers = () => {
  const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]
  const [selectedCategory , setSelectedCategory] = useState("Choose a genre")
  
  const {data : books =[]} = useFetchAllBooksQuery();


    const filtredBooks =  selectedCategory === "Choose a genre" ? books : books.filter(book =>(
        book.category === selectedCategory.toLowerCase()
    )
    )


  return (
    <div className='py-10'>
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        {/* Category filtering */}
      <div className='mb-8 flex items-center'>
        <select onChange={(e) => setSelectedCategory(e.target.value)} name="category" id="category" className='border border-gray-300 
        bg-[#EAEAEA] rounded-md px-4 py-2'>
          {
            categories.map((category , index) =>(
              <option key={index} value={category}>{category}</option>
            ))
          }
        </select>
      </div>
      
      {
        <Swiper 
          modules={[Navigation, Pagination, Scrollbar]}
          navigation ={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640:{
            spaceBetween:30,
            slidesPerView:1          
            } ,

            768:{
            spaceBetween:50,
            slidesPerView:1         
            } ,

            1024:{
            spaceBetween:50,
            slidesPerView:2       
            } ,



          }
          }
          

          scrollbar={{ draggable: true }}
        >
          {filtredBooks.length > 0 && filtredBooks.map((book , index) => (
            <SwiperSlide>
              <BookCard
                    key={index}
                    book = {book}

                  />
            </SwiperSlide>
          ))}
        </Swiper>
      }


      
    </div>
  )
}

export default TopSallers