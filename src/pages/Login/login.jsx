import React, { useState, useEffect } from 'react';
import layout from '../../../public/assets/photo/layout.svg';
import regular from '../../../public/assets/photo/regular.svg';
import home from '../../../public/assets/photo/home.svg';
import right from '../../../public/assets/photo/right.svg';
import liked from '../../../public/assets/photo/liked.svg';
import '../Main/Main.css';
import axios from 'axios';
import BannerSlice from '../Main/BannerSlice';



export const Login = () => {
    const [data, setData] = useState({ product: [], News: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likedProducts, setLikedProducts] = useState({});


    useEffect(() => {
        axios.get('http://localhost:3000/product')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleLikeClick = (id) => {
        setLikedProducts(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="container">

            <BannerSlice />
            <div className="Products">
                <h1 className="text-left">Eng so'nggi e'lonlar</h1>
                <button className="text-right">Barchasi<img src={right} alt="" /></button>
            </div>
            <div className="cards">
                {data.map(product => (
                    <div key={product.id} className="card">
                        <div className="card-header">
                            <span className="badge badge-warning">Top e'lon</span>
                            <span className="badge badge-success">Sotiladi</span>
                            <span className="badge">  
                              <img src={liked} alt="" />
                            <button
                                className={`like-button ${likedProducts[product.id] ? 'liked' : ''}`}
                                onClick={() => handleLikeClick(product.id)}
                            >

                            </button></span>

                        </div>
                        <img className='img' src={product.img} alt={product.title} />


                        <div className="content">
                            <p> {product.title}</p>
                            <h5>{product.description}</h5>
                            <p className='mr-3'><img src={layout} alt="" />{product.rooms} xona <img src={regular} alt="" /> {product.m}<img src={home} alt="" />4-xona</p>
                            <p className="price mr-3">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
