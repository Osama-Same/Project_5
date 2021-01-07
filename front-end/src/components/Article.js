import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Article = () => {
    let { id } = useParams();
    const [articales, setarticle] = useState('');

    useEffect(() => {
        getAllArticleById(id)
        console.log(id);
    }, []);

    const getAllArticleById = (id) => {
        axios.post(`http://localhost:5000/DataArticles/`, { id })
            .then((res) => {
                setarticle(res.data)
                console.log(res.data);
            })
    }

    return(
        <div className="container">
            { articales &&
                <div className="col-md-12" >
                    <div className="card" style={{ width: '18rem' }} >
                        <div className="card-body">
                            <p>{articales[0].title}</p>
                            <h6 className="card-subtitle mb-2 text-muted">{articales[0].author}</h6>
                            <p className="card-text">{articales[0].description}</p>

                        </div>
                    </div>
                </div>



            }
            <div className="navbar-nav ml-auto">
                <Link to="/home">Home</Link>
            </div>
        </div>

    )

    

}

export default Article
