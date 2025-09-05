import BookCard from '../books/bookCard'
import {useState , useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Recommened = () => {
    const {data : books =[]} = useFetchAllBooksQuery();

return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>Recommended For You</h2>
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
        {books.length > 0 && books.slice(8,16).map((book , index) => (
            <SwiperSlide key={index}>
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

export default Recommened