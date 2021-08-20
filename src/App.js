import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './component/Home';
import Course from './component/Course';
import Allcourse from './component/Allcourses';
import Addform from './component/Addform';
import Header from './component/Header';
import Menus  from './component/menus';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
const btnhandle=()=>{
  toast.error("kuch nahi hoga",{
position:"bottom-right",

 })
  
  
};

  return(



  <div className="text-center"> 
  <Router>
    <ToastContainer/>
    <Header/>
    <Container className="mt-3">
      <Row>
        <Col md={4}>
        <Menus/>
        
        </Col>
        <Col md={8}>
        <Route path="/" component={Home} exact/>
        <Route path="/all-course" component={Allcourse} exact/>
        <Route path="/Add-form" component={Addform} exact/>
        </Col>

      </Row>
    </Container>
   
    
    </Router>
   
  </div>)
           
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
   // <Course course={{title:"java course",description:"java description is here"}}/>
   // <Course course={{title:"react course",description:"react description is here"}}/>
   //<Home/>
   //<Allcourse/><h1>simple application</h1>
   //<Button color="primary" onClick={btnhandle}>click me nothing will happen trust me</Button>
   //<Addform/>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //</div>

  
}

export default App;
