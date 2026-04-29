import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import PracticeForm from "./components/PracticeForm";

function App() {




    return(
        <>
            <section>
                <h1>Compile your new CV!</h1>
                <GeneralForm></GeneralForm>
                <EducationForm></EducationForm>
                <PracticeForm></PracticeForm>
            </section>

        </>
    );
}



export default App;