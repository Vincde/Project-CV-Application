import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import PracticeForm from "./components/PracticeForm";
import CompleteCV from "./components/CompleteCV";
import './App.css';
import { useState } from "react";

function App() {
    const [complete, setComplete] = useState(false);
    const [cvInfo, setCvInfo] = useState({});
    const [educationInfo, setEducationInfo] = useState([]);
    const [practiceInfo, setPracticeInfo] = useState([]);


    const handleComplete = () => {
        setComplete(!complete);
    }


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
        
            <div style={{display: complete ? "none" : "block"}}>
            <div className="form-title">
                <button onClick={handleComplete}>Create Your New CV!</button>   
                <h1 style={{textAlign: "center"}}>Compile your new CV!</h1>
            </div>
            
            <section className="form-components">
                <GeneralForm sendForm={setInfoObject}></GeneralForm>
                <EducationForm sendForm={setEducationObject}></EducationForm>
                <PracticeForm sendForm={setPracticeObject}></PracticeForm>
            </section>
            </div>
        
            <div style={{display: complete ? "block" : "none"}}>
                <CompleteCV generalInfo={cvInfo}
                educationInfo={educationInfo}
                practiceInfo={practiceInfo}
                handleEdit={handleComplete}
                ></CompleteCV>
            </div>
       
            
        </>
    );
}



export default App;