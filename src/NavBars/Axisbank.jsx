import React from "react";
import STYLE from "./axisbank.module.css"
const Axisbank=()=>{
  return(
    <div className={STYLE.main}>
      <div  className={STYLE.axislogo} ><p  >AXIS BANK</p></div>
    <div className={STYLE.logo}>
      
    
     <ul>
      
      <li><a href="">Personal</a></li> 
      <li><a href="">Business</a></li> 
      <li><a href="">Priority</a></li>
      <li><a href="">Burgundy</a></li>
      <li><a href="">NRI</a></li>
      <li><a href="">About Us</a></li>
      <li><a href="">Support</a></li>
      <li><a href="">Dil se open</a></li>
  </ul>
    </div>
    <div className={STYLE.menu}>
      <ul>
        <li><input type="search" placeholder="Search" /></li>
        
        <li><button>Login</button></li>
        </ul>
    </div>
   </div>
  )
}
export default Axisbank;