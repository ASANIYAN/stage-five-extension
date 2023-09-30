import { CloseCircle } from "iconsax-react";
import kite from "../../assets/kite.png";

const Modal = () => {
    return (
        <section className=" shadow-md bg-white rounded-3xl w-[450px] p-4 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-30 absolute overflow-hidden">
            <section className="flex justify-end">
                <CloseCircle size="32" color="#120B48"/>
            </section>
            <section>
                <section className="flex justify-center">
                    <img src={kite} width={150} alt="kite" />
                </section>

                <p className="mt-5 max-w-[350px] text-center mx-auto text-2xl font-normal text-[#08051E]"> 
                    Your video link has been sent to <span className="text-color4 font-medium"> johnmark@gmail.com </span> 
                </p>

                <p className="max-w-[350px] mx-auto text-center font-normal text-color2 mt-10 text-lg"> Would you need to view this video later? Save to your account now! </p>

                <section className="mt-5 flex justify-center">
                    <button className="font-medium text-color12 bg-color4 flex justify-center py-2 px-4 rounded-lg"> Save Video </button>
                </section>

                <p className="font-semibold text-[#7E7E7E] mt-5 text-center"> Don&apos;t have an account? <span className="text-color4"> Create account </span> </p>

            </section>
        </section>
    );
}
 
export default Modal;