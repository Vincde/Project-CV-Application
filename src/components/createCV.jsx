import { useState } from "react";
import '../styles/createCV.css';
import React from "react";

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

            <div className="showCV__left">
                <div className="showCV__left__img"><img src={"../../public/person.png"} alt="owner of the cv" /></div>
                <h1>Contatti</h1>
                <div className="showCV__left__phone"> <img src="./../../public/phone.svg" alt="" /> <b>+39 {generalInfo.phone}</b></div>
                <div className="showCV__left__email"> <img src="./../../public/mail.svg" alt="" /> <b>{generalInfo.email}</b></div>
                <div className="showCV__left__link"> <img src="./../../public/link.svg" alt="" /> <b>www.BeautifulWebsite.com</b></div>
            </div>   

            <div className="showCV__separator"></div>

            <div className="showCV__right">
                EDUCATION INFO:<br></br>
                {education.map((element) => {
                    return(
                <React.Fragment key={element.id}>
                    <ul>
                    {element.schoolName && <li>{element.schoolName}</li>}<br></br>
                    {element.titleStudy && <li>{element.titleStudy}</li>}<br></br>
                    {element.dateStudy && <li>{element.dateStudy}</li>}<br></br>
                    </ul><br></br>
                </React.Fragment>
                )})}
                
                PRACTICE INFO:<br></br>
                {practice.map((element) => {
                    return(
                    <React.Fragment key={element.id}>
                    <ul>
                        {element.companyName && <li>{element.companyName}</li>}<br></br>
                        {element.positionTitle && <li>{element.positionTitle}</li>}<br></br>
                        {element.mainRespons && <li>{element.mainRespons}</li>}<br></br>
                        {element.dateFrom && <li>{element.dateFrom}</li>}<br></br>
                        {element.dateUntil && <li>{element.dateUntil}</li>}<br></br>
                    </ul>
                    </React.Fragment>
                    )
                })}
                
                {children}
            </div>
        </div>
    )
}


export default CreateCV;