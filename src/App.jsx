import React,{useState} from 'react'
import './App.css'
import ButtonComponent from './Component/buttons/Button'
import ButtonsComponent from './Component/buttons/Buttons';

function App() {
  const [state,setState] = useState('black');
  return (
    <div className="App" style={{backgroundColor:state}}>
      <ButtonsComponent setState={setState}/>
    </div>
  )
}

export default App
