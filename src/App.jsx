import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import PracticeForm from "./components/PracticeForm";
import './App.css';

function App() {




    return(
        <>
            <h1 style={{textAlign: "center"}}>Compile your new CV!</h1>
            <section className="form-components">
                <GeneralForm></GeneralForm>
                <EducationForm></EducationForm>
                <PracticeForm></PracticeForm>
            </section>
        </>
    );
}



export default App;