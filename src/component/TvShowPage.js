import { useEffect, useState } from "react"


function TvShowPage(){
    const [tvShow , setTvShow] = useState([])
    useEffect(()=>{
        const fetchTv = async () =>{
          try{
            const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=cbeeaf07770c833f7b5895ce0c0e0dc2")
            const data = await response.json();
            setTvShow(data.results)
            // console.log(data.results)
          }catch(error){
            console.log("Fetching Error TvShow :  ",error)
          }
        }
        fetchTv()
    },[])
    const basePosterUrl = "https://image.tmdb.org/t/p/w500";
    return(
        <>
            <h1>TvShowPage</h1>
            <div className="movies-container-movies">
                {tvShow.map((item,index) => (
                  <div className="latest-movies-box" key={item.id}>
                    <img
                      className="movies-poster-front"
                      src={`${basePosterUrl}${item.poster_path}`}
                      alt={item.title}
                    />
                  
                  </div>
                ))}
              </div>

        </>
    )
}
export default TvShowPage