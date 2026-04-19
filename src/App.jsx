import GeneralInfo from './components/GeneralInfo';
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState({name : '', email: '', phone: 0});


/*
    function handleChange2(e, changingObject){
      for(elements in changingObject){
        if(changingObject[elements])
      }
    }
        the idea is probably to use the handleChange value with the label assigned to it
        and then change the value itself
*/
    function handleChange(e) {
      switch(e.target.value){
        case generalInfo.name:
          setGeneralInfo({...generalInfo, name: e.target.value});
          break;
        case generalInfo.email:
          setGeneralInfo({...generalInfo, email: e.target.value})
          break;
        case generalInfo.phone:
          setGeneralInfo({...generalInfo, email: e.target.value});
          break;
      }
    }

  return(
    <GeneralInfo generalInfo={generalInfo} handleChange={handleChange}></GeneralInfo>
  )
  
}





export default App;
