
import "./footer.css"

function Footer(){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Add smooth scrolling for a better user experience
        });
      };
    return(
        <div className="footer">
           <div className="back-to-top">
            <button className="back-to-top" onClick={scrollToTop}>Back To Top</button>
           </div>
           <div className="footer-main-section">
           <div className="footer-section1">
                <p>Get to Know Us</p>
                <ul>
                    <li>Account</li>
                    <li>Services</li>
                    <li>Coustmer Care</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer-section2">
                <p>	Let Us Help You</p>
            <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Legal Notice</li>
                    <li>Cookies</li>
                </ul>
            </div>
            <div className="footer-section3">
                <p>Media Center</p>
            <ul>
                    <li>Media Center</li>
                    <li>Way to Watch</li>
                    <li>Term To Use</li>
                    <li>Speed Test</li>
                </ul>
            </div>
            <div className="footer-section4">
                <p>Connect with Us</p>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Snapchat</li>
                </ul>
            </div>
           </div>
           <div className="horizantal-line"></div>
           <div className="country-brand">
            <div className="flex-brand-select">
                <div className="channel-name" >Cinefirma</div>
                <div className="select-lang">
                    <select>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Tamil</option>
                    <option>Telgu</option>
                        <option>Urdu</option>
                    </select>
                </div>
            </div>

            <div className="country-list">
                <ul>
                    <li>India</li>
                    <li>Japan</li>
                    <li>China</li>
                    <li>Netharlan</li>
                    <li>Pakistan</li>
                    <li>Iraq</li>
                    <li>America</li>
                    <li>France</li>
                    <li>UAE</li>
                    <li>Afganistan</li>
                    <li>Shrilanka</li>
                    <li>Australia</li>
                    <li>Enland</li>
                    <li>London</li>
                    <li>Newzeland</li>
                    <li>SoutAfrica</li>
                    <li>WestIndies</li>
                    <li>Spain</li>
                    <li>Poland</li>
                </ul>
            </div>
           </div>
           <div className="horizantal-line"></div>

           <div>
            <p className="copyright"  > Copyright © 2023-2040, Cinefirma.com, Inc. or its affiliates</p>
           </div>
        </div>
    )
}
export default Footer