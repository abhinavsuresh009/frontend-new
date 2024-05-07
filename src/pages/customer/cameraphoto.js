import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import './camera.css'

const CameraCapture = () => {
  const [imageData, setImageData] = useState(null);
  const webcamRef = useRef(null);
  const [isPC, setIsPC] = useState(false);
  const url = "http://10.54.1.62:8000/customer/image/"; 

  const startCamera = () => {
    setIsPC(true);
  };
  const capturePicture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageData(imageSrc);
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const saveImage = async () => {
    try {
      const blob = await fetch(imageData).then(response => response.blob());
      const formData = new FormData();
      formData.append('image', blob, '');
      const response = await axios.post(url, formData);
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <div>
      <div className='flex justify-around mt-10'>
        <input
          type="file"
          className='camerainp'
          accept="image/*"
          capture="environment"
          onChange={handleFileUpload}
        />
        <button id='accesscam' onClick={startCamera} className={isPC ? 'hidden' : ''}>Access Camera</button>
        <button id='capture' onClick={capturePicture} className={isPC ? '' : 'hidden'}>Capture Picture</button>
        <button onClick={saveImage}
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
        >
          Save Image
        </button>
      </div>
      <br />
      <div className='flex justify-center items-center flex-col'>
        {isPC && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            width={350}
            height={300}
          />
        )}
        <br />
        {imageData && (
          <div>
            <h2>Captured Image:</h2>
            <img src={imageData} alt="Captured" />
          </div>
        )}
      </div>
      
    </div>
  );
}; export default CameraCapture;