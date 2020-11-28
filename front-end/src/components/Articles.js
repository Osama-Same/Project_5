import React, { useState, useEffect } from "react";
import axios from "axios";





const Articles = () => {
    
    const [Articles, SetArticles] = useState([]);
    const [id,SetId]=useState(0)
    const [title, Settitle] = useState("");
    const [description, Setdescription] = useState("");
    const [author, Setauthor] = useState(""); 
    const [UpdateAuthor,setUpdateAuthor]=useState("")
     
      useEffect(() => {
        console.log("========= USEEFFECT CALLED =========");
        getAllArticlesMySql();
      }, []);
      const getAllArticlesMySql = () => {
        axios
          .get("http://localhost:5000/articlesMySql")
          .then((response) => {
            console.log("DATA: ", response.data);
            SetArticles(response.data);
          })
          .catch((err) => {
            console.log("RESULT: ", err);
          });
      };
     
    
      

      const handleSubmit = () => {
          const data ={
            title:title,
            description:description,
            author:author
          }
        axios
        .post("http://localhost:5000/articles/createMySql", data)
        .then((response) => {
          console.log("response", response);
          const newArray = [...Articles];
          newArray.push(response.data);
          SetArticles(newArray);
        })
        .catch((err) => {
          console.log("RESULT: ", err);
        });
        
      };
      const Update =()=>{
        
        axios
        .put(`http://localhost:5000/articlesMySql/${id}`,Articles[0])
        .then(() => {
          const newArray = [...Articles];
          newArray.author=UpdateAuthor;
         SetArticles(newArray);
         console.log("Success Update article")
        })
        .catch((err) => {
          console.log("RESULT: ", err);
        });
        
      };


      const deleteArticles = async () => {
      
        axios
          .delete(`http://localhost:5000/articlesMySql/${id}`,Articles[0])
          .then(async (response) => {
            const newArray = [...Articles];
            newArray.shift(newArray);
           SetArticles(newArray);
           console.log("Success delete article")
          })
          .catch((err) => {
            console.log("RESULT: ", err);
          });
      };

      const data = Articles.map((ele,index)=>{
          return <div num={index + 1} key={index} ele={ele} className="rent-post">
              <div>
                <div>
                  <ul key={index.id}>
                    <li>title: {ele.title}</li>
                    <li>description: {ele.description}</li>
                    <li>author: {ele.author}</li>
                  </ul>
                </div>
              <input onChange={(e) => {setUpdateAuthor(e.target.value)}}placeholder='author'></input>
              <button onClick={Update}>Update Articles</button>
              <button type="submit" onClick={deleteArticles}>Delete Article</button>
              </div>
          </div>
          })
      
      
    return (
    <div>
        <div>
      <span>
          <button  onClick={getAllArticlesMySql}>Get All Articles My Sql</button>
          <button onClick={deleteArticles}>delete Articles</button>
          
      </span>
      </div>
      <div className='from'>
          <form onSubmit={handleSubmit}>
          <input name='title' onChange={(e) => {Settitle(e.target.value);}} placeholder='Title'></input>  
          <textarea name='description' onChange={(e) => {Setdescription(e.target.value);}} type='textarea'  placeholder='description'></textarea>  
          <input name='author' onChange={(e) => {Setauthor(e.target.value);}}  placeholder='Author'></input>  
          <button type='submit'>Add New Articles</button>
           </form>
      </div>
      
        <div>
               {data} 
        </div>
    </div>
  );
};
export default Articles;