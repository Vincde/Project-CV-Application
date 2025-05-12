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
            GENERAL INFO:<br></br>
            <ul>
               {generalInfo.name && <li>{generalInfo.name}</li>}<br></br>
                {generalInfo.email && <li>{generalInfo.email}</li>}<br></br>
                {generalInfo.phone && <li>{generalInfo.email}</li>}<br></br>
            </ul><br></br>
            
            
            EDUCATION INFO:<br></br>
            {education.map((element) => {
                return(
            <>
                <ul>
                {element.schoolName && <li>{element.schoolName}</li>}<br></br>
                {element.titleStudy && <li>{element.titleStudy}</li>}<br></br>
                {element.dateStudy && <li>{element.dateStudy}</li>}<br></br>
                </ul><br></br>
            </>  
            )})}

            
            PRACTICE INFO:<br></br>
            {practice.map((element) => {
                return(
                <>
                <ul>
                    {element.companyName && <li>{element.companyName}</li>}<br></br>
                    {element.positionTitle && <li>{element.positionTitle}</li>}<br></br>
                    {element.mainRespons && <li>{element.mainRespons}</li>}<br></br>
                    {element.dateFrom && <li>{element.dateFrom}</li>}<br></br>
                    {element.dateUntil && <li>{element.dateUntil}</li>}<br></br>
                </ul>        
                </>
                )
            })}
            
            {children}
        </div>
    )
}


export default CreateCV;