import { useState } from "react";
import { useEffect } from "react";

export default function CompleteCV({generalInfo, educationInfo, practiceInfo, handleEdit}) {
    const image = generalInfo.image;
    const [anteprima, setAnteprima] = useState(null);
  
  useEffect(() => {
    if (!image) return;

    const objectUrl = URL.createObjectURL(image);
    setAnteprima(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);
  
  return(
    <>
    <div className="completeCV-generalInfo">
      <p>General Information</p>
      {educationInfo.schoolName}
      {practiceInfo.companyName}
      <p>Profile Pic</p>
      <img src={anteprima} alt="" />
    </div>
    <button onClick={handleEdit}>edit</button>
    </>
  );
}