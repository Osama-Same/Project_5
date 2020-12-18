
import axios from "axios";
import React, { useState, useEffect } from "react";
const ID =(props)=>{
    const [articales, setArticales] = useState([]);
    const [id,setid] = useState(0);
    const DataID = () => {
        axios
          .get(`http://localhost:5000/DataArticles/${id}`)
          .then((response) => {
            console.log("DATA: ", response.data);  
            setArticales(response.data)
          
          })
          .catch((err) => {
            console.log("ERR: ", err);
          });
      };
    
        return (
            <div>
                <p>{articales}</p>
            </div>
        )
    }


export default ID
