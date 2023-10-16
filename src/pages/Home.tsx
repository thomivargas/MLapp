import CarruselComponent from "../components/Carrusel";
import CategoriasComponent from "../components/Categorias";
import HeaderPage from "../components/Header";
import TarjetasComponent from "../components/TarjetasComponent";

const HomePage = () => {

    return ( 
        <>
            <HeaderPage/>
            <main className="pb-24">
                <CarruselComponent/>
                <TarjetasComponent/>
                <CategoriasComponent/>
            </main>
        </>
     );
}
 
export default HomePage;