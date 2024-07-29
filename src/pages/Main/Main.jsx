    import React, { useState, useEffect } from 'react';
    import BannerSlice from './BannerSlice';
    import  layout from '../../../public/assets/photo/layout.svg';
    import  regular from '../../../public/assets/photo/regular.svg';
    import  home from '../../../public/assets/photo/home.svg';
    import  right from '../../../public/assets/photo/right.svg';
    import  liked from '../../../public/assets/photo/liked.svg';
    import './Main.css';
    // import axios from 'axios';


    export const Main = () => {
        const [data, setData] = useState({ product: [], News: [] });
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [likedProducts, setLikedProducts] = useState({});


        // useEffect(() => {
        // axios.get('http://localhost:3000/product')
        //     .then(response => {
        //     setData(response.data);
        //     setLoading(false);
        //     })
        //     .catch(error => {
        //     setError(error);
        //     setLoading(false);
        //     });
        // }, []);

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
                    <button className="text-right">Barchasi <link rel="stylesheet" href='./pages/Filter/filter'></link> <img src={right} alt="" /></button>
                </div>
                <div className="cards">
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />
                            

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />
                            

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />
                            

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />
                            

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />
                            

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />
                            

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />
                            

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />
                            

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-warning">Top e'lon</span>
                                <span className="badge badge-success">Sotiladi</span>
                            
                                
                            </div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/302_Walnut_St..jpg/406px-302_Walnut_St..jpg'  alt="" />
                            

                            <div className="content">
                                <p> Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <h5>4-xonali kvartira ijaraga beriladi // Oila uchun</h5>
                                <p className='mr-3'><img src={layout} alt="" />3 xona <img src={regular} alt="" /> 67.m<img src={home} alt="" />4-xona</p>
                                <p className="price mr-3">6 931 836 so'm/oy</p>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
