
import React, { useState, useEffect } from 'react';
import  layout from '../../../public/assets/photo/layout.svg';
import  regular from '../../../public/assets/photo/regular.svg';
import  home from '../../../public/assets/photo/home.svg';
import  right from '../../../public/assets/photo/right.svg';
import  liked from '../../../public/assets/photo/liked.svg';
import axios from 'axios';
import './filter.css';





export const Filter = () => {
    const [data, setData] = useState({ product: [], News: [] });





    const [selected, setSelected] = useState(null);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelected(value);
    }

    const [filter, setFilter] = useState('all');
    const items = [
        { id: 1, type: 'fruit', name: 'Apple' },
        { id: 2, type: 'vegetable', name: 'Carrot' },
        { id: 3, type: 'fruit', name: 'Banana' },
        { id: 4, type: 'vegetable', name: 'Lettuce' }
    ];

    const filteredItems = filter === 'all' ? items : items.filter(item => item.type === filter);


    return (
        <div className="filter">
        <div className='container'>
            <h3>
                E’lonlarlarni filtrlash
            </h3>
            <input type="text" className='' />
            <br />
            <p  className='filter_text'>narx</p>
            <input type="text"  className='dona'/>
            <br />
            <br />
            <input type="number" className='dona' />
            <div className="checkbox-container"><br />
                <h3>Narxi bo’yicha saralash</h3>
                
                <label  >
                    <input type="checkbox"
                        name="option"
                        value="1"
                        checked={selected === "1"}
                        onChange={handleCheckboxChange} />Hammasi
                </label>
                <label >
                    <input type="checkbox"
                        name="option"
                        value="2"
                        checked={selected === "2"}
                        onChange={handleCheckboxChange} />Birinchi arzon
                </label>
                <label>
                    <input type="checkbox"
                        name="option"
                        value="3"
                        checked={selected === "3"}
                        onChange={handleCheckboxChange} />Birinchi qimmatidan
                </label>
         
                
                <h3>Kategoriya</h3>
                
                <label  >
                    <input type="checkbox"
                        name="option"
                        value="4"
                        checked={selected === "4"}
                        onChange={handleCheckboxChange} />Barchasi
                </label>
                <label >
                    <input type="checkbox"
                        name="option"
                        value="5"
                        checked={selected === "5"}
                        onChange={handleCheckboxChange} /> Oila uchun
                </label>
                <label>
                    <input type="checkbox"
                        name="option"
                        value="6"
                        checked={selected === "6"}
                        onChange={handleCheckboxChange} />Talabalar
                </label>
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



        </div>
    )
}
export default Filter;