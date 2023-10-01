/* eslint-disable react/prop-types */
import { ArrowDown2, Copy, Edit } from "iconsax-react";

import fb from "../../assets/fb.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import bigger_video_frame from "../../assets/bigger_video_frame.png";

const Hero = ({ handleModalOpen }) => {
    const socials = [
        { text: "Facebook", img: fb },
        { text: "WhatsApp", img: whatsapp },
        { text: "Telegram", img: telegram },
    ];

    const blobFromStorage = localStorage.getItem("blob") ? localStorage.getItem("blob") : "" ;

    return (
        <section className="px-16 mt-20 flex gap-10">

            <section className="">
                <h1 className="text-color2 text-4xl font-bold"> Your video is ready! </h1>

                <section className="mt-8">
                    <span className="text-color19 font-medium"> Name </span>
                    <p className="text-color18 text-2xl font-semibold flex items-center gap-2.5"> Untitled_Video_20232509   <Edit size="24" color="#413C6D"/> </p>
                </section>

                <section className="w-[500px] bg-color14 mt-10 py-2 px-4 flex items-center gap-2 border border-[#E7E7ED] rounded-xl placeholder:text-color2 text-lg font-normal">
                        <input 
                            type="text" 
                            className="focus:outline-none bg-transparent border-transparent border-none flex-1 h-full"
                            placeholder="enter email of receiver" 
                        />
                        <button 
                            onClick={handleModalOpen} 
                            className="py-1.5 cursor-pointer rounded text-white text-center font-medium px-4 bg-[#605C84]"> Send </button>
                </section>     

                <section className="mt-10">
                    <p className="text-[#08051E] text-xl font-semibold"> Video Url </p>
                    <section 
                    className="w-[500px] mt-2.5 bg-[#FAFAFA] py-2 px-4 flex justify-between items-center border-[0.5px] border-[#929292] rounded-xl placeholder:text-color2 text-lg font-normal">
                        <span className="font-normal text-sm text-[#4B4B4B]"> https://www.helpmeout/ </span>
                        <button className="border border-color4 rounded py-1.5 px-3 flex items-center gap-1 text-base"> <Copy size="20" color="#120B48"/> Copy URL </button>
                    </section>   
                </section>

                <section className="mt-10">
                    <p className="text-[#08051E] text-xl font-medium"> Share your video </p>
                    <section className="mt-5 flex gap-2.5">
                        { socials.map(({text, img}) => (
                            <section key={text} className="rounded-md border border-[#0A0628] flex items-center gap-2 w-fit py-2 px-3">
                                <img src={img} width={24} height={20} alt={text} />
                                <p className="font-medium text-[#08051E] "> {text} </p>
                            </section>
                        ))}
                    </section>

                </section>
            </section>

            <section>
                <section className="border border-color16 bg-color17 p-3 rounded-3xl w-full h-[400px]">
                    { blobFromStorage && <video src={blobFromStorage} className="h-full w-full" controls autoPlay loop />}
                    { !blobFromStorage && <img src={bigger_video_frame} className="h-full w-full" alt="bigger_video_frame" />}
                </section>

                <section className="mt-10">
                    <p className="text-[#08051E] text-xl font-medium"> Transcript </p>
                    <div className="flex mt-5 gap-2.5 items-center p-2 w-fit border border-[#CFCFCF]"> <p className="text-[#9D9D9D] font-normal"> English </p>  <ArrowDown2 size={16} color="#BBBBBB" /> </div>
                </section>

                <section className="mt-5 flex gap-5 max-h-[260px] overflow-y-auto">
                    <span className="text-color2 font-normal"> 0.01 </span>
                    <span className="text-black text-lg font-medium"> 
                        First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate &quot;Marketplace&quot; in the left-hand menu or at the top of the  
                    </span>
                </section>

            </section>

        </section>
    );
}
 
export default Hero;