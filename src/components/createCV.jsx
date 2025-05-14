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
                <div className="showCV__left__link"> <img src="./../../public/link.svg" alt="" /> {generalInfo.email && <b>www.BeautifulWebsite.com</b>}</div>
            </div>   

            <div className="showCV__separator"></div>

            <div className="showCV__right">
                <h1>{generalInfo.name}</h1>

                <div className="showCV__right__separator"></div>

                <h2><b>EDUCATION INFO:</b></h2><br></br>
                {education.map((element) => {
                    return(
                <React.Fragment key={element.id}>
                    <div className="showCV__right__list">
                        <h3>
                        {element.dateStudy && element.dateStudy}
                        {element.dateStudy && element.schoolName ? '|' : ''}
                        {element.schoolName && element.schoolName}
                        </h3>
                        <h4>{element.titleStudy && element.titleStudy}</h4>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem debitis officiis suscipit reprehenderit dolores quos doloribus at nisi culpa? Nulla nihil placeat adipisci, accusantium aliquid molestiae minima aspernatur architecto odit?</p>
                    </div>
                <br></br>
                </React.Fragment>
                )})}

                <br></br>
                
                <h2><b>PRACTICE INFO:</b></h2><br></br>
                {practice.map((element) => {
                    return(
                    <React.Fragment key={element.id}>
                    <div className="showCV__right__list">
                        <h3>
                        {element.dateFrom && element.dateFrom}
                        {element.dateFrom && element.dateUntil ? ' to ' : ''}   {/* not to leave - alone when elements are null */}
                        {element.dateUntil && element.dateUntil}
                        {element.companyName && (element.dateFrom || element.dateUntil) ? ' |' : ''} {element.companyName && element.companyName}
                        </h3>
                        <h4>
                            {element.positionTitle && element.positionTitle}
                            {element.mainRespons && element.positionTitle ? ' /' : ''} {/* not leave alone */}
                            {element.mainRespons && element.mainRespons}
                        </h4>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem debitis officiis suscipit reprehenderit dolores quos doloribus at nisi culpa? Nulla nihil placeat adipisci, accusantium aliquid molestiae minima aspernatur architecto odit?</p>
                    </div>
                <br></br>
                    </React.Fragment>
                    )
                })}
                
                {children}
            </div>
        </div>
    )
}


export default CreateCV;