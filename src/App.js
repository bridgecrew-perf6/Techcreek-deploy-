import Main from './components/Main';
import './app.scss' ;
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Membership from './components/Membership';



function App() {
  return (
    <div>
   
     <Router>

        <Routes>
        <Route path="/" element={  <Main/>}/>
        <Route path="/membership" element={  <Membership/>}/>

        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
