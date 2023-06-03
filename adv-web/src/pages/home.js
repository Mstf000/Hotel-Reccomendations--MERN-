import React from 'react';
import '../App.css';
import styled from 'styled-components';


import '../assets/CSS/home.css';
import '../assets/JS/home-java.js';

import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";
import pic5 from "../assets/images/pic5.jpg";
import pic6 from "../assets/images/pic6.jpg";
import logo from "../assets/images/LogoMakr-6hmZdM.png";
import mm from "../assets/images/mm.jpg"
const bannerStyle = {
  backgroundImage: "linear-gradient(rgb(1, 9, 33), rgba(21, 4, 88, 0.1)), url('mm.jpg')",
};

function Home() {
  return (
    
<div>
      <header>
        <a href="/"><img src={logo} class="logo"></img></a>
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="Forum">Forum</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Join</a></li>
        </ul>
      </header>
      
      
      <div className="banner" style={bannerStyle}>
        <div className="content">
          <h1>Computer Labs<br />Community</h1>
          <div>
            <a href="#section2"><button type="button"><span></span>View Gallery</button></a>
          </div>
        </div>
      </div>
      <div className="container" id="section2">
        <h1>OUR PHOTO GALLERY</h1>
        <div className="photo-gallery">
          <div className="pic">
            <img src={pic1} alt="pic1" />
            <div className="overlay"> Lorem Lab </div>
          </div>
          <div className="pic">
            <img src={pic2} alt="pic2" />
            <div className="overlay"> Lorem Lab </div>
          </div>
          <div className="pic">
            <img src={pic3} alt="pic3" />
            <div className="overlay"> Lorem Lab </div>
          </div>
          <div className="pic">
            <img src={pic4} alt="pic4" />
            <div className="overlay"> Lorem Lab </div>
          </div>
          <div className="pic">
            <img src={pic5} alt="pic5" />
            <div className="overlay"> Lorem Lab </div>
          </div>
          <div className="pic">
            <img src={pic6} alt="pic6" />
            <div className="overlay"> Lorem Lab </div>
          </div>
        </div>
      </div>
      <div className="sub">
        <div className="searchBar">
          <h1>Subscribe to our Newsletter :</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="email" placeholder="Enter your email" required />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="containerr" id="section3">
        <div className="footer">
          <div className="footer-heading footer1">
            <h1>About us</h1>
            <a href="#">Blog</a>
            <a href="#">Demo</a>
            <a href="#">Customers</a>
            <a href="#">Investors</a>
            <a href="#">Terms of Services</a>
          </div>
          <div className="footer-heading footer1">
            <h1>Contact Us</h1>
            <a href="#">Jobs</a>
            <a href="#">Supports</a>
            <a href="#">Contact</a>
            <a href="#">Sponsorships</a>
          </div>
          <div className="footer-heading footer1">
            <h1>Social Media</h1>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="textt">
          Copyright &copy; All rights reserved, 2022 I-Tech
        </div>
      </div>
      <script src="../assets/JS/home-java.js"></script>
    </div>
    
    
  );
}

export default Home;




// import '../App.css';
// import React from 'react';
// import styled from 'styled-components';



// function App() {

  
//   return (
//     <Wrapper>
//     <div className="navbar">
//       <div className="container">
//         <ul>
//           <li>Compare</li>
//           <li>Wishlist</li>
//           <li>Sign in</li>
//           <li>Language</li>
//         </ul>
//       </div>
//     </div>

//     <div className="header">
//       <div className="container">
//         <div className="logo">
//         <img src={"images"} alt="logo" />

//         </div>
//         <div className="callus">
//           <span>Call Us:</span> +01015063716
//           <br />
//           mostafaameen@gmail.com
//         </div>
//       </div>
//     </div>

//     <div className="navbar2">
//       <div className="container">
//         <div className="menu">
          
//         </div>
//         <div className="balance">$0.00</div>
//       </div>
//     </div>

//     <div className="ads">
//       {/* <img src="../images/tablet.jpg" alt="img" height="395" /> */}
//       <div>
//    {/* tablet.jpg */}
//     </div>
//     </div>

