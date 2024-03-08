import LogoRojo from "../assets/logovansrojo.png";

const LogoVansRojo = ({logoGrande}) => {
    let tamano = logoGrande ? 100 : 60;

    return (
        <img src={LogoRojo} alt="Vans Logo" width={tamano} />
    )
}

export default LogoVansRojo;