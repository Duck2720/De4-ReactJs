import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div class="footer">
        <div class="container-fluid">
            <div class="footer-inner">
                <div class="container">
                    <div class="footer-top">
                        <img src="./img/header/Logo.png" alt=""></img>
                        <div class="footer-desciption">Lorem, ipsum doloradipisicing elit. Quis aliquam eligendi distinctio numquam ab. Autem, aperiam placeat eos numquam maiores perspiciatis quisquam quasi consectetur praesentium commodi molestiae? Voluptates, animi sint.</div>
                        <div class="sumary">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-google"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <div class="footer-contact">
                        <div class="footer-item">
                            <div class="footer-item-title">
                                Contacts Us
                            </div>
                            <div class="footer-item-adress">
                                <i class="fa-solid fa-location-dot"></i>
                                <span>200 Licon Ave, Salinas, CA 93901</span>
                            </div>
                            <div class="footer-item-phone">
                                <i class="fa-solid fa-phone"></i>
                                <span>0987603191</span>
                            </div>
                            <div class="footer-item-mail">
                                <i class="fa-solid fa-envelope"></i>
                                <span>ngtrungduc.work@gmail.com</span>
                            </div>
                            <div class="footer-item-time">
                                <i class="fa-solid fa-clock"></i>
                                <span>9:00 - 20:00 All day</span>
                            </div>
                        </div>
                        <div class="footer-item">
                            <div class="footer-item-title">
                                My Account
                            </div>
                            <div class="footer-item-adress">
                                
                                <span>My account</span>
                            </div>
                            <div class="footer-item-phone">
                                
                                <span>Check out</span>
                            </div>
                            <div class="footer-item-mail">
                                
                                <span>Register</span>
                            </div>
                            <div class="footer-item-time">
                                <span>login</span>
                            </div>
                        </div>
                        <div class="footer-item">
                            <div class="footer-item-title">
                                Infomation
                            </div>
                            <div class="footer-item-adress">
                                <span>About us</span>
                            </div>
                            <div class="footer-item-phone">
                                <span>Contact us</span>
                            </div>
                            <div class="footer-item-mail">
                                <span>Tern of user</span>
                            </div>
                            <div class="footer-item-time">
                                <span>Prvacy policy</span>
                            </div>
                        </div>
                        <div class="footer-item">
                            <div class="footer-item-title">
                                Quick link
                            </div>
                            <div class="footer-item-adress">
                                <span>New user</span>
                            </div>
                            <div class="footer-item-phone">
                                <span>Help center</span>
                            </div>
                            <div class="footer-item-mail">
                                <span>Report spam</span>
                            </div>
                            <div class="footer-item-time">
                                <span>FAQs</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span>Copyright © 2019 Gymax - Design by ArrowHitech - All Rights Reserved</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer