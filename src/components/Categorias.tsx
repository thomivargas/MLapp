import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Loaders } from "./Loader/Loaders";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { formatter } from "../utils/Formatter";
import { useEffect } from "react";
import { getCategoriasId } from "../redux/slices/categoriasSlice";
import { Link } from "react-router-dom";

const CategoriasComponent = () => {
    const categorias = useAppSelector(state => state.categorias)
    const nameCategoria = useAppSelector(state => state.categorias.nameCategoria)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCategoriasId('MLA1051'))
    }, [])

    return ( 
        <section className="w-[62%] mx-auto mt-14">
            { categorias?.status === 'pending' ? (
                <div className="w-full flex justify-center items-center h-[20vh]">
                    <Loaders />
                </div>
            ) : (
                <>
                    <h1 className="text-2xl">{nameCategoria}</h1>
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={5}
                        centeredSlides={false}
                        navigation={true}
                        modules={[Navigation]}
                        speed={500}
                        loop={true}
                    > 
                        { categorias?.dataId?.map( item => (
                            <SwiperSlide key={item?.id} className="bg-white shadow rounded mt-5 p-5 cursor-pointer hover:shadow-xl">
                                <Link to={`/${item?.category_id}/${item.id}`}>
                                    <div className="w-full border-b border-gray-300">
                                        <img className="mx-auto p-2" width={140} src={item?.thumbnail} alt="" />
                                    </div>
                                    <div className="w-full h-[160px] flex flex-col justify-around">
                                        <h1 className="text-sm line-clamp-2">{item?.title}</h1>
                                        <div>
                                            { item?.original_price > 0 && <p className="text-sm text-gray-400 line-through">{formatter.format(item?.original_price)}</p>}
                                            <p className="text-[26px]">{formatter.format(item?.price)}</p>
                                            <p className="text-sm">en {item?.installments?.quantity}x {formatter.format(item?.installments?.amount)}</p>
                                        </div>xl
                                        <p className="text-green-600 text-sm">{item?.shipping.free_shipping && 'Envío gratis'}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </section>
     );
}
 
export default CategoriasComponent;