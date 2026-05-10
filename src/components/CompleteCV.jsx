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
    <div className="completeCV-container">
      
      <div className="completeCV-editButton"><button onClick={handleEdit}>edit</button></div>

      <div className="completeCV-generalInfo">
        <p>General Information</p>

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
        <p>Education Info</p>
      </div>


      <div className="completeCV-practiceInfo">
        <p>Practice Info</p>

        {educationInfo.schoolName}
      {practiceInfo.companyName}
      </div>
    
      
    </div>
  );
}