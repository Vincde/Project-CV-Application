function CreateCV({cv, setCV}) {

    function handleCVCreation() {
        setCV(true);
    }

    return(
        <>
        <button onClick={handleCVCreation}>Create Your CV!</button>
        {cv && <Ciao></Ciao>}
        </>
    )
}

function Ciao() {
    return(
        <div>ciao</div>
    )
}


export default CreateCV;