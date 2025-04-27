function CreateCV({cv, setCV, generalInfo, education, practice}) {

    function handleCVCreation() {
        setCV(true);
    }

    return(
        <>
        <button onClick={handleCVCreation}>Create Your CV!</button>
        {cv && <CV cv={cv} generalInfo={generalInfo} education={education} practice={practice}></CV>}
        </>
    )
}

function CV({cv, generalInfo, education, practice}) {
    const ciao = cv;
    return(
        <div>{ciao}{generalInfo.name}{education.schoolName}{practice.companyName}</div>
    )
}


export default CreateCV;