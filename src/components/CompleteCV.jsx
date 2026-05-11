import { useState } from "react";
import { useEffect } from "react";
import nameIcon from './../../public/person_icon.png';
import mailIcon from './../../public/mail_icon.png';
import phoneIcon from './../../public/phone_icon.png';
import './../styles/completeCV.css';

export default function CompleteCV({generalInfo, educationInfo, practiceInfo, handleEdit}) {
    const image = generalInfo.image;
    const [preview, setPreview] = useState(null);
  
  useEffect(() => {
    if (!image) return;

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);
  
  return(
    <div className="completeCV">
      
      <div className="completeCV-editButton">
        <h1>Here's your new CV!</h1>
        <button onClick={handleEdit}>edit</button>
      </div>

      <div className="completeCV-generalInfo">
        <h2>General Information</h2>

        <img src={preview} alt="" />

        <div>
          <img src={nameIcon} alt="" />
          <p>{generalInfo.name}</p>
        </div>

        <div>
          <img src={mailIcon} alt="" />
          <p>{generalInfo.email}</p>
        </div>

        <div>
          <img src={phoneIcon} alt="" />
          <p>{generalInfo.phone}</p>
        </div>

        
      </div>

      <div className="completeCV-educationInfo">
        <h2>Education Info</h2>
      </div>


      <div className="completeCV-practiceInfo">
        <h2>Practice Info</h2>

        {educationInfo.schoolName}
      {practiceInfo.companyName}
      </div>
    
      
    </div>
  );
}