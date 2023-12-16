import "../layout/login.css"
import "../layout/reg.css"
import { NavLink,  } from "react-router-dom"

function RegistrationPage(){
    return(
        <div className="bigger-div">
            {/* <h1>LoginPage</h1> */}
            <div className="main-login-div">
                <div className="loginto-cinefirma">
                    <p className="login-head-name">Create a new account</p>
                    <p className="para-login">Create an account to continue enjoying uninterrupted video and personalised experience.</p>
                </div>
                <div className="icon-login-div">
                    <img className="he" src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" />
                    <img className="he" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" />
                    <img className="he" src="https://cdn-icons-png.flaticon.com/512/154/154870.png" />
                    <img className="he" src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" />
                </div>
                <div>
                    <br/>
                    <hr/>
                    <p className="or-radius">OR</p>
                   
                </div>
                <div >
                    <input className="loginfiled" placeholder="Enter Email or Mobile Number" />
                  <p className="check"> 
                  <input type="checkbox" />
                  
                  <span>by proceeding you agree to your <span className="tc">Teams of Services</span> & <span className="pc">Privacy Policy.</span></span>
                  </p> 
                    <button className="reg-btn">Create Account</button>

                </div>
                <div className="last-div">
                    <span className="new-user">Already registered ?  
                        
                    </span>
                    <NavLink to="/login" className="reg-text">Login</NavLink>
                </div>
            </div>

        </div>
    )
}
export default RegistrationPage