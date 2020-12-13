import React, { useState } from "react";
import axios from "axios";

export default function NewItem(props) {
  const [title, setNewTitle] = useState("");
  const [img_url, SetImg] = useState("");
  const [description, setNewDesc] = useState("");
  const [author, setNewAuthor] = useState("");
 

  const addNewArticle = () => {
    axios
      .post(`http://localhost:5000/articles/createMySql`, {
        title: title,
        img_url: img_url,
        description: description,
        author: author,
      })
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        if (response.status === 200) {
          props.getAllArticles();
        }
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="NewItem">
       <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Title"
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <input
          type="file"
          id="file"
          onChange={(e) => {
            SetImg(e.target.value);
          }}
        ></input>
         <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          name="Description"
          placeholder="Description"
          onChange={(e) => {
            setNewDesc(e.target.value);
          }}
        />
        <input
          type="text"
          name="Author"
          className="form-controcll mb-2 mr-sm-2"
          placeholder="Author"
          onChange={(e) => {
            setNewAuthor(e.target.value);
          }}
          />
          <button
          type="submit"
          className="btn btn-danger mb-2"
          onClick={addNewArticle}
        >
          Add
        </button>
    </div>
  );
}
