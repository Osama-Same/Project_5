import React, { useState} from "react";
import axios from "axios";
export default function ArticleItem(props) {
  
    const [author,setauthor]=useState("")
  const UpdateThisArticle = (id) => {
    axios
      .put(`http://localhost:5000/articlesMySqlUpdata/${id}`,{
        author: author})
      .then((response) => {
        console.log("DATA: ", response.data);  
        if (response.data.status === 200) {
          props.getAllArticles();
        }
      
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
 
  
  
  return (
    
    <div >
        <input
          type="text"
          name="text"
          placeholder="UpdataAuthor...."
          className="form-control"
          value={author}
          onChange={(e) => {
            setauthor(e.target.value)
           }}
          //onChange={(e) => {SetnewAuthor(e.target.value);}}
        ></input>
        <button
          className="btn btn-primary"
          value={author}
          onClick={UpdateThisArticle}
        >
          {" "}
          Updata
        </button>
        
      </div>
    
    
  );
}