import GeneralInfo from './GeneralInfo'
import EducationalExperience from './Education';
import './App.css'
import { useState } from 'react'

function App() {

  const [generalInfo, setGeneralInfo] = useState({name:'',email:'',phone:''});
  const [education, setEducation] = useState({schoolName: '', titleStudy: '', dateStudy: ''});

  return(
    <>
    <div>
      <GeneralInfo info={generalInfo} setInfo={setGeneralInfo}></GeneralInfo>
      <EducationalExperience education={education} setEducation={setEducation}></EducationalExperience>
    </div>
    </>
  );
}

export default App
