import GeneralInfo from './GeneralInfo'
import EducationalExperience from './Education';
import Practical from './Practical';
import CreateCV from './createCV';
import './App.css'
import { useState } from 'react'



function App() {

  const [generalInfo, setGeneralInfo] = useState({name:'',email:'',phone:''});
  const [education, setEducation] = useState({schoolName: '', titleStudy: '', dateStudy: ''});
  const [practice, setPractice] = useState({companyName: '', positionTitle: '', mainRespons: '', dateFrom: '', dateUntil: ''});
  const [cv, setCV] = useState(false);

  return(
    <>
    <div>

      {!cv && <GeneralInfo info={generalInfo} setInfo={setGeneralInfo}></GeneralInfo> }
      {!cv && <EducationalExperience education={education} setEducation={setEducation}></EducationalExperience> }
      {!cv && <Practical practice={practice} setPractice={setPractice}></Practical> }
    </div>
    <CreateCV
     cv={cv}
     setCV={setCV}
     generalInfo={generalInfo}
     education={education}
     practice={practice}>
     </CreateCV>
    </>
  );
}





export default App;
