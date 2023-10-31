import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getItem } from "../redux/slices/itemSlice"
import { Loaders } from "../components/Loader/Loaders"
import { formatter } from "../utils/Formatter"
import { Button } from "@mui/material"
import { addToCart } from "../redux/slices/cartSlice"

interface objetoCarrito {
    id: string | number;
    name: string;
    image: string;
    price: number;
}

const ItemCard = () => {
    const { item } = useParams()
    const dispatch = useAppDispatch()
    const itemSlice = useAppSelector(state => state.item)
    const [imagenHover, setImagenHover] = useState('')
    const idItem = itemSlice?.data[0]?.body?.pictures[0].id;
    const [imagenActive, setImagenActive] = useState(idItem)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getItem(item))
    }, [])

    const cambiarImagen = (url: string, id: string) => {
        setImagenHover(url)
        setImagenActive(id)
    }

    const handleAddtoCart = ({id, name, image, price}: objetoCarrito) => {
        dispatch(addToCart({id, name, image, price}))
        navigate('/carrito')
    }

    return (
        <section className="w-full pt-5 mx-auto flex items-center justify-center">
            {itemSlice.status === 'pending' ? (
                <div className="w-full flex justify-center items-center h-[40vh]">
                    <Loaders />
                </div>
            ) : (
                <div className="bg-white pt-5 rounded-lg mx-auto shadow-md flex gap-4 p-3 pb-24">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-2">
                            {itemSlice?.data[0]?.body?.pictures.slice(0, 3).map(imagen => (
                                <div key={imagen.id} className={`w-[60px] h-[60px] p-0.5 border ${imagenActive === imagen.id ? 'border-sky-600 border-2' : 'border-[#ccc]'} rounded-md cursor-pointer hover:border-2 hover:border-sky-600`}>
                                    <img key={imagen.id} src={imagen.url} onClick={() => cambiarImagen(imagen.url, imagen.id)} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="w-[400px] h-[300px] mt-24   ">
                            <img src={imagenHover === '' ? itemSlice?.data[0]?.body?.pictures[0].url : imagenHover} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="max-w-sm flex flex-col gap-5">
                        <h1 className="text-lg max-w-sm font-medium">{itemSlice?.data[0]?.body?.title}</h1>
                        <div>
                            {itemSlice?.data[0]?.body?.original_price > 0 && <p className="text-sm text-gray-400 line-through">{formatter.format(itemSlice?.data[0]?.body?.original_price)}</p>}
                            <p className="text-3xl">{formatter.format(itemSlice?.data[0]?.body?.price)}</p>
                        </div>
                        <div className="text-sm">
                            <h2 className="mb-2">Lo que tenés que saber de este producto</h2>
                            <ul className="max-w-md flex flex-col gap-2">
                                {itemSlice?.data[0]?.body?.attributes?.slice(0, 8).map(atributo => (
                                    <li key={atributo.id} className="flex gap-2 flex-wrap">. {atributo.name}:{atributo.values.map(valor => (
                                        <p key={valor.id}>{valor.name}</p>
                                    ))}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-[250px] p-1 mx-2 text-sm flex flex-col gap-3">
                        {itemSlice?.data[0]?.body?.shipping?.free_shipping && <p><span className="text-green-600">Llega gratis</span> entre el lunes o el jueves 23 de noviembre</p>}
                        <div>
                            <p>Vendido por: <span className="text-sky-600">CF RAPID</span></p>
                            <p>MercadoLider | +10mil ventas</p>
                        </div>
                        <p className="text-base font-semibold">Stock disponible</p>
                        <div className="mt-4 w-full flex flex-col gap-2">
                            <p>Cantidad: 1 {`(10 disponibles)`}</p>
                            <Button variant="contained" fullWidth>Comprar ahora</Button>
                            <Button 
                                onClick={() => handleAddtoCart({id: itemSlice?.data[0]?.body?.id, name: itemSlice?.data[0]?.body?.title, image: itemSlice?.data[0]?.body?.thumbnail, price: itemSlice?.data[0]?.body?.price})} 
                                variant="outlined" 
                                fullWidth
                            >
                                Agregar al carrito
                            </Button>
                        </div>
                        <div className="mt-5 text-sm flex flex-col gap-5">
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 11l-4 4l4 4m-4-4h11a4 4 0 0 0 0-8h-1"/></svg>
                                <p><span className="text-sky-600">Devolucion gratis.</span> Tenes 30 días desde que lo recibís.</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m-2-4l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9" strokeWidth="1"/></svg>
                                <p><span className="text-sky-600">Compra Protegida.</span> recibí el producto que esperabas o te devolvemos tu dinero.</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" strokeWidth="1"><path fill="currentColor" d="M11 19v-3.1q-1.225-.275-2.188-1.038T7.4 12.95q-1.875-.225-3.138-1.637T3 8V7q0-.825.588-1.413T5 5h2q0-.825.588-1.413T9 3h6q.825 0 1.413.588T17 5h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.413 1.913T13 15.9V19h3q.425 0 .713.288T17 20q0 .425-.288.713T16 21H8q-.425 0-.713-.288T7 20q0-.425.288-.713T8 19h3Zm-4-8.2V7H5v1q0 .95.55 1.713T7 10.8Zm5 3.2q1.25 0 2.125-.875T15 11V5H9v6q0 1.25.875 2.125T12 14Zm5-3.2q.9-.325 1.45-1.088T19 8V7h-2v3.8Zm-5-1.3Z"/></svg>
                                <p><span className="text-sky-600">Mercado Puntos.</span> Sumás 555 puntos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ItemCard
