import { Fragment } from "react";
import logo_white from "../../assets/logo_white.svg";

const Footer = () => {
    const navigations = [ 
        {title: "Menu", contents: ["Home", "Converter" , "How it Works"] }, 
        {title: "About us", contents: ["About", "Contact Us" , "Privacy Policy"] }, 
        {title: "Screen Record", contents: ["Browser Window", "Desktop" , "Application"] }, 
    ];

    return (
        <footer className="bg-color4 py-16 px-10 mt-20 flex justify-between">
            <section className="flex items-center mb-auto gap-1.5">
                <img src={logo_white} width={40} height={40}  alt="white logo" />
                <span className="font-bold text-white"> HelpMeOut </span>
            </section>
            { navigations.map(({title, contents}) => (
                <ul key={title} className="text-white space-y-2.5">
                    <li className="font-semibold"> {title} </li>
                    { contents.map((content) => (
                        <Fragment key={content}>
                            <li className="font-normal"> {content} </li>
                        </Fragment>
                    ))}
                </ul>

            ))}
        </footer>
    );
}
 
export default Footer;