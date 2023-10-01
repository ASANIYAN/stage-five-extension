import { baseURL } from "../constants/constants";

export const handleVideoUpload = (blobUrl, setLoading) => {
    const url = `${baseURL}/video/upload`;
    const presetName = import.meta.env.VITE_PRESET_NAME;
    const cloudName = import.meta.env.VITE_CLOUD_NAME;
  
    setLoading(true);
    return new Promise((resolve, reject) => {
      fetch(blobUrl)
      .then((response) => {
        return response.blob();
      })
      .then((videoBlob) => {
        const formData = new FormData();
        formData.append("file", videoBlob);
        formData.append("upload_preset", presetName);
        formData.append("cloud_name", cloudName);
      
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            setLoading(false);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            setLoading(false);
            reject(err);
          });
      })
      .catch((err) => {
        setLoading(false);
        reject(err);
      });

    });
};