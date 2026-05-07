import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import PracticeForm from "./components/PracticeForm";
import './App.css';
import { useState } from "react";

function App() {
    const [cvInfo, setCvInfo] = useState({});
    const [educationInfo, setEducationInfo] = useState([]);
    const [practiceInfo, setPracticeInfo] = useState([]);

    const setInfoObject = (infoObject) => {
        setCvInfo({...infoObject});
    }

    const setEducationObject = (educationObject) => {
        setEducationInfo([...educationObject]);
    }

    const setPracticeObject = (practiceObject) => {
        setPracticeInfo([...practiceObject]);
    }




    return(
        <>
            <div className="form-title-bttn">
                <button>Create Your New CV!</button>   
                <h1 style={{textAlign: "center"}}>Compile your new CV!</h1>
            </div>
            
            <section className="form-components">
                <GeneralForm sendForm={setInfoObject}></GeneralForm>
                <EducationForm sendForm={setEducationObject}></EducationForm>
                <PracticeForm sendForm={setPracticeObject}></PracticeForm>
            </section>
            

            <p>
                {cvInfo.name}
                {educationInfo.length !== 0 ? educationInfo[0].schoolName : null}
                {practiceInfo.length !== 0 ? practiceInfo[0].companyName : null}
            </p>
        </>
    );
}



export default App;