//     <div className="features">
//       <div className="container">
//         <div className="border">
//           <div className="feat">
//             <h3>Free Shipping</h3>
//             <p>On all orders over $75.00</p>
//           </div>
//           <div className="feat">
//             <h3>Free Returns</h3>
//             <p>Returns are free within 9 days</p>
//           </div>
//           <div className="feat">
//             <h3>100% Payment Secure</h3>
//             <p>Your payment is safe with us.</p>
//           </div>
//           <div className="feat">
//             <h3>Support 24/7</h3>
//             <p>Contact us 24 hours a day</p>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="home_banner">
//       <div className="container">
//         <div className="banners">
//           <div className="banner1">
//             <img src="../images/hb1.jpg" alt="Banner 1" />
//           </div>
//           <div className="banner2">
//             <img src="../images/hb2.jpg" alt="Banner 2" />
//           </div>
//           <div className="banner3">
//             <img src="../images/hb3.jpg" alt="Banner 3" />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="Arrivals">
//       <div className="container">
//         <div className="heading">
//           <ul>
//             <li>Accessories</li>
//             <li>Portable Audio</li>
//             <li>Video Games</li>
//           </ul>
//           <h2>New Arrivals</h2>
//           <p>Valid on select styles online and in-store while supplies last</p>
//         </div>

//         <div className="product">
//           <div className="container">
//             <div className="ads">
//               <div className="ad1">
//                 <img src="../images/ad1_1.jpg" height="255px" width="255px" alt="Ad 1" />
//                 <h3>Water Resistant Insulated</h3>
//                 <div className="star">
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star"></span>
//                   <span className="fa fa-star"></span>
//                 </div>
//                 <p>12.90$</p>
//               </div>
//               <div className="ad2">
//                 <img src="../images/ad2.jpg" height="255px" width="255px" alt="Ad 2" />
//                 <h3>Trans-Weight Hooded Shell</h3>
//                 <div className="star">
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star"></span>
//                   <span className="fa fa-star"></span>
//                 </div>
//                 <p>11.40$</p>
//               </div>
//               <div className="ad3">
//                 <img src="../images/ad3.jpg" height="255px" width="255px" alt="Ad 3" />
//                 <h3>Originals Kaval</h3>
//                 <div className="star">
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star"></span>
//                   <span className="fa fa-star"></span>
//                 </div>
//                 <p>18.20$</p>
//               </div>
//               <div className="ad4">
//                 <img src="../images/ad4.jpg" height="255px" width="255px" alt="Ad 4" />
//                 <h3>Fresh Foam Kaymin</h3>
//                 <div className="star">
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star checked"></span>
//                   <span className="fa fa-star"></span>
//                   <span className="fa fa-star"></span>
//                 </div>
//                 <p>19.30$</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="container">
//       <div className="category">
//         <div className="cat1">
//           <img src="../images/cat1.jpg" alt="Category 1" />
//           <h2>team msmtf</h2>
//           <div className="number_product">13 Products</div>
//           Shop Now
//         </div>

//         <div className="cat2">
//           <img src="../images/cat1.jpg" alt="Category 2" />
//           <h4>Smart Electronics</h4>
//           <div className="number_product">13 Products</div>
//           Shop Now
//         </div>
//         <div className="cat3">
//           <img src="../images/cat1.jpg" alt="Category 3" />
//           <h4>Smart Electronics</h4>
//           <div className="number_product">13 Products</div>
//           Shop Now
//         </div>
//         <div className="cat4">
//           <img src="../images/cat1.jpg" alt="Category 4" />
//           <h4>Smart Electronics</h4>
//           <div className="number_product">13 Products</div>
//           Shop Now
//         </div>
//         <div className="cat5">
//           <img src="../images/cat1.jpg" alt="Category 5" />
//           <h4>Smart Electronics</h4>
//           <div className="number_product">13 Products</div>
//           Shop Now
//         </div>
//         <div className="cat6">
//           <img src="../images/cat1.jpg" alt="Category 6" />
//           <h4>Smart Electronics</h4>
//           <div className="number_product">13 Products</div>
//           Shop Now
//         </div>
//       </div>
//     </div>
//   </Wrapper>
//   );
// }



// const Wrapper=styled.div`

// html {
//   line-height: 1.15; /* 1 */
//   -webkit-text-size-adjust: 100%; /* 2 */
// }
// body {
//   margin: 0;
// }

