import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { formatter } from "../utils/Formatter";
import { useEffect } from "react";
import { setItem } from "../utils/LocalStorage";
import { removeToCart } from "../redux/slices/cartSlice";

const Carrito = () => {
    const carrito = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        setItem('cart', carrito)
    }, [carrito])
    
    const totalProductos = () => {
        // Verificar si el arreglo de productos está vacío
        if (carrito.length === 0) {
          return 0;
        }
      
        // Utilizar reduce para sumar los precios
        const total = carrito.reduce((acumulador, carrito) => {
          return acumulador + carrito.price;
        }, 0);

        const totalFormater = formatter.format(total)

        return totalFormater
    };

    const eliminarCarrito = (id: string) => {
        dispatch(removeToCart({id}))
    }

    return ( 
        <section className="w-full mt-10">
            {carrito.length > 0 ? (
                <div className="w-[62%] mx-auto flex gap-4 items-start">
                    <div className="w-full flex flex-col gap-10">
                        {carrito.map(item => (
                            <div key={item.id} className="bg-white shadow-md p-5 rounded-lg flex flex-col gap-5 px-10">
                                <div className="border-b-2 boder-[#ccc] py-2">
                                    <h1 className="text-sm uppercase font-semibold">Nombre Vendedor</h1>
                                </div>
                                <div key={item.id} className="w-full flex items-center justify-between">
                                    <div className="w-[450px] flex gap-2 items-center">
                                        <img src={item.image} alt="" />
                                        <div>
                                            <h1 className="text-sm">{item.name}</h1>
                                            <ul className="text-xs text-sky-600 flex gap-5 mt-2">
                                                <li onClick={() => eliminarCarrito(item.id.toString())} className="cursor-pointer">Eliminar</li>
                                                <li className="cursor-pointer">Guardar</li>
                                                <li className="cursor-pointer">Comprar ahora</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-[35%] flex justify-between">
                                        <div className="text-lg flex gap-8 border border-[#ccc] py-1 px-3">
                                            <p className="text-[#ccc] cursor-pointer">-</p>
                                            <p className="cursor-pointer">1</p>
                                            <p className="text-sky-600 cursor-pointer">+</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold">{formatter.format(item.price)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <p>Envío</p>
                                    <p className="text-green-600">Gratis</p>
                                </div>
                                <p>Aprovechá tu envío gratis agregando más. <span className="text-sky-600 cursor-pointer">Ver más productos del vendedor</span></p>
                            </div>
                        ))}
                    </div>
                    <div className="w-[380px] bg-white p-5 rounded-lg shadow-md">
                        <h1 className="py-2 text-sm uppercase font-semibold">Resumen de compra</h1>
                        <div className="text-xs flex flex-col gap-2">
                            <div className="flex justify-between">
                                <p>{carrito.length === 1 ? `Producto` : `Productos (${carrito.length})`}</p>
                                <p>{totalProductos()}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Envío</p>
                                <p className="text-green-600">Gratis</p>
                            </div>
                            <div className="flex gap-1 items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048"><path fill="#4f46e5" d="M624 832q0 36-14 68t-38 56t-56 38t-68 14q-36 0-68-14t-56-38t-38-56t-14-68q0-36 14-68t38-56t56-38t68-14q36 0 68 14t56 38t38 56t14 68zm-176 80q33 0 56-23t24-57q0-33-23-56t-57-24q-33 0-56 23t-24 57q0 33 23 56t57 24zm512 128q36 0 68 14t56 38t38 56t14 68q0 36-14 68t-38 56t-56 38t-68 14q-36 0-68-14t-56-38t-38-56t-14-68q0-36 14-68t38-56t56-38t68-14zm0 256q33 0 56-23t24-57q0-33-23-56t-57-24q-33 0-56 23t-24 57q0 33 23 56t57 24zM842 640h108l-384 768H458l384-768zm566-256l640 640l-640 640H0V384h1408zm-53 1152l512-512l-512-512H128v1024h1227zm181-576q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45q0-26 19-45t45-19z" /></svg>
                                <p className="text-[#4f46e5]">Ingresar código de cupón</p>
                            </div>
                        </div>
                        <div className="py-2 mb-4 flex justify-between">
                            <p>Total</p>
                            <p>{totalProductos()}</p>
                        </div>
                        <Button variant="contained" fullWidth>
                            Continuar Compra
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="bg-white pt-10 rounded-lg mx-auto shadow-md p-5">
                    no hay productos en el carrito
                </div>
            )}
        </section>
     );
}
export default Carrito;