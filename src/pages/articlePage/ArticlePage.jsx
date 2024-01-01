import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./articlePage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";




function ArticlePage(){

const[article,setArticle]= useState({})
const [isloading, setIsLoading] = useState(false)

const params= useParams()
   
useEffect(() => {
 setIsLoading(true)
 axios.get(`http://localhost:8000/articles/${params.id}`)
 .then((result)=>{
    
  setArticle(result.data)  
   setIsLoading(false) 
 }) 
  
 .catch((error)=>{
    console.log(error);
    setIsLoading(false)
 });

}, [])

    return(
        <div>
        <Navbar  title="وبلاگ من"/>

        <div className="articlePage">

        <div className="container">

    {
        isloading ?  <Spinner/> :
        (

           <>

            <h1>{article.title}</h1>
            <div className="articleInfo">
             <span> تاریخ: {article.date}</span>
             <span> نویسنده:{article.ather}</span>
             <span> مدت زمان خواندن: {article.readingTime} دقیقه</span>
            </div>
           
             <img src={article.imageUrl} alt="" />
            
              <p>{article.content}</p>
             
              </>    
        )
    }
    
    


        

         

      
       </div>
       <Footer />
       </div>
        
       
        </div>
    )
}

export default ArticlePage;