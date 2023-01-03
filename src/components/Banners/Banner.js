import React from 'react'
import './Banner.scss'

const Banner = () => {
  return (
    <div class="banner">
    <div class="container">
        <div class="banner-inner">
            <div class="banner-left">
                <img src={require("./../../assets/img/category/dumbbel.png")} alt=""></img>
                <div class="banner-left-content">
                    <img src={require("./../../assets/img/category/dumbbel-icon.png")} alt=""></img>
                    <div class="banner-title">Dumbbells</div>
                    <div class="banner-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, deserunt.</div>
                </div>
            </div>
            <div class="banner-center">
                <div class="banner-center-content">
                    <img src={require("./../../assets/img/category/strength-icon.png")} alt=""></img>
                    <div class="banner-title">Strength</div>
                    <div class="banner-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, deserunt.</div>
                </div>
                <img src={require("./../../assets/img/category/strength.png")} alt=""></img>

            </div>
            <div class="banner-left">
                <img src={require("./../../assets/img/category/power.png")} alt=""></img>
                <div class="banner-left-content">
                    <img src={require("./../../assets/img/category/power-icon.png")} alt=""></img>
                    <div class="banner-title">Power Rack & Cages</div>
                    <div class="banner-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, deserunt.</div>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Banner