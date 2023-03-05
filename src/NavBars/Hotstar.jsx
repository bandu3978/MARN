import React from "react";
import STYLE from "./hotstar.module.css"


const Hotstar=()=>
{
  return(
 <div className={STYLE.main}>
  <div className={STYLE.logo}>
    
  DiSNEy+ hotstar
   <ul>
    
    <li><a href="">TV</a></li> 
    <li><a href="">Movie</a></li> 
    <li><a href="">Sports</a></li>
    <li><a href="">Disney+</a></li>
    <li><a href="">KiDS</a></li>
</ul>
  </div>
  <div className={STYLE.menu}>
    <ul>
      <li><input type="search" placeholder="Search" /></li>
      <li><button>SUBSCRIBE</button></li>
      <li><button>Login</button></li>
      </ul>
  </div>
 </div>


  )
}
export default Hotstar
