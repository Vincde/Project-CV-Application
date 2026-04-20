import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import { useState, memo, useCallback } from 'react';

// GeneralInfoOptimized and EducationalExperienceOptimized
//  is for not rendering the component function every time
const GeneralInfoOptimized = memo(GeneralInfo);
const EducationalExperienceOptimized = memo(EducationalExperience);


function App() {
  const [generalInfo, setGeneralInfo] = useState({name : '', email: '', phone: ""});
  const [educationInfo, setEducationInfo] = useState({schoolName: '', titleOfStudy: '', dateOfStudy: ''})


  // useCallBack is for not rendering the function every time
  const handleChange = useCallback((e, changingObject, setChangingObject) => {
    setChangingObject({...changingObject, [e.target.id]: e.target.value});
  }, []);


  /*
    function handleChange(e, changingObject, setChangingObject) {
    setChangingObject({...changingObject, [e.target.id]: e.target.value});
  }
    */

  return(
    <>
    <GeneralInfoOptimized generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} handleChange={handleChange}></GeneralInfoOptimized>
    <EducationalExperienceOptimized educationInfo={educationInfo} setEducationInfo={setEducationInfo} handleChange={handleChange}></EducationalExperienceOptimized>
    </>
  );
  
}





export default App;
