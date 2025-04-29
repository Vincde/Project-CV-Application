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
        {cv && <CV cv={alternativeInput.cv} generalInfo={alternativeInput.generalInfo} education={alternativeInput.education} practice={alternativeInput.practice}></CV>}
        </>
    );
}

function CV({cv, generalInfo, education, practice}) {
    return(
        <div>{cv}{generalInfo.name}{education.schoolName}{practice.companyName}</div>
    )
}


export default CreateCV;