import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import { useState, memo, useCallback } from 'react';

// GeneralInfoOptimized and EducationalExperienceOptimized
//  is for not rendering the component function every time
const GeneralInfoOptimized = memo(GeneralInfo);
const EducationalExperienceOptimized = memo(EducationalExperience);
const PracticalExperienceOptimized = memo(PracticalExperience);


function App() {
  const [generalInfo, setGeneralInfo] = useState({name : '', email: '', phone: ""});
  const [educationInfo, setEducationInfo] = useState({schoolName: '', titleOfStudy: '', dateOfStudy: ''})
  const [practicalExperience, setPracticalExperience] = useState({companyName: '', positionTitle: '', mainResponsibilities: [], dateOfStart: '', dateOfEnd: ''});

  // useCallBack is for not rendering the function every time
  const handleChange = useCallback((e, changingObject, setChangingObject) => {
    setChangingObject({...changingObject, [e.target.id]: e.target.value});
  }, []);



  return(
    <>
    <GeneralInfoOptimized generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} handleChange={handleChange}></GeneralInfoOptimized>
    <EducationalExperienceOptimized educationInfo={educationInfo} setEducationInfo={setEducationInfo} handleChange={handleChange}></EducationalExperienceOptimized>
    <PracticalExperienceOptimized practicalExperience={practicalExperience} setPracticalExperience={setPracticalExperience} handleChange={handleChange}></PracticalExperienceOptimized>
    </>
  );
  
}





export default App;




/* 
  EXAMPLE OF OPTIMIZED FUNCTION

  import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState({name : '', email: '', phone: ""});
  const [educationInfo, setEducationInfo] = useState({schoolName: '', titleOfStudy: '', dateOfStudy: ''});
  const [practicalExperience, setPracticalExperience] = useState({companyName: '', positionTitle: '', mainResponsibilities: [], dateOfStart: '', dateOfEnd: ''});

  // A generic generator function. 
  // It takes a setter, and returns a function tailored for that setter.
  // Using `prev` means we don't need to pass the current state object!
  const createChangeHandler = (setterFunc) => (e) => {
    setterFunc(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return(
    <>
      <GeneralInfo 
        data={generalInfo} 
        onChange={createChangeHandler(setGeneralInfo)} 
      />
      <EducationalExperience 
        data={educationInfo} 
        onChange={createChangeHandler(setEducationInfo)} 
      />
      <PracticalExperience 
        data={practicalExperience} 
        onChange={createChangeHandler(setPracticalExperience)} 
      />
    </>
  );
}




export default function GeneralInfo({ data, onChange }) {
  return (
    <div>
      <input 
        id="name" 
        value={data.name} 
        onChange={onChange} 
      />
      <input 
        id="email" 
        value={data.email} 
        onChange={onChange} 
      />
    </div>
  );
}

*/
