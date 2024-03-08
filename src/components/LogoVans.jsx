import { Link } from "react-router-dom";
import Logo from "../assets/logovans.png";

const LogoVans = ({tamano}) => {
    return (
        <Link to={"/"}>
            <img src={Logo} alt="Vans Argentina" width={tamano} />
        </Link>
    )
}

export default LogoVans;