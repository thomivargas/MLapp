import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import imagen1 from '../assets/carrusel/imagen_carrusel_1.webp'
import imagen2 from '../assets/carrusel/imagen_carrusel_2.jpg'
import imagen3 from '../assets/carrusel/imagen_carrusel_3.webp'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CarruselComponent = () => {
    return ( 
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            speed={2000}
            loop={true}
        > 
            <SwiperSlide>
                <img className='mx-auto' src={imagen1} alt="bblogo" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='mx-auto' src={imagen2} alt="gotlogo" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='mx-auto' src={imagen3} alt="blogo" />
            </SwiperSlide>
        </Swiper>
     );
}
 
export default CarruselComponent;