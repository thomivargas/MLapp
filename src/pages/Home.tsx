import CarruselComponent from "../components/Carrusel";
import HeaderPage from "../components/Header";
import { useAppSelector } from "../redux/hooks";

const HomePage = () => {
    const categorias = useAppSelector(state => state.categorias.dataId)
    return ( 
        <>
            <HeaderPage/>
            <main>
                <CarruselComponent/>
                { categorias.length > 0 && categorias.map( item => (
                    <div key={item.id}>
                        <img src={item.thumbnail} alt="nashe" />
                        <h1>{item.title}</h1>
                    </div>
                ))}
            </main>
        </>
     );
}
 
export default HomePage;