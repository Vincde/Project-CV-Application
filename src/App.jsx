import GeneralInfo from './GeneralInfo'

import './App.css'
import { useState } from 'react'

function App() {

  const [generalInfo, setGeneralInfo] = useState({name:'',email:'',address:''});

  return(
    <>
    <div>
      <GeneralInfo></GeneralInfo>
    </div>
    </>
  )
}

export default App
