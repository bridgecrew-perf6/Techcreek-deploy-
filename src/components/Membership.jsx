import {useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./Forms";
import Icons from "./Icons";
import Register from "./Register";
import SignIn from "./SignIn";
import {Link} from "react-router-dom"
import './MainMembership.scss'




const Membership = () => {
    const [signin, setSignIn] = useState(true)

    const changeForm = () => {
        setSignIn(!signin)
    }


    return ( 
        <div className="main__container">
            <div className="main__box">
                <div className="main__content">
                    <Icons />

                    <Link to="/">Back Home </Link>

                    <div className="form__conatainer">
                        
                    <button className="btn1" onClick={changeForm}>Sign</button>
                    <button className="btn1" onClick={changeForm}>Register</button>
                    {
                        signin? <SignIn /> : <Register />
                    }
                </div>

                </div>

                
            </div>
        </div>
     );
}
 
export default Membership;