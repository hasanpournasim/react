import "./newArticle.css";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import Input from "../../components/input/Input";

function NewArticle(){

const [article, setArticle] =useState({
 
  title:"",
  date: "",
  readingTime:"",
  athor:"",

});


const handleChangeArticle = (e)=>{

 setArticle((prevState)=>({
  ...prevState,
  [e.target.name]:e.target.value,
  message: e.target.value,
 }))
};



const handleCreateNewArticle= ()=>{
 

}



    return(
    <>
    <Navbar  title="وبلاگ من"/>
     <div className="newArticlePage">
      <div className="container">
        <h1> ساخت مقالات</h1>

        <Input   topic="عنوان"  name="title"   handleChange={handleChangeArticle}/>

        <Input   topic="تاریخ"  name="date"   handleChange={handleChangeArticle}/>

        <Input   topic="مدت زمان خواندن"  name="readingTime"   handleChange={handleChangeArticle}/>

        <Input   topic="نویسنده"  name="athor"  handleChange={handleChangeArticle}/>
        
        <Input   topic="آدرس عکس"  name="imageUrl"  handleChange={handleChangeArticle}/>


        <textarea  topic="متن"  onClick={handleChangeArticle}    rows="20" cols="100"></textarea>


        {/* <textera  topic="متن" handleChange={}/> */}

        <div className="buttonWrapper">
          <button onClick={handleCreateNewArticle}>ارسال مقاله</button>
        </div>

     </div>  
     </div> 
    
    </>

    )
}

export default NewArticle;