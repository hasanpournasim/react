import './App.css';
import Navbar from "./components/navbar/Navbar";
import AboutUs from './pages/aboutUs/AboutUs';
import ArticlePage from './pages/articlePage/ArticlePage';
import Home  from './pages/home/Home';
import {Route, Routes} from "react-router-dom";
import NewArticle from './pages/newArticle/NewArticle.jsx';
import Input from './components/input/Input';




function App() {
  return (
    <div className="App">

    <Routes>
    
    <Route  path='/'  element={<Home />}/>
     
     <Route path='/about' element={<AboutUs />}/>
     <Route path='/article/:id'  element={<ArticlePage/>}/>
     <Route path='/newArticle' element ={<NewArticle/>}/>
     
    
    </Routes>
    
    </div>

  );
}

export default App;
