import React from 'react';
import styled from 'styled-components';
import '../assets/JS/java.js';
import '../assets/JS/suggestions.js';
import '../assets/CSS/forum.css';

import pic1 from '../assets/images/LogoMakr-6hmZdM.png';
import pic4 from '../assets/images/img4.jpg';
import pic7 from '../assets/images/img7.jpg';
import pic8 from '../assets/images/1.jpg';
function Forum() {

  return (
  <>
    <div>

    <header id="hhh">
    <a href="homepage.html"><img src={pic1} class="logo"></img></a>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="Forum " class="active"> Forum</a></li>
        <li><a href="#">projects</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Join</a></li>
    </ul>
</header>

<div class="banner">
    <div class="content">
        <h1>FIND YOUR LABORATORY </h1>
        <h2>we will help you to find your laboratory easily scroll down to choose option you need</h2>
        <div class = "wrapper">
            <div class = "search-input">
                <form action="">
                    <input type="text" placeholder="Type to search for laboratory name"></input>
                    <div class="autocom-box">

                    </div>
                    <div class="icon"><i class="fa fa-search"></i> </div>
                </form>
            </div>
        </div>
    </div>
</div>


<div class="container" id="section2">
    <h1>CHOOSE OPTION</h1>
    <div class="photo-gallery">
        <div class="pic">
            <img src={pic4}></img>
            <div class="overlay">Click on "Add" button if you want to add a new laboratory or PC</div>
            <a class="option" href="Add"><button> Add Laboratory </button></a>
        </div>

        <div class="pic">
            <img src={pic7}></img>
            <div class="overlay">If you want to change laboratory information (laboratory name , id ,..etc). </div>
            <a class="option" href="Update info.html"><button > Update Information </button></a>

        </div>
        <div class="pic">
            <img src={pic8}></img>
            <div class="overlay"> If you are having any problem with an existing laboratory click here to report the problem, so we can help you as fast as we can. </div>
            <a class="option" href="Report Problem-1.html"><button > Report Problem </button></a>
        </div>
    </div>
</div>


<div class="containerr" id="section3">
    <div class="footer">
        <div class="footer-heading footer1">
            <h1>About us</h1>
            <a href="#">Blog</a>
            <a href="#">Demo</a>
            <a href="#">Customers</a>
            <a href="#">Investors</a>
            <a href="#">Terms of Services</a>
        </div>
        <div class="footer-heading footer1">
            <h1>Contact Us</h1>
            <a href="#">Jobs</a>
            <a href="#">Suppports</a>
            <a href="#">Contact</a>
            <a href="#">Sponsorships</a>
        </div>
        <div class="footer-heading footer1">
            <h1>Social Media</h1>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">twitter</a>
            <a href="#">linkedin</a>
        </div>
    </div>
    <div class="textt">
        Copyright &copy; All rights reserved, 2022 I-Tech
    </div>
</div>

<script src="../assets/JS/java.js"></script>
<script src="../assets/JS/suggestions.js"></script>
    </div>
  </>
  );
}







export default Forum;




