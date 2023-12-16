import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../layout/detailsPage.css";
import Similar from "./Similar";

function DetailsPage() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=cbeeaf07770c833f7b5895ce0c0e0dc2&append_to_response=videos`
        );
        const data = await response.json();
        setMovieDetails(data);

      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    // Optionally, you can show a loading indicator here
    return <p>Loading...</p>;
  }

  const basePosterUrl = "https://image.tmdb.org/t/p/w500"; // Adjust the size as needed

  return (
    <div className="details-home">
      <div className="main-details-page">
        <div className="main-div-1">
            <div className="movies-poster-front-a">
            {movieDetails.videos && movieDetails.videos.results.length > 0 && (
            <div className="video-container">
              <iframe
                width="1347"
                height="515"
                src={`https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`}
                title="movie-trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
            </div>
         
        </div>
        <div className="main-div-2">
            <div className="inner-div">
            <p className="tag"> Popularity : {movieDetails.popularity}</p>
            <p className="tag">Release Date : {movieDetails.release_date}</p>
            <p className="tag">Vote : {movieDetails.vote_count}</p>
            <p className="tag">Vote Average : {movieDetails.vote_average}</p>
            </div>
            <div>
                 <h1 className="head-movies-name">{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
            </div>
         

          
        </div>
       
      </div>
      <Similar/>
    </div>
  );
}

export default DetailsPage;
