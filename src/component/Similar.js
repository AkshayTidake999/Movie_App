import "../layout/moviesPage.css"
import { useState , useEffect } from "react";
import CircularIndeterminate from '../layout/Loader'
import { NavLink ,Route,Routes , Outlet} from "react-router-dom";
function Similar(){
    const [movies, setMovies] = useState([]);
    const [isLoading , setIsLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://api.themoviedb.org/3/person/popular?api_key=cbeeaf07770c833f7b5895ce0c0e0dc2",
            );
            const data = await response.json();
            setMovies(data.results);
          } catch (error) {
            console.error("Error fetching movie data:", error);
          }
        };
    
        fetchData();
      }, [movies]);

      


      useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false)
        },1000);
        return ()=>clearTimeout(timer)
      },[])
      const basePosterUrl = "https://image.tmdb.org/t/p/w500"; // Adjust the size as needed

    return(
        <>
    
                <div className="movies-container-movies">
                {movies.map((movie,index) => (
                 <NavLink to={`details/${movie.id}`} className="latest-movies-box" key={movie.id}>

                    <img
                      className="movies-poster-front"
                      src={`${basePosterUrl}${movie.poster_path}`}
                      alt={movie.title}
                    />
                  <h1>{movie.title}</h1>
                  </NavLink>
                ))}
              </div>
               

            
        </>
    )
}
export default Similar