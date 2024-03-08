import BannerApp1 from "../assets/Banner_app1.jpg";
import BannerApp2 from "../assets/Banner_app2.jpg";

const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src={BannerApp1} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Sk8-Low Vans</h4>
                            <p>Compra Sk8-Low Vans. Variedad de colores y talles. Recibílo en tu casa o retirá gratis en el local más cercano. Descubrí todo lo que tenemos para vos en la única tienda oficial de Vans en Argentina.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={BannerApp2} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Sk8-Hi Vans</h4>
                            <p>Compra Sk8-Hi Vans.Variedad de colores y talles. Recibílo en tu casa o retirá gratis en el local más cercano. Descubrí todo lo que tenemos para vos en la única tienda oficial de Vans en Argentina.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;