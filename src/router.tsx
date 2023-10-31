import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ItemsBusquedaPage from "./pages/ItemBusqueda";
import HeaderPage from "./components/Header";
import ItemCard from "./pages/ItemCard";
import Carrito from "./pages/CarritoPage"

export const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HeaderPage/>}>
                <Route index={true} element={<HomePage/>}/>
                <Route path="/:busqueda" element={<ItemsBusquedaPage/>}/>
                <Route path="/:busqueda/:item" element={<ItemCard/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Route>
        </Routes>
    )
}