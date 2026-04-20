import GeneralInfo from './components/GeneralInfo';
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState({name : '', email: '', phone: ""});


    function handleChange(e, changingObject, setChangingObject) {
      setChangingObject({...changingObject, [e.target.id]: e.target.value});
    }

  return(
    <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} handleChange={handleChange}></GeneralInfo>
  );
  
}





export default App;
