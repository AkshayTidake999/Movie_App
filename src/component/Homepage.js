import BasicAccordion from '../layout/BasicAccordion'
import "../homePage.css"
import TrandingNow from './TrandingNow'
import PosterText from '../layout/PosterText'
function HomePage(){
    return(
        <>
        <div className="body22">
            <img src="https://topic.com/wp-content/uploads/2023/08/Topic_Theme_Grid_1920x1080_02b-uai-1032x581.jpg" />
            {/* <video >
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4">
                
               </source>
            </video> */}
        </div>
       <PosterText/>

        
        <div className="blank-dash-black"></div>
        <TrandingNow/>
        <div className="blank-dash-black"></div>
        <div className="enjaoy-add-box">
            <div className="enjaoy-add-box1" >
                <h1 className="addbox1-add1-heading">Enjoy On Your Application</h1>
                <p>Watch on your Application, smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="enjaoy-add-box2" >
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            </div>
       
        </div>

        <div className="blank-dash-black"></div>
        
        <div className="enjaoy-add-box">
        <div className="enjaoy-add-box2" >
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                <div className="download-box">
                    <p>Half Girlfriend</p>
                    <p>Downloading.....</p>
                </div>
            </div>
            <div className="enjaoy-add-box1" >
                <h1 className="addbox1-add1-heading">Download Show And Watch Offline Show </h1>
                <p>Download your faviourites show and watch anytime, anywhere in full high quality </p>
            </div>
        </div>
        <div className="blank-dash-black"></div>
        <div className="enjaoy-add-box">
        <div className="enjaoy-add-box1" >
                <h1 className="addbox1-add1-heading">Best Application For Child Show </h1>
                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.

</p>
            </div>
        <div className="enjaoy-add-box2" >
                <img src="https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" />
               
            </div>
           
        </div>
        <div className="blank-dash-black"></div>
        <div>
            <BasicAccordion/>
        </div>
        </>
        
    )
}
export default HomePage