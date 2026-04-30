import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import PracticeForm from "./components/PracticeForm";
import './App.css';
import { useState } from "react";

function App() {
    const [cvInfo, setCvInfo] = useState({});
    const [educationInfo, setEducationInfo] = useState([]);


    const setInfoObject = (infoObject) => {
        setCvInfo({...infoObject});
    }

    const setEducationObject = (educationObject) => {
        setEducationInfo([...educationObject]);
    }




    return(
        <>
            <h1 style={{textAlign: "center"}}>Compile your new CV!</h1>
            <section className="form-components">
                <GeneralForm sendForm={setInfoObject}></GeneralForm>
                <EducationForm sendForm={setEducationObject}></EducationForm>
                <PracticeForm></PracticeForm>
            </section>

            <h1>{cvInfo.name}</h1>
            { educationInfo.length !== 0 ? <h1>{educationInfo[0].schoolName}</h1> : null}
        </>
    );
}



export default App;