// main {
//  display: block;
// }



// h1 {
//  font-size: 2em;
//  margin: 0.67em 0;
// }


// hr {
//  box-sizing: content-box; /* 1 */
//  height: 0; /* 1 */
//  overflow: visible; /* 2 */
// }


// pre {
//  font-family: monospace, monospace; /* 1 */
//  font-size: 1em; /* 2 */
// }

// a {
//  background-color: transparent;
// }

// abbr[title] {
//  border-bottom: none; /* 1 */
//  text-decoration: underline; /* 2 */
//  text-decoration: underline dotted; /* 2 */
// }


// b,
// strong {
//  font-weight: bolder;
// }

// code,
// kbd,
// samp {
//  font-family: monospace, monospace; /* 1 */
//  font-size: 1em; /* 2 */
// }

// small {
//  font-size: 80%;
// }

// sub,
// sup {
//  font-size: 75%;
//  line-height: 0;
//  position: relative;
//  vertical-align: baseline;
// }

// sub {
//  bottom: -0.25em;
// }

// sup {
//  top: -0.5em;
// }
// img {
//   border-style: none;
// }

// button,
// input,
// optgroup,
// select,
// textarea {
//   font-family: inherit; /* 1 */
//   font-size: 100%; /* 1 */
//   line-height: 1.15; /* 1 */
//   margin: 0; /* 2 */
// }
// button,
// input { /* 1 */
//   overflow: visible;
// }








// button,
// select { /* 1 */
//   text-transform: none;
// }

// button,
// [type="button"],
// [type="reset"],
// [type="submit"] {
//   -webkit-appearance: button;
// }

// /**
//  * Remove the inner border and padding in Firefox.
//  */

// button::-moz-focus-inner,
// [type="button"]::-moz-focus-inner,
// [type="reset"]::-moz-focus-inner,
// [type="submit"]::-moz-focus-inner {
//   border-style: none;
//   padding: 0;
// }

// /**
//  * Restore the focus styles unset by the previous rule.
//  */

// button:-moz-focusring,
// [type="button"]:-moz-focusring,
// [type="reset"]:-moz-focusring,
// [type="submit"]:-moz-focusring {
//   outline: 1px dotted ButtonText;
// }

// /**
//  * Correct the padding in Firefox.
//  */

// fieldset {
//   padding: 0.35em 0.75em 0.625em;
// }






// legend {
//   box-sizing: border-box; /* 1 */
//   color: inherit; /* 2 */
//   display: table; /* 1 */
//   max-width: 100%; /* 1 */
//   padding: 0; /* 3 */
//   white-space: normal; /* 1 */
// }


// progress {
//   vertical-align: baseline;
// }


// textarea {
//   overflow: auto;
// }

// [type="checkbox"],
// [type="radio"] {
//   box-sizing: border-box; /* 1 */
//   padding: 0; /* 2 */
// }

// /**
//  * Correct the cursor style of increment and decrement buttons in Chrome.
//  */

// [type="number"]::-webkit-inner-spin-button,
// [type="number"]::-webkit-outer-spin-button {
//   height: auto;
// }

// /**
//  * 1. Correct the odd appearance in Chrome and Safari.
//  * 2. Correct the outline style in Safari.
//  */

// [type="search"] {
//   -webkit-appearance: textfield; /* 1 */
//   outline-offset: -2px; /* 2 */
// }

// /**
//  * Remove the inner padding in Chrome and Safari on macOS.
//  */

// [type="search"]::-webkit-search-decoration {
//   -webkit-appearance: none;
// }

// ::-webkit-file-upload-button {
//   -webkit-appearance: button; /* 1 */
//   font: inherit; /* 2 */
// }

// /* Interactive
//    ========================================================================== */

// /*
//  * Add the correct display in Edge, IE 10+, and Firefox.
//  */

// details {
//   display: block;
// }

// /*
//  * Add the correct display in all browsers.
//  */

// summary {
//   display: list-item;
// }

// /* Misc
//    ========================================================================== */

// /**
//  * Add the correct display in IE 10+.
//  */

// template {
//   display: none;
// }

// /**
//  * Add the correct display in IE 10.
//  */

// [hidden] {
//   display: none;
// }







