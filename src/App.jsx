import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import { useState } from 'react';
import './App.css';
import CompleteCV from './components/CompleteCV';




function App() {
  const [generalInfo, setGeneralInfo] = useState({name : '', email: '', phone: "", formState: 'edit'});
  const [educationInfo, setEducationInfo] = useState({schoolName: '', titleOfStudy: '', dateOfStudy: '', formState: 'edit'})
  const [practicalExperience, setPracticalExperience] = useState({companyName: '', positionTitle: '', mainResponsibilities: '', dateOfStart: '', dateOfEnd: '', formState: 'edit'});

  const createChangeHandler = (setterFunc) => (e) => {
    setterFunc(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };



  return(
    <>
      {generalInfo.formState === 'sent' &&
      educationInfo.formState === 'sent' &&
      practicalExperience.formState === 'sent' ? 
      (
        <CompleteCV infos={[generalInfo, educationInfo, practicalExperience]}
          setInfos={[setGeneralInfo, setEducationInfo, setPracticalExperience]}
          ></CompleteCV>
      ) : (
        <>
        <h1>Create Your CV!</h1>
        <div className='main_container'>
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
      </div>
      </>
      )}
      
    </>
  );
  
}



export default App;