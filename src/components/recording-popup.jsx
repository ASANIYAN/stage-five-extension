/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";

import { CloseCircle, Copy, Microphone2, Screenmirroring, Setting2, Video } from "iconsax-react";

import Toggle from "./input/toggle";

import logo from "../assets/logo.svg";
import { SuccessToast } from "./toast/toasts";

const RecordingPopup = () => {
    const navigate = useNavigate();

    const [camera, setCamera] = useState(false);
    const [audio, setAudio] = useState(false);
    const [recording, setRecording] = useState(false);


    const handleCameraPermission = () => {
        setCamera(prev => !prev);
    }

    const handleAudioPermission = () => {
        setAudio(prev => !prev);
    }



    const { startRecording, stopRecording } = useReactMediaRecorder({ 
        screen: true, 
        askPermissionOnMount: true,
        onStart: () => {
            setRecording(true);
            SuccessToast("Recording Started");
        },
        onStop: (blobUrl) => {
            localStorage.setItem("blob", blobUrl);
            setRecording(false);
            SuccessToast("Recording Ended");
            navigate("record", {replace: true});
        }
    });

    const handleRecording = () => {
        if (recording) {
            stopRecording();
        } else {
            startRecording();
        } 
    }

    return (
        <section className="absolute top-2.5 right-5 w-[300px] h-[440px] bg-white pt-5 px-5 rounded-3xl shadow-md space-y-8">
            
            <section className="flex justify-between">
                <section className="flex items-center gap-1.5">
                    <img src={logo} height={40} width={40} alt="logo" />
                    <span className="font-bold text-color4"> HelpMeOut </span>
                </section>
                <section className="flex items-center gap-2.5">
                    <Setting2 size="20" color="#120B48"/>
                    <CloseCircle size="20" color="#928FAB" className="cursor-pointer" />
                </section>
            </section>
            
            <span className="max-w-[220px] text-[#413C6D] text-xs font-normal"> This extension helps you record and share help videos with ease. </span>
            
            <section className="flex justify-evenly">
                <section className="flex items-center flex-col gap-1.5">
                    <Screenmirroring size="24" color="#928FAB"/>
                    <span className="text-[#928FAB] text-sm font-medium"> Full Screen </span>
                </section>
                <section className="flex items-center flex-col gap-1.5">
                    <Copy size="24" color="#120B48"/>
                    <span className="text-color4 text-sm font-medium"> Current Tab </span>
                </section>
            </section>

            <section className="border border-color1 rounded-xl flex justify-between p-2.5">
                <section className="flex gap-2">
                    <Video size="24" color="#0F172A"/>
                    <span className="text-color1 text-sm font-medium"> Camera </span>
                </section>
                <Toggle 
                    name={"camera"}
                    handleChange={handleCameraPermission}
                    checked={camera} 
                />
            </section>

            <section className="border border-color1 rounded-xl flex justify-between p-2.5">
                <section className="flex gap-2">
                    <Microphone2 size="24" color="#0F172A"/>
                    <span className="text-color1 text-sm font-medium"> Audio </span>
                </section>
                <Toggle 
                    name={"audio"}
                    handleChange={handleAudioPermission}
                    checked={audio} 
                />
            </section>

            <section className="flex justify-center">
                <button 
                    className="bg-color4 rounded-xl flex justify-center py-2.5 px-5 text-[#FAFDFF] font-medium"
                    onClick={handleRecording}
                > 
                    {recording ? 'Stop Recording' : 'Start Recording'}  
                </button>
            </section>

        </section>
    );
}
 
export default RecordingPopup;