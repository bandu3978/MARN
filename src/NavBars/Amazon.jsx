import React from "react";
import STYLE from "./amazon.module.css"
const Amazon=()=>{
 return(
  <div className={STYLE.main}>
   
  <div className={STYLE.logo}>
   <ul>
    <li className={STYLE.amazon}>amazon.in</li>
    <li><a  href="">Amazon TV</a></li> 
    <li><a href="">Best Sellers</a></li> 
    <li><a href="">Mobile</a></li>
    <li><a href="">Service</a></li>
    <li><a href="">Todays Deals</a></li>
    <li><a href="">Eletronics</a></li>
    <li><a href="">Amazon Pay</a></li>
    <li><a href="">Fashion</a></li>
</ul>
  </div>
  <div className={STYLE.menu}>
    <p>Shopping made easy|Download the app</p>
  </div>
 </div>


 )
}
export default Amazon