// body
// {
//     font-size: 14px;
//     font-family: "Open Sans",sans-serif;
// }
// .container
// {
//     width: 1110px;
//     margin: auto;
//     font-size: 14px;
//     font-family: "Open Sans",sans-serif;
// }

// .navbar
// {
//     background-color: #f7f7f7;
//     color: #7A7A7A;
//     font-size: 14px;
//     font-family: "Open Sans",sans-serif;
//     height: 43px;
//     overflow: hidden;
// }

// .navbar ul
// {
//     list-style: none;
//     padding-left: 0px;
    
//     overflow: hidden;
//     float: right;
// }

// .navbar ul li
// {
//     float: left;
//     padding: 10px;
//     padding-top: 0px;
//     border-right :1px solid;
    
// }

// /* starr header */
// .header
// {
//     margin-top: 30px;
//     overflow: hidden;
// }

// .header .logo
// {
//     float:left;
//     display: block;
// }



// .header .callus
// {
//     float:right;
//     display: block;
// }

// .navbar2
// {
//     margin-top: 30px;
//     background-color: #0090f0 ;
//     font-size: 14px;
//     font-family: "Open Sans",sans-serif;
//     font-weight: bold;
//     color: white;
//     height: 55px;
//     z-index: 9999999999;
//     position: sticky;
//     top: 0;
// }

// .navbar2 .menu
// {
//     display: inline-block;
// }

// .navbar2 .balance
// {
//     float: right;
//     padding-top: 20px;
// }

// .navbar2 .options > ul
// {
//     list-style: none;
//     padding-left: 0px;
    
//     overflow: hidden;
//     float: left;
// }
// .products-area
// {
//     outline: none;
//     margin-right: 50px;
//     text-align: center;

// }
// .products-area .ad{
//       /*float: left;*/
//     padding: 5px;
//     display: inline-block;
// }
// .navbar2 .options >ul > li
// {
//     float: left;
//     padding: 10px;
//     padding-right: 43px;
//     padding-top: 5px;
//     padding-top: 1px;
    
// }

// .ads
// {
//     margin: auto;
//     margin-top: 0px;  
// }

// .features
// {
//     overflow: hidden;
//     margin-top:60px;
//     margin-bottom: 60px;
//     font-size: 14px;
//     font-family: "Open Sans",sans-serif;
// }

// .features .border
// {
    
//     border: 1px solid #e3e3e3;
//     border-radius: .5rem;
//     padding: 1.3rem 2rem;
//     width: 1050px;
// }
// .features .feat
// {
//     display:inline-block;
//     padding-right: 55px;
// }


// .home_banner
// {
//     margin-right: 15px;
//     margin-left: 15px;
//     margin-bottom: 64px;
// }

// .banner1
// {
//     float: left;
//     padding-right: 30px;
// }

// .banner2
// {
//     float: left;
//     padding-right: 30px;
// }

// .Arrivals .heading
// {
//     border-bottom: 1px solid #e3e3e3;
//     margin-bottom: 3rem;
    
// }
// .Arrivals ul
// {
//     list-style: none;
//     padding-left: 0px;
//     padding-top: 10px;
//     overflow: hidden;
//     float: right;
// }

// .Arrivals ul li
// {
//     float: left;
//     padding: 10px;
//     padding-top: 0px;
    
// }

// .product .ads
// {
//     text-align: center;
//     font-weight: 400;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     margin-bottom: 62px;
// }

// .product .ad1
// {
//     float: left;
//     padding-right: 30px;
// }

// .product .ad2
// {
//     float: left;
//     padding-right: 30px;
// }

// .product .ad3
// {
//     float: left;
//     padding-right: 30px;
// }

// .checked
// {
//     color: #fdd835;
// }

// /*
// .category
// {
//     text-align: center;
//     background: #f5f5f5;
//     height: 186px;
//     width: 349px;
//     padding: 15px;
//     align-items: center;
//     margin-bottom: 3rem;
//     overflow: hidden;
// }*/

// /* deleted */


// .cat1,.cat2,.cat3,.cat4,.cat5,.cat6
// {
//     height: 187px;
//     width: 339px;
//     background: #f5f5f5;
//     float: left;
//     margin-right: 31px;
//     margin-bottom: 29px;
//     text-align: center;
// }

