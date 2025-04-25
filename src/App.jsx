import GeneralInfo from './GeneralInfo'
import EducationalExperience from './Education';
import Practical from './Practical';
import './App.css'
import { useState } from 'react'

function App() {

  const [generalInfo, setGeneralInfo] = useState({name:'',email:'',phone:''});
  const [education, setEducation] = useState({schoolName: '', titleStudy: '', dateStudy: ''});
  const [practice, setPractice] = useState({companyName: '', positionTitle: '', mainRespons: '', dateFrom: '', dateUntil: ''});

  return(
    <>
    <div>
      <GeneralInfo info={generalInfo} setInfo={setGeneralInfo}></GeneralInfo>
      <EducationalExperience education={education} setEducation={setEducation}></EducationalExperience>
      <Practical practice={practice} setPractice={setPractice}></Practical>
    </div>
    </>
  );
}

export default App;
