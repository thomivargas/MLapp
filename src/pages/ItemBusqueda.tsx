import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { getBusqueda } from "../redux/slices/busquedaSlice";
import { Loaders } from "../components/Loader/Loaders";
import { formatter } from "../utils/Formatter";


const ItemsBusquedaPage = () => {
    const { busqueda } = useParams()
    const dispatch = useAppDispatch()
    const busquedaItem = useAppSelector(state => state.busqueda)

    useEffect(() => {
        dispatch(getBusqueda(busqueda))
    }, [busqueda])    

    console.log(busquedaItem)

    return ( 
    <section className="w-[62%] pt-5 mx-auto flex items-center justify-between">
        { busquedaItem.status === 'pending' ? (
            <div className="w-full flex justify-center items-center h-[40vh]">
                <Loaders />
            </div>
        ) : (
            <div className="w-full flex">
                {/* SideBar */}
                <div className="w-[20%]">
                    <div>
                        <div className="flex flex-wrap gap-1">
                        {busquedaItem?.data?.filters && busquedaItem?.data?.filters?.map(filter => {
                            return filter.values && filter.values.map(value => {
                                return value.path_from_root && value.path_from_root.map((item, index) => (
                                    <p key={item.id} className="text-gray-500 text-xs">{`${item?.name}${index < value.path_from_root.length - 1 ? ' >' : ''}`}</p>
                        ))})})}
                        </div>
                        <h1 className="mt-5 uppercase text-2xl font-semibold">{busquedaItem?.data?.query}</h1>
                        <p className="text-gray-500 text-sm">{busquedaItem?.data?.paging.total} resultados</p>
                    </div>
                    <div>
                        { busquedaItem?.data?.available_filters && busquedaItem?.data?.available_filters.map(lista => (
                            lista.id !== 'product' && (
                            <div key={lista.id} className="my-5">
                                <h1>{lista.name}</h1>
                                { lista?.values.slice(0, 10).map( valor => (
                                    <p key={valor.id} className="text-xs mt-0.5">{valor.name} <span className="text-gray-400 text-xs">{`(${valor.results})`}</span></p>
                                ))}
                            </div>
                        )))}
                    </div>
                </div>
                {/* Listado de Productos */}
                <div className="w-[80%]">
                    <div className="flex items-center justify-end">
                        <p>Ordenar por</p>
                        <select className="bg-[#EBEBEB] hover:text-sky-600 cursor-pointer">
                            <option value="">{busquedaItem?.data?.sort?.name}</option>
                            { busquedaItem?.data?.available_sorts?.map( item => (
                                <option value={item.name} key={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        
                                {/* ////////////////////////////////////////// */}

                        {busquedaItem?.data?.results?.map( item => (
                            <Link to={`/${busquedaItem?.data?.query}/${item.id}`} key={item.id} className="bg-white shadow rounded p-2 cursor-pointer hover:shadow-xl">
                                <div className="w-full border-b border-gray-300">
                                    <img className="mx-auto p-2" width={200} src={item?.thumbnail} alt="" />
                                </div>
                                <div className="w-full h-[200px] flex flex-col justify-around p-3">
                                    <h1 className="text-sm line-clamp-2">{item?.title}</h1>
                                    <div>
                                        { item?.original_price > 0 && <p className="text-sm text-gray-400 line-through">{formatter.format(item?.original_price)}</p>}
                                        <p className="text-[26px]">{formatter.format(item?.price)}</p>
                                        <p className="text-sm">en {item?.installments?.quantity}x {formatter.format(item?.installments?.amount)}</p>
                                    </div>
                                    <p className="text-green-600 text-sm">{item.shipping?.free_shipping && 'Envío gratis'}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </section> 
    );
}
 
export default ItemsBusquedaPage;