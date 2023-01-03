import React, {useState} from 'react'
import './Header.scss'

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
      <div className="header">
            <div
            className={` ${open === true ? "cover-active cover" : ""}`}
            onClick={() => setOpen(!open)}
            ></div>
                <div className="container">
                    <div className="header-inner">
                        <div className="logo">
                          <img src={require("../../assets/img/header/Logo.png")}></img>
                        </div>
                        <div
                            className={`nav-icon ${open === true ? "active" : ""}  `}
                            onClick={() => setOpen(!open)}
                            >
                           <i class="fa-solid fa-bars"></i>
                        </div>
                        <ul className={`navbar nav-icon ${open === true ? "active" : ""}`}>
                            <div className="nav-title">Navigation</div>
                            <li><a href="#" className="menu-link">Home</a>
                            </li>
                            <li><a href="#" className="menu-link">Pages</a>
                            </li>
                            <li><a href="#" className="menu-link">Classes</a>
                            </li>
                            <li><a href="#" className="menu-link">Portfolio</a>
                            </li>
                            <li><a href="#" className="menu-link">Blog</a>
                            </li>
                            <li><a href="#" className="menu-link">Contacts</a>
                            </li>
                        </ul>
                        <div className="menu">
                            <div className="search">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <span>|</span>
                            <div className="cart">
                                <i className="fa-solid fa-basket-shopping"></i>
                            </div> 
                            <span>|</span>
                            <div className="user">
                                <i className="fa-solid fa-user"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
