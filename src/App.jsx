import GeneralInfo from './GeneralInfo'

import './App.css'
import { useState } from 'react'

function App() {

  const [generalInfo, setGeneralInfo] = useState({name:'',email:'',phone:''});

  return(
    <>
    <div>
      <GeneralInfo info={generalInfo} setInfo={setGeneralInfo}></GeneralInfo>
    </div>
    </>
  )
}

export default App
