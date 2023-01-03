import React, { useState } from 'react'
import { TopsllerItems } from '../TopsllerItems/TopsllerItems'
import "./TopsellerList.scss"

const TopsellerList = () => {
    const [index, setIndext] = useState(0)
  return (
    <div className='top-selling-inner'>
         <div class="selling-title">
            <li><p 
                href=""
                onClick={() =>setIndext(0)}
                class={`${index === 0 ? "active" :null}`}
                >Top sellers</p>
            </li>
            <li><p 
                href=""
                onClick={() =>setIndext(1)}
                class={`${index === 1 ? "active" :null}`}
                >Featured</p>
            </li>
            <li><p 
                href=""
                onClick={() =>setIndext(2)}
                class={`${index === 2 ? "active" :null}`}
                >Most reviewr</p></li>
        </div>
        <div className='selling-products'>
            <div className='top-sellings' hidden={index !== 0}>
                <div className='hidden'>
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product1.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product1.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product1.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product1.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product1.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product1.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product1.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product1.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                </div>
            </div>
            <div className='featured' hidden={index !== 1}>
                <div className='hidden'>
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product2.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product2.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product2.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product2.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product2.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product2.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product2.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product2.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                </div>
            </div>
            <div className='most' hidden={index !== 2}>
                <div className='hidden'>
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product3.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product3.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product3.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product3.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product3.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product3.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product3.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                <TopsllerItems 
                    img={require("./../../../assets/img/product/product3.jpg")}
                    title={"Body Solid GCEC340"}
                    price={"$214"}
                />
                </div>
            </div>

        </div>
    </div>
  )
}

export default TopsellerList