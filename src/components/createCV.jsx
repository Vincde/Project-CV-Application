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
            <div className="showCV__generics">
                <div className="showCV__generics__up">
                    <img src="https://www.shutterstock.com/image-photo/young-smiling-woman-holding-her-600w-246822310.jpg" alt="image of person" />
                    <h1>Contatti</h1>
                    <p>{generalInfo.phone && generalInfo.phone}</p>
                    <p>{generalInfo.email && generalInfo.email}</p>
                    <p>www.reallygreatsite.com</p>
                </div>

                <div className="showCV__generics__down">
                    <h1><b>Lingue</b></h1>
                    <p><b>Italiano</b> madrelingua</p>
                    <p><b>Inglese</b> C2</p>
                    <p><b>Spagnolo</b> B2</p>
                    <p><b>Francese</b> B1</p>

                    <h1><b>Su di me</b></h1>

                    <p>Creativa e professionale <br></br>
                    Specializzata in visual design <br></br>
                    Sono proattiva, imparo in fretta <br></br>
                    nuove metodologie di lavoro e mi <br></br>
                    piace tenermi aggiornata sui trend.
                    </p>
                </div>
            
            </div>


            <div className="showCV__specifics">
                <h1>{generalInfo.name}</h1>
                <div>
                <h2>Istruzione e Formazione</h2>
                    {education.dateStudy}| {education.schoolName} <br></br>
                    {education.titleStudy}
                </div>
                <div>
                    <h2>Esperienza Professionale</h2>
                    {practice.dateFrom}-{practice.dateUntil} | {practice.companyName} <br></br>
                    {practice.positionTitle} <br></br>
                    {practice.mainRespons}
                </div>
            </div>
            {children}
        </div>
    )
}


export default CreateCV;