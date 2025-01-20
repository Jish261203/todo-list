
import './App.css';
// import About from './Components/About';
// import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/home';
import About from "./Components/About";

import {BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Header/>

        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about-me' element={ <About/>}/>
        </Routes>
       
    </BrowserRouter>

  );
}

export default App;
