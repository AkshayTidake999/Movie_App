import "../layout/moviesPage.css"
import { useState , useEffect } from "react";
import CircularIndeterminate from '../layout/Loader'
import { NavLink ,Route,Routes , Outlet} from "react-router-dom";
import DetailsPage from "./DetailsPage";
function MoviesPage(){
    const [movies, setMovies] = useState([]);
    const [isLoading , setIsLoading] = useState(true)
    const [inputvalue , setInputvalue] = useState("")
    
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

      const searchDataMovie = (e)=>{
        setInputvalue(e.target.value)
        console.log(e.target.value)
      }

      const searchMovies = movies.filter((item)=>(
         item.title.includes(inputvalue) ||
         item.title.toLowerCase().includes(inputvalue) ||
         item.title.toUpperCase().includes(inputvalue)
      ))

      useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false)
        },1000);
        return ()=>clearTimeout(timer)
      },[])
      const basePosterUrl = "https://image.tmdb.org/t/p/w500"; // Adjust the size as needed

    return(
        <>
          <div className="upperBox">
          <h1 className="movies-page-head">Top Rated Movies</h1>
          <input
            onChange={(e)=>searchDataMovie(e)} 
            value={inputvalue}
            className="input-movie-search" placeholder="Enter Movie Name" />
          <div>
            <div>
              <button>Sort By A-Z</button>
            </div>
          </div>
          </div>
            {
                isLoading ? (
                    <div className="loader">
                        <CircularIndeterminate />
                     </div>
                ):
               (
                <div className="movies-container-movies">
                {searchMovies.map((movie,index) => (
                 <NavLink to={`details/${movie.id}`} className="latest-movies-box" key={movie.id}>

                    <img
                      className="movies-poster-front"
                      src={`${basePosterUrl}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  
                  </NavLink>
                ))}
              </div>
               )

            }
        </>
    )
}
export default MoviesPage