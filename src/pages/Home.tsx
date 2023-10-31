import CarruselComponent from "../components/Carrusel";
import CategoriasComponent from "../components/Categorias";
import TarjetasComponent from "../components/TarjetasComponent";

const HomePage = () => {

    return ( 
        <main className="pb-24">
                <CarruselComponent/>
                <TarjetasComponent/> 
                <CategoriasComponent/>
        </main>
     );
}
 
export default HomePage;