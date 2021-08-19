import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './component/Home';
import Course from './component/Course';



function App() {
const btnhandle=()=>{
  toast.error("my first messsage",{
position:"bottom-right",

  })
  
  
};

  return(
  <div className="text-center
  "> 
    <ToastContainer/>
   <h1>simple application</h1>
   <Button color="primary" outline onClick={btnhandle}>react button</Button>
   <Home></Home>
   <Course></Course>
   
  </div>)
           
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
}

export default App;
