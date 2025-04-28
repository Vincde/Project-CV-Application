import { useState } from "react";

function CreateCV({cv, setCV, generalInfo, education, practice}) {

    const [alternativeInput, setAlternativeInput] = useState({});

    function handleCVCreation() {
        setCV(true);
        setAlternativeInput({cv, generalInfo, education, practice});
    }

    return(
        <>
        <button onClick={handleCVCreation}>Create Your CV!</button>
        {cv && <CV generalInfo={alternativeInput.generalInfo} education={alternativeInput.education} practice={alternativeInput.practice}></CV>}
        </>
    )
}

function CV({generalInfo, education, practice}) {
    return(
        <div>
            Your CV:<br></br>
            GENERAL INFO:<br></br>
            <ul>
                <li>{generalInfo.name}</li><br></br>
                <li>{generalInfo.email}</li><br></br>
                <li>{generalInfo.phone}</li><br></br>
            </ul><br></br>
            EDUCATION INFO:<br></br>
            <ul>
                <li>{education.schoolName}</li><br></br>
                <li>{education.titleStudy}</li><br></br>
                <li>{education.dateStudy}</li><br></br>
            </ul><br></br>
            PRACTICE INFO:<br></br>
            <ul>
                <li>{practice.companyName}</li><br></br>
                <li>{practice.positionTitle}</li><br></br>
                <li>{practice.mainRespons}</li><br></br>
                <li>{practice.dateFrom}</li><br></br>
                <li>{practice.dateUntil}</li><br></br>
            </ul>
        </div>
    )
}


export default CreateCV;