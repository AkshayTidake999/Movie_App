
import { NavLink } from "react-router-dom"
import "../App.css"
function Header(){
    return(
        <div className="main-home-page">
         
            <div className="header-bar">
               <div className="header-bar2">
               <div>
                    <h1 className="site-name">Cinefirma</h1>
                </div>
               
                <div>
                   
                </div>
                <div className="link">
                    <ul>
                        <NavLink className="navlink" to="/">Home </NavLink>
                        <NavLink className="navlink" to="/movies">Movies</NavLink>
                        <NavLink className="navlink" to="/tvshow">TV Show</NavLink>
                        <NavLink className="navlink" to="/login">Login</NavLink>
                        <NavLink className="navlink" to="/registration">Registration</NavLink>
                       
                    </ul>
                </div>
               </div>
            </div>
          
        </div>
    )
}
export default Header