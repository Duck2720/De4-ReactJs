import React from 'react'
import './Slider.scss'

function Slider() {
  return (
    <div class="slider">
        <div class="slider-item">
            <div class="backgound-img"></div>
                <img src={require("./../../assets/img/slider/slider3.pg.png")} alt=""></img>
                <div class="slider-content container">
                    <div class="slider-title">Dumbbells Shop</div>
                    <span>Best body fitness</span>
                    <div class="slider-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</div>
                    <a href="" class="slider-btn">Shop Now</a>
                </div>
        </div>
    </div>
  )
}

export default Slider