import {useEffect,useState} from "react";
import Article from "../../components/articles/Article";
import Navbar  from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";




function Home () {
   
  const [articles, setArticles]= useState([])
  const[isloading, setIsLoading]= useState(false)

  useEffect(()=>{
  setIsLoading(true)
   axios.get("http://localhost:8000/articles")
   .then(result=>{
    setArticles(result.data);
    setIsLoading(false)
   })
   .catch((error)=>{
    console.log(error);
    setIsLoading(false)
   });

 },[]);

  return(
    <div className="homeWrapper">
         <Navbar  title="وبلاگ من"/>
       
      

      <div className="container">
        <h2>مقالات جدید</h2>

       {isloading ?  <Spinner/>
: (
        <div className="articles">
        {articles.map((article)=> (
        <Link to={`/article/${article.id}`}>
        <Article key={article.id} article={article}/>
        </Link>
        ))}
       
      </div>
       )}
       
        
      </div>
      <Footer />
    </div>
    );
}

export default Home;