import React, { useState} from "react";
import axios from "axios";

import {Link ,useHistory} from "react-router-dom";
import ID from './ID'
export default function ArticleItem(props) {
  const {title, img_url, description,id } = props.article;
  const [author,setauthor]=useState("")
  let history = useHistory();
  const deleteThisArticle = () => {
    axios
    //.delete(`http://localhost:5000/articles/${props.oneArticle.id}`)
      .delete(`http://localhost:5000/articlesMySqlDelete/${id}`)
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
  const UpdateThisArticle = () => {
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
  const DataID = () => {
    axios
      .get(`http://localhost:5000/DataArticles/${id}`)
      .then((response) => {
        console.log("DATA: ", response.data);  
        
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  
  
  return (
    
    <div >
      <div className="card">
        <div className="card-header">
          <h4 className="card-title" >
            <Link to="id"> Title: {title}</Link>
          </h4>
        </div>
        <div className="card-img-bottom">
          <picture>
            <img src={img_url} className="img-fluid img-thumbnail" alt="..." />
          </picture>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer"> Author: {author}</div>
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
        <button
          type="submit"
          className="btn btn-danger mb-2"
          onClick={deleteThisArticle}
        >
          Delete
        </button>
      </div>
    </div>
    
  );
}

