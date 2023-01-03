import "./Slick.scss";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slick(props) {
  const settings = {
      arrows : false,
      dots: true
  };
  return (
    <div className="slick">
      <h2>See What They Said About Us</h2>
      <div className="slick-inner">
        <Slider {...settings}>
          <div className="slick-review">
            <img
              src={require("../../assets/img/clientsay/clien1.png")}
              width="82px"
              height="82px"
              alt=""
            />
            <p>
              “Good services. I bought a bicycle with a wrong but they accepted
              free return for me and exchange a new product for me.
            </p>
            <h4>LINA</h4>
            <span>Happy client</span>
          </div>

          <div className="slick-review">
            <img
              src={require("../../assets/img/clientsay/clien1.png")}
              width="82px"
              height="82px"
              alt=""
            />
            <p>
              “Good services. I bought a bicycle with a wrong but they accepted
              free return for me and exchange a new product for me.
            </p>
            <h4>LINA</h4>
            <span>Happy client</span>
          </div>

          <div className="slick-review">
            <img
              src={require("../../assets/img/clientsay/clien1.png")}
              width="82px"
              height="82px"
              alt=""
            />
            <p>
              “Good services. I bought a bicycle with a wrong but they accepted
              free return for me and exchange a new product for me.
            </p>
            <h4>LINA</h4>
            <span>Happy client</span>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Slick;
