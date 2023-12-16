
import "./posterText.css"
import { useNavigate } from "react-router-dom"
function PosterText(){
    const navigate = useNavigate()
    return(
        <div className="poster-text-main">
            <p className="para-poster1">Enjoy big movies, hit series and more.</p>
            <p className="para-poster2">from₹149</p>
           <p className="para-poster3">Join today. Cancel anytime.</p>
           <button onClick={()=>navigate("./login")} className="getStarted">Get Started  </button>
       </div>
    )
}
export default PosterText