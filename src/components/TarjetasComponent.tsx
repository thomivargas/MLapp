import tCredito from "../assets/tarjetas/tCredito.png"
import tDebito from "../assets/tarjetas/tDebito.png"
import Cuotas from "../assets/tarjetas/Cuotas.png"
import efectivo from "../assets/tarjetas/efectivo.png"
import circuloAzul from "../assets/tarjetas/circuloAzul.png"

const TarjetasComponent = () => {
    return (
        <section className="w-full mt-8">
            <div className="w-[62%] mx-auto shadow bg-white p-5 rounded-md flex items-center justify-between">
                <div className="flex gap-4">
                    <img src={tCredito} alt="" />
                    <div>
                        <h1 className="text-lg">Tarjeta de crédito</h1>
                        <p className="text-sky-600 text-sm">Ver promociones bancarias</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <img src={tDebito} alt="" />
                    <div>
                        <h1 className="text-lg">Tarjeta de débito</h1>
                        <p className="text-sky-600 text-sm">Ver más</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <img src={Cuotas} alt="" />
                    <div>
                        <h1 className="text-lg">Cuotas sin tarjeta</h1>
                        <p className="text-sky-600 text-sm">Conocé Mercado Crédito</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <img src={efectivo} alt="" />
                    <div>
                        <h1 className="text-lg">Efectivo</h1>
                        <p className="text-sky-600 text-sm">Ver más</p>
                    </div>
                </div>
                <div>
                    <img src={circuloAzul} alt="" />
                </div>
            </div>
        </section>
    );
}

export default TarjetasComponent;