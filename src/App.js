import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode,setMode] = useState("light");
  
  const modeChange = ()=>{
    console.log("Button clicked");
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = '#fff';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#212529';

    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={modeChange} />

      <div className="container">
        <TextForm heading="Enter text to analyze below" mode = {mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
