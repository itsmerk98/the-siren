import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from "./components/Footer.js";
import Home from './components/home/Home.js';
import Bollywood from './components/bollywood/Bollywood.js';
import Error from './components/Error.js';
import Hollywood from './components/hollywood/Hollywood.js';
import Fitness from './components/fiteness/Fiteness.js';
import Food from './components/food/food.js';
import Technology from './components/technology/Technology.js';

import './components/css/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path={'/'} element={<Home />} exact />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/food' element={<Food />} />
          <Route element={<Error />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
