import logo from "../../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="py-5 px-16 shadow-sm flex items-center justify-between">
            <section className="flex items-center gap-1.5">
                <img src={logo} height={40} width={40} alt="logo" />
                <span className="font-bold text-color1"> HelpMeOut </span>
            </section>
            <ul className="text-black font-medium flex items-center gap-5">
                <li> Features </li>
                <li> How it Works </li>
            </ul>

            <p> Get Started </p>
        </nav>
    );
}
 
export default Navbar;