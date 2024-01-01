import "./article.css";
import article from "./../../assets/images/1.jpg"

function Article(props){
   console.log(props);
    return(
    <div className="articleWrapper">
        <img src={props.article.imageUrl} />

     <h3>{props.article.title}</h3>
     <p>خواندن {props.article.readingTime} دقیقه ایی</p>

    </div>
    )
}

export default Article;