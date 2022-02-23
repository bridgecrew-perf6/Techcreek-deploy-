const Register = () => {
    return ( 
        <form>
            <br />
        <div className="form__control">
            <input className="input" type="text" placeholder="First Name, Last Name" />
        </div><br />

        <div className="form__control">
            <input className="input" type="text" placeholder="email" />
        </div><br />

        <div className="form__control">
                <select className="inputs">
                    <option value>Please select.....</option>
                    <option value="enthusiast">Enthusiast</option>
                    <option value="service_professional">service professional</option>
                    <option value="Veteran">Veteran</option>
                </select>
            </div><br />
        
            <div className="form__control">
            <input className="input" type="text" placeholder="Password" />
        </div><br />


    <div className="control_penal">
        <label>
            <input type="checkbox" name="Check 1"/> Remember me
        </label>
        <a href="#">Forgot Password?</a>
    </div><br />

    <div className="btn2">
        <button>Log in</button>
    </div>
   
</form>
     );
}
 
export default Register;