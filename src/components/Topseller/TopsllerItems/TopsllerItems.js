import React from 'react'
import './TopsllerItems.scss'

export const TopsllerItems = (props) => {
    const {img, title, price} = props
  return (
    <div class="selling-items">
            <div class="item">
                <img src={img} alt=""></img>
                <div class="selling-icons">
                    <i class="fa-solid fa-basket-shopping shopping"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
            </div>
            <div class="item-title">{title}</div>
            <div class="item-price">{price}</div>
        </div>
  )
}
