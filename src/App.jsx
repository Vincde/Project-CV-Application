import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState({name : '', email: '', phone: ""});
  const [educationInfo, setEducationInfo] = useState({schoolName: '', titleOfStudy: '', dateOfStudy: ''})


  function handleChange(e, changingObject, setChangingObject) {
    setChangingObject({...changingObject, [e.target.id]: e.target.value});
  }

  return(
    <>
    <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} handleChange={handleChange}></GeneralInfo>
    <EducationalExperience educationInfo={educationInfo} setEducationInfo={setEducationInfo} handleChange={handleChange}></EducationalExperience>
    </>
  );
  
}





export default App;