// .cat1 img,.cat2 img,.cat3 img,.cat4 img,.cat5 img,.cat6 img
// {
//     float: left;
//     /*margin-right: 31px;
//     padding-right: 39px;*/
//     padding-top: 14px;
//     padding-left: 14;
// }

// .cat h4
// {

//     line-height: 1;
// }

// .cat6
// {
//     margin-bottom: 63px;
// }

// .number_product
// {
//     color: #888;
//     font-size: 16px;
// }

// .shop
// {
//     color: #253237;
//     font-size: 16px;  
// }
// .shop:after
// {
//     font-family: "Fontawesome";
//     content: "\f144";
//     display: inline-block;
//     padding: 3px;
//     color:#0090f0;
//     font-size: 13px;
// }
// .shop a
// {
//     text-decoration: none;
// }
// .shop :hover
// {
//     color:#00bfff;
//     padding-left:7px;
//     transition: ease-in-out;
// }
// .round {
//     width: 100%;
//     border-radius: 15px;
   
//     padding: 5px 5px 5px 25px;
//     height: 40px;
//     position: absolute;
//     color:#a4a4a4
//     top: 0;
//     left: 0;
//     z-index: 5;
// }
// .input-group
// {
//     margin: 0 auto;
//     display: block;
//     position:relative;
//     height: 20px;
//     width:40%;
//     box-sizing: inherit
  

// }
// .input-group input.input-ol {
//    border-radius: 50px;
//    border: 2px #0090f0 solid;
//    height: 52px;
//    width:390px;
//    color: #b3b1b1

// }

// button.rounded {
   
//   border-radius: 10px 50px 50px 10px;
//    border: 2px #0090f0 solid;
//   font-size: 25px;
//   width:46px;
//   height: 42px;
// }
// /*.back 
// {
//        margin: 0 auto;
//     display: block;
//     position:relative;
//   border-radius: 50px;
//   background: #4D94DB;
//   padding: 20px;
//   width: 400px;
//   height: 150px;
// }*/
// i.down {
//   border: solid white;
//   border-width: 0 2px 2px 0;
//   display: inline-block;
//   padding: 3px;
//   margin-left: 7px;

// }
// .down {
//   transform: rotate(45deg);
//   -webkit-transform: rotate(45deg);

// }
// .balance{
//     padding-left: 10px;
// }

// .feat img
// {
//  float: left;
// }

// .feat p
// {
//     line-height: 0px ;
//     font-size: 12px;

// }


// .Arrivals2
// {
//     margin-top: 30px;
// }
// .Arrivals2 .heading2
// {
//     border-bottom: 1px solid #e3e3e3;
//     margin-bottom: 2rem;
//     margin-top: 64px;
// }
// .Arrivals2 ul
// {
//     list-style: none;
//     padding-left: 0px;
//     padding-top: 10px;
//     overflow: hidden;
//     float: right;
// }

// .Arrivals2 ul li
// {
//     float: left;
//     padding: 10px;
//     padding-top: 0px;
    
// }

// .product2 .ads2
// {
//     text-align: center;
//     font-weight: 400;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     margin-bottom: 2rem;
//     display: inline-block;
//     border-bottom: 1px solid #e3e3e3;
// }

// .product2 .ad1_2
// {
//     float: left;
//     padding-right: 30px;
// }

// .product2 .ad2_2
// {
//     float: left;
//     padding-right: 30px;
// }

// .product2 .ad3_2
// {
//     float: left;
//     padding-right: 30px;
// }

// .product2 .ad4_2
// {
//     float: left;
//     padding-right: 30px;
// }

// .product2 .ad5_2
// {
//     float: left;
//     padding-right: 30px;
// }

// #ToTop 
// {
//   font-size: 18px;
// 	outline: none;
// 	background-color: #0090f0;
// 	cursor: pointer;
// 	clear: both;
//     position: fixed;
//     bottom: 10%;
//     right: 30px;
//     width: 35px;
// 	border: 0;
//     color: #fff;
//     padding: 9px;
//     line-height: 1em;
//     border-radius: 4px;
//     box-shadow: 0 0 5px 0 rgba(0,0,0,0.47);
//     z-index: 9999999;
//     opacity: 0.8;
//     transition: all 0.5s;
// }

