import { useState } from "react";
import '../styles/showCV.css'

function CreateCV({cv, setCV, generalInfo, education, practice}) {

    const [alternativeInput, setAlternativeInput] = useState({});

    function handleCVCreation() {
        setCV(true);
        setAlternativeInput({cv, generalInfo, education, practice});
    }

    return(
        <>
        {cv && <CV cv={alternativeInput.cv} generalInfo={alternativeInput.generalInfo} education={alternativeInput.education} practice={alternativeInput.practice}>
        {cv && <button onClick={() => setCV(false)} className="editButton">Edit</button>}
        </CV>}
        {!cv && <button onClick={handleCVCreation} style={{marginTop:'50px'}}>Create Your CV!</button> }
        
        </>
    );
}

function CV({generalInfo, education, practice, children}) {
    return(
        <div className='showCV'>
            <div className="title">Your CV:</div><br></br>
            <div className="showCV__mainContainer">  
                
                <ul className="showCV__generalInfo">
                GENERAL INFO:<br></br>
                   {generalInfo.name && <li>{generalInfo.name}</li>}<br></br>
                    {generalInfo.email && <li>{generalInfo.email}</li>}<br></br>
                    {generalInfo.phone && <li>{generalInfo.email}</li>}<br></br>
                </ul><br></br>
                
                <ul className="showCV__education">
                EDUCATION INFO:<br></br>
                    {education.schoolName && <li>{education.schoolName}</li>}<br></br>
                    {education.titleStudy && <li>{education.titleStudy}</li>}<br></br>
                    {education.dateStudy && <li>{education.dateStudy}</li>}<br></br>
                </ul>
                <br></br>
                <ul className="showCV__practice">
                PRACTICE INFO:<br></br>
                    {practice.companyName && <li>{practice.companyName}</li>}<br></br>
                    {practice.positionTitle && <li>{practice.positionTitle}</li>}<br></br>
                    {practice.mainRespons && <li>{practice.mainRespons}</li>}<br></br>
                    {practice.dateFrom && <li>{practice.dateFrom}</li>}<br></br>
                    {practice.dateUntil && <li>{practice.dateUntil}</li>}<br></br>
                </ul>
            </div>
            {children}
        </div>
    )
}


export default CreateCV;