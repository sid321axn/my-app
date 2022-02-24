
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
const [mode,setMode] = useState('light');//Whether dark mode is enabled or not 

const toggleMode = () =>
{
if (mode==='light')
{

  setMode('dark');
  document.body.style.backgroundColor='#042743';
}
else{

  setMode('light');
  document.body.style.backgroundColor='white';
}

}
  return (
    <>
  <Navbar aboutText="About React App" mode = {mode} toggleMode={toggleMode}/>

  
  <div className="container my-5">

  <TextForm heading="Enter Text to Analyze Below" mode={mode}/>

  </div>
    </>
  );
}

export default App;