// html {
//   scroll-behavior: smooth;
// }

// .cat h4
// {
//     font-size: 18px;
// }
// .dark-mode {
//   background-color: black;
//   color: white;
// }

// #signn
// {
//     background-color: #0090f0; 
//     font-weight: bold;
//     font:bold;
//     font-size: 24px;
//     padding-top:25px;

//     color:white;
// }
// .signin
// {
//     height:106px;
//     background-color: #0090f0; 
//     overflow: hidden;
//     margin-top:60px;
//     margin-bottom: 60px;
//     font-family: "Open Sans",sans-serif;
// }

// .signin ul li 
// {
//     display: inline-block;
//     list-style: none;
//     color:white;
// }

// .signin .try
// {
//    color: white;
// }

// .signin .try h2
// {
//     color: #fff;
//     font-size: 1.8rem;
//     line-height: 1;
//     font-weight: 500;
//     text-transform: capitalize;
//     margin-bottom: .9rem;
// }

// .location ul li 
// {
//     display:inline-block;
//     list-style: none;
// }
// .location #loc 
// {
//     padding-left:0px;
// }
// .location #phone
// {
//     float:right;
//     padding-right:110px;
// }
// .location #mail 
// {
//     padding-left:10px;
// }
// .location h4
// {
//     color:#253237;
//     font-family:"Open Sans",sans-serif;
//     font-size:16px;
//     margin:10px 0px 10px;
// }
// #contact
// {
//    padding-left: 30px;
// }
// #osupport
// {
//     padding-left:310px;
// }
// #psupport
// {
//     padding-left:375;
// }
// #pin
// {
//     width:30px;
//     height:30px;
// }
// #at
// {
//     width:20px;
//     height:20px;
//     padding-left:110px;
//     font-size: 20px;
     
// }
// #call
// {
//     width:25px;
//     height:25px;
//     padding-left:200px;
     
// }
// .table ul li
// {
//     color:#666666;
//     list-style: none;
//     width:180px;
//     height:40px;   
// }
// .prod
// {
//     width:140px;
//     height:300px;
//     float:left;
//     padding-left:150px;
// }
// .links
// {
//     width:140px;
//     height:300px;
//     float:right;
//     padding-right:80px;
// }
// .myacc
// {
//     width:140px;
//     height:300px;
//     float:right;
//     padding-right:100px;
// }

// .inf
// {
//     float:left;
//     padding-left:50px;
// }
// .table ul
// {
//     padding-left:0px;
// }


// .endl
// {
//     height:64.75px;
//     background-color:#f7f7f7;
// }
// .endl .copyright 
// {
//     height:24px;
//     width:540;
//     color:#888888;
//     font-family:"Open Sans",sans-serif;
//     font-size:14px;
//     float:left;
//     padding-left:100px;
//     padding-top:25px;

// }
// .copy
// {
//     width:14px;
//     height:14px;
//     background-color:#f7f7f7;
//     padding-left:1px;
//     padding-right:1px;
// }
// .endl .payment
// {
//     float:right;
//     padding-top:25px;
//     padding-right:100px;
// }
// .options
// {
//     width:100%;
// }
// .itemss
// {
//     display:inline-block;
//     height:30px;
//     line-height: 30px;
//     color:#fff;
//     text-decoration: none;
// }
// .itemss:hover
// {

// }
// .sub-content
// {
//     position: absolute;
//     margin-top:8px;
   
//     overflow: hidden; 
//     background-color: #333;
//     max-height: 0;
// }
// .sub-content a
// {
//     color:#fff;
//     text-decoration: none;
// }
// .sub-drop ul li a
// {
//     font-size:15px;
//     display: inline-block;
//     padding:0px 0px 0px 0px;
//     color:gray;
// }
// .sub-drop ul li :hover
// {

//     color:#00bfff;
//     padding-left:7px;
// }
// .sub-drop ul li 
// {
//     color:black;
//     display: block;
//     background-color: white;
//     padding-right:37px;

// }
// .sub-drop ul 
// {
//     background-color: white;
//     color:#0090f0;

// }

