import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import { useState } from 'react';




function App() {
  const [generalInfo, setGeneralInfo] = useState({name : '', email: '', phone: ""});
  const [educationInfo, setEducationInfo] = useState({schoolName: '', titleOfStudy: '', dateOfStudy: ''})
  const [practicalExperience, setPracticalExperience] = useState({companyName: '', positionTitle: '', mainResponsibilities: '', dateOfStart: '', dateOfEnd: ''});

  const createChangeHandler = (setterFunc) => (e) => {
    setterFunc(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };



  return(
    <>
    <GeneralInfo 
      generalInfo={generalInfo}
      onChange={createChangeHandler(setGeneralInfo)}
    ></GeneralInfo>
    
    
    <EducationalExperience
      educationInfo={educationInfo}
      onChange={createChangeHandler(setEducationInfo)}
    ></EducationalExperience>


    <PracticalExperience 
      practicalExperience={practicalExperience}
      onChange={createChangeHandler(setPracticalExperience)} 
    ></PracticalExperience>
    </>
  );
  
}



export default App;