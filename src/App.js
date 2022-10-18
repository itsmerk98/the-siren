import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from "./components/Footer.js";
import Home from './components/home/Home.js';
import Bollywood from './components/bollywood/Bollywood.js';
import Error from './components/Error.js';
import Hollywood from './components/hollywood/Hollywood.js';
import Fitness from './components/fiteness/Fiteness.js';
import Food from './components/food/food.js';
import Technology from './components/technology/Technology.js';
// import Article from './pages/Article.js';

import './components/css/app.scss';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Blog from './pages/Blog.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/the-siren'} element={<Home />} exact />
        <Route path='/bollywood' element={<Bollywood />} exact/>
        <Route path='/technology' element={<Technology />} exact/>
        <Route path='/hollywood' element={<Hollywood />} exact/>
        <Route path='/fitness' element={<Fitness />} exact/>
        <Route path='/food' element={<Food />} exact/>
        <Route path='/login' element={<Login />} exact />
        <Route path='/signup' element={<SignUp />} exact />
        <Route path='/blog' element={<Blog />} /> 
        <Route element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