// .itemss:focus
// {
//     background-color: #0483d7;
//     color:white;
// }
// .options ul li:hover .sub-content
// {
//     max-height: 4000px;
//     transition: max-height .5s ease-in;
//     -webkit-transition: max-height .5s ease-in;
//     -moz-transition: max-height .5s ease-in;
//     color:#0090f0;
// }
// .big-option
// {
//     padding-top:5px;
//     padding-right 30px;
//     float:left;
// }
// .big-option li
// {
//     padding:10px;
//     padding-left:20px;
// }

// .img-size
// {
//     float:left;
//     width:455px;
//     padding:20px;
// }
// .img1{

//   position: relative;
//   font-family: "Open Sans",sans-serif;

// }
// .text-block1 {
//   position: absolute;
//   bottom: 20px;
//   left: 20px;
//   background-color: transparent;
//   color: black;
//   padding-left: 20px;
//   padding-right: 20px;
// }
// .img2{

//   position: relative;
//   font-family: "Open Sans",sans-serif;

// }
// .text-block2 {
//   position: absolute;
//   bottom: 20px;
//   left: 20px;
//   background-color: transparent;
//   color: black;
//   padding-left: 20px;
//   padding-right: 20px;
// }
// .img3{

//   position: relative;
//   font-family: "Open Sans",sans-serif;

// }
// .text-block3 {
//   position: absolute;
//   bottom: 20px;
//   left: 20px;
//   background-color: transparent;
//   color: black;
//   padding-left: 20px;
//   padding-right: 20px;
// }


// .media
// {
//     color: white;
//     font-size: 20px;
// }

// .media ul
// {
//     margin-left: 20px;
// }

// .media li
// {
//     padding-right: 30px;
// }

// .proclick
// {
//     text-decoration: none;
    
// }

// @media(max-width: 767px){
// .container
// {
//      width:100%;
// }

// .header .callus{
// display: inline-block;
// padding:10px;
// }

// .header .logo img{
// padding-left:160px;
// }

// .navbar2
// {
// height: auto;
// }
// .banner1 img
// {
// padding-left:80px;
// width:100%;
// height:60%;
// }

// .banner2 img
// {
// padding-left:20px;
// padding-top:10px;
// width:100%;
// height:60%;
// }

// .banner3 img
// {
// padding-left:20px;
// padding-top:10px;
// width:94%;
// height:60%;
// }
// .features
// {
// width: 100%;
// }

// .header
// {
// height: 140px;
// }

// .input-group input.input-ol
// {
// width:160px;
// }

// .navbar2 .menu 
// {
// font-size:10;
// }

// .navbar2 .options >ul > li 
// {
// padding-right:0px;
// }

// .navbar2 .balance
// {
// padding-right:10px;
// }

// .text-block3 #p3{
// font-size:14 !important;
// }
// .text-block2 #p2{
// font-size:11 !important;
// }
// .text-block1 #p1{
// font-size:9 !important;
// }

// .features .border{
// margin:35px;
// width:400px;
// margin-top:0px;
// }



// .container .heading{
// padding:10px;
// width:95%;
// }

// .container .heading2{
// display:none;
// }

// .signin ul li {
// display:none;
// }
// #at,#phone,#call,#osupport,#psupport{
// display:none;
// }
// .cat1, .cat2, .cat3, .cat4, .cat5, .cat6{

// margin-left:100px;
// }
// .endl{
// width:90%;
// }
// }

// .products-area a
// {
//     text-decoration: none;
//     color: black;
// }

// .product
// {
//     margin-bottom: 60;
// }

// .ads2
// {
//     color:black;
// }

// .shop a
// {
//     color: #253237;
// }


// /*--------------
// Dark Mode
// ----------------*/
// button.darckpage:hover{background:#222f3e;opacity:1}
// button.darckpage{display:block;clear:both;position:fixed;bottom:10%;left:30px;width:35px;background:#2c3e50;border:0;color:#fff;padding:9px;line-height:1em;border-radius:4px;box-shadow:0 0 5px 0 rgba(0,0,0,0.47);z-index:9999999;opacity:0.8;transition:all 0.5s}
// button.darckpage svg.svg-inline--fa.fa-sun.fa-w-16{display:none}
// button.darckpage.lihgte svg{display:none}
// button.darckpage.lihgte svg.svg-inline--fa.fa-sun.fa-w-16{display:block}


// `





// export default App;




