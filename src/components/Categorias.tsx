import { useAppSelector } from "../redux/hooks";
import { Loaders } from "./Loader/Loaders";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { formatter } from "../utils/Formatter";

const CategoriasComponent = () => {
    const categorias = useAppSelector(state => state.categorias)
    const nameCategoria = useAppSelector(state => state.categorias.nameCategoria)

    console.log(categorias)

    return ( 
        <section className="w-[62%] mx-auto mt-14">
            { categorias.status === 'pending' ? (
                <div className="w-full flex justify-center items-center h-[20vh]">
                    <Loaders />
                </div>
            ) : (
                <>
                    <h1 className="text-2xl">{nameCategoria}</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={5}
                        centeredSlides={false}
                        navigation={true}
                        modules={[Navigation]}
                        speed={500}
                        loop={true}
                    > 
                        { categorias?.dataId.map( item => (
                            <SwiperSlide className="bg-white shadow rounded mt-5 p-5">
                                <div className="w-full border-b border-gray-300">
                                    <img className="mx-auto p-2" width={140} src={item.thumbnail} alt="" />
                                </div>
                                <div className="w-full h-[160px] flex flex-col justify-around">
                                    <h1 className="text-sm line-clamp-2">{item.title}</h1>
                                    <p className="text-3xl">{formatter.format(item.price)}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        {/* { categorias.length > 0 && categorias.map( item => (
            <div key={item.id}>
                <img src={item.thumbnail} alt="nashe" />
                <h1>{item.title}</h1>
            </div>
        ))} */}
            <h1></h1>
        </section>
     );
}
 
export default CategoriasComponent;