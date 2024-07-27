import React from 'react'

import banner1 from '../../../public/assets/photo/Banner.png'
import banner2 from '../../../public/assets/photo/Banner2.png'


function BannerSlice() {
  return (
    <div className="container height: 535px;">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100  " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
          {/* <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button
          className=" slice-btn carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="slice-btn carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="text-black carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden ">Next</span>
        </button>
      </div>
    </div>
  )
}

export default BannerSlice
