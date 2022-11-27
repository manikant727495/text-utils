import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import TextArea from './component/TextArea';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null)
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= "#042743";
      showAlert('success','Dark mode has been enabled');
    } else{
      setMode('light');
      document.body.style.background = "white";
      showAlert('success','Light mode has been enabled');
    }
  }
  const showAlert = (type, message)=>{
      setAlert({
        msg : message,
        typ :type
      });

      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  return (
    <Router>
        <Navbar title = "textUtils" about = "about us" mode = {mode} toggleMode = {toggleMode}/>
        <Alert  alert = {alert}/>
        <div className='container'>
          <Routes>
              <Route path = "/" element = {<TextArea heading = "Try TextUtils - word counter, character counter,  remove extra spaces" mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert}/>} />
              <Route path= "/about" element = {<About heading = "about us" mode = {mode}/>}  />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
