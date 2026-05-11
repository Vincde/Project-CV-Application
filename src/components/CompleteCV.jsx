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

        <div className="educationInfo-containerBox">
          {
            educationInfo.map((el) => {
              return(
                <div key={el.id} className="educationInfo-singleBox">
                  <p>School Name: {el.schoolName}</p>
                  <p>Title Of Study: {el.titleOfStudy}</p>
                  <p>Date of Study: {el.dateOfStudy}</p>
                </div>
              )
            })
          }
        </div>
      </div>


      <div className="completeCV-practiceInfo">
        <h2>Practice Info</h2>


        <div className="practiceInfo-containerBox">
          {
            practiceInfo.map((el) => {
              return(
                <div key={el.id} className="practiceInfo-singleBox">
                  <p>Company Name: {el.companyName}</p>
                  <p>Position Title: {el.positionTitle}</p>
                  <p>Main Responsibilities: {el.mainResponsibilities}</p>
                  <p>Started: {el.dateStart}</p>
                  <p>Finished: {el.dateEnd}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    
      
    </div>
  );
}