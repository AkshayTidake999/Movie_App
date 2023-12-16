import "../layout/trendnow.css"
import { useEffect , useState } from "react";

export default function TrandingNow(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://api.themoviedb.org/3/movie/upcoming?api_key=cbeeaf07770c833f7b5895ce0c0e0dc2",
            );
            const data = await response.json();
            setMovies(data.results);
          } catch (error) {
            console.error("Error fetching movie data:", error);
          }
        };
    
        fetchData();
      }, []);
      const basePosterUrl = "https://image.tmdb.org/t/p/w500"; // Adjust the size as needed

    return(
        <div className="trend-box">
            {/* <h1>Tranding Now</h1> */}
            <div className="trend-now">
                <h1 className="head">Trending Now</h1>
            </div>
            <div className="select-country-movies"> 
                <select className="country">
                    <option>India</option>
                    <option>Global</option>
                </select>
                <select className="show">
                    <option>Movies</option>
                    <option>TV Show</option>
                </select>
            </div>
            <div>
            <div className="movies-container">
        {movies.filter((value,index)=>index<5).map((movie,index) => (
          <div className="movies-box" key={movie.id}>
            <img
              className="movies-poster-front"
              src={`${basePosterUrl}${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="top-trend-rank">{index+1}</p>
          
          </div>
        ))}
      </div>
            </div>
        </div>
    )
}