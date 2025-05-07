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
                <div>GENERAL INFO:</div><br></br>
                    {generalInfo.name && <div>Name: </div> }<br></br>
                    {generalInfo.name && <li>{generalInfo.name}</li>}<br></br>
                    
                    {generalInfo.email && <div>Email: </div> }<br></br>
                    {generalInfo.email && <li>{generalInfo.email}</li>}<br></br>

                    {generalInfo.phone && <div>Phone Number: </div> }<br></br>
                    {generalInfo.phone && <li>{generalInfo.phone}</li>}<br></br>
                </ul><br></br>
                
                <ul className="showCV__education">
                <div>EDUCATION INFO:</div><br></br>
                    {education.schoolName && <div>School Name: </div> }<br></br>
                    {education.schoolName && <li>{education.schoolName}</li>}<br></br>

                    {education.titleStudy && <div>Title of Study: </div> }<br></br>
                    {education.titleStudy && <li>{education.titleStudy}</li>}<br></br>

                    {education.dateStudy && <div>Date of obtaining the title: </div> }<br></br>
                    {education.dateStudy && <li>{education.dateStudy}</li>}<br></br>
                </ul>
                <br></br>
                <ul className="showCV__practice">
                <div>PRACTICE INFO:</div><br></br>
                    {practice.companyName && <div>Company Name: </div> }<br></br>
                    {practice.companyName && <li>{practice.companyName}</li>}<br></br>

                    {practice.positionTitle && <div>Position in the company: </div> }<br></br>
                    {practice.positionTitle && <li>{practice.positionTitle}</li>}<br></br>

                    {practice.mainRespons && <div>Main responsability in the company: </div> }<br></br>
                    {practice.mainRespons && <li>{practice.mainRespons}</li>}<br></br>

                    {practice.dateFrom && <div>Worked from: </div> }<br></br>
                    {practice.dateFrom && <li>{practice.dateFrom}</li>}<br></br>

                    {practice.dateUntil && <div>To: </div> }<br></br>
                    {practice.dateUntil && <li>{practice.dateUntil}</li>}<br></br>
                </ul>
            </div>
            {children}
        </div>
    )
}


export default CreateCV;