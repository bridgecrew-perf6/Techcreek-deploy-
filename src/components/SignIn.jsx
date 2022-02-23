const SignIn = () => {
    return ( 
        <form>
            <br />
                <div className="form__control">
                    <input className="input" type="text" placeholder="Email" />
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
 
export default SignIn;