import logo from './logo.svg';
import DetailsPage from './component/DetailsPage';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import HomePage from './component/Homepage';
import LoginPage from './component/LoginPage';
import MoviesPage from './component/MoviesPage';
import TvShowPage from './component/TvShowPage';
import RegistrationPage from './component/RegistrationPage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PosterText from './layout/PosterText';
import PaymentPage from './component/PaymentPage';
function App() {  
  return (
    <div className="App">
       <Header/>

      {/* <h1>App</h1> */}
       <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/movies' element={<MoviesPage/>} />
          {/* <Route  path="movies/:movies" element={<DetailsPage/>}/> */}
          <Route path="/movies/details/:id" element={<DetailsPage />} />
          {/* </Route> */}

          <Route path='/tvshow' element={<TvShowPage/>} />
          <Route path='/registration' element={<RegistrationPage/>} />
          <Route path='/paypage' element={<PaymentPage/>} />
       </Routes>
    <Footer />
    </div>
  );
}

export default App;
