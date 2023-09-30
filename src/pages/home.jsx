import { useState } from "react";
import RecordingPopup from "../components/recording-popup";

const Home = () => {
    const [ blob, setBlob ] = useState("");

    return (
        <>
            <RecordingPopup setBlob={setBlob} />
            { blob && <video src={blob} controls autoPlay loop />}
        </>
    );
}
 
export default Home;