import React from 'react'

import banner1 from '../../../public/assets/photo/Banner.png'
import banner2 from '../../../public/assets/photo/Banner2.png'


function BannerSlice() {
  return (
    <div className="container height: 535px;">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  src={banner1} class="d-block w-100  " alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner2} class="d-block w-100" alt="..." />
          </div>
          {/* <div class="carousel-item">
            <img src={banner2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner3} class="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button
          class=" slice-btn carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="slice-btn carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="text-black carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden ">Next</span>
        </button>
      </div>
    </div>
  )
}

export default BannerSlice
