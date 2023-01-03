import React from 'react'
import './Brand.scss'

const Brand = () => {
  return (
    <div class="brands">
        <div class="container">
            <div class="brands-inner">
                <div class="brand">
                    <img src={require("./../../assets/img/brand/brand1.png")} alt=""></img>
                </div>
                <div class="brand">
                    <img src={require("./../../assets/img/brand/brand2.png")} alt=""></img>
                </div>
                <div class="brand">
                    <img src={require("./../../assets/img/brand/brand3.png")} alt=""></img>
                </div>
                <div class="brand">
                    <img src={require("./../../assets/img/brand/brand4.png")} alt=""></img>
                </div>
                <div class="brand">
                    <img src={require("./../../assets/img/brand/brand5.png")} alt=""></img>
                </div>
                <div class="brand">
                    <img src={require("./../../assets/img/brand/brand6.png")} alt=""></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brand