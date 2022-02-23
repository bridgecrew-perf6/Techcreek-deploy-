import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Bossing from "./Bossing";
import Boss from "./Boxing";
import Alart from "./Location";
import Navbar from "./Nav_section";
import SignIn from "./SignIn";
import Register from "./Register";


const Main = () => {
    return ( 

      <div className="main__container1" >
        <div className="for__opp">

        <Navbar/>
        <Boss />
        <Test />
        <Bossing />
        <Alart/>

        {/* <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={ <SignIn/>}/>
            <Route path="/Register" element={ <Register/>}/>
            <Routes path="/Membership" element={<Membership/>}/>
          </Routes>
        </Router> */}
        
        </div>

      
        
      </div>

     );
}
 
export default Main;