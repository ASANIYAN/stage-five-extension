import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="py-5 px-16 shadow-sm flex items-center justify-between">
            <Link to={"/"}>
                <section className="flex items-center gap-1.5 hover:scale-110 transition-all">
                    <img src={logo} height={40} width={40} alt="logo" />
                    <span className="font-bold text-color1"> HelpMeOut </span>
                </section>
            </Link>
            <ul className="text-black font-medium flex items-center gap-5">
                <li> Features </li>
                <li> How it Works </li>
            </ul>

            <Link to={"/"}>
                <p className="hover:scale-110 font-semibold text-color4 transition-all"> Get Started </p>
            </Link>
        </nav>
    );
}
 
export default Navbar;