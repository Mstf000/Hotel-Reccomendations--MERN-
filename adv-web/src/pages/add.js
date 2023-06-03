import React from 'react';
import styled from 'styled-components';
import '../assets/JS/Add-java.js'
import '../assets/CSS/Add.css'
import pic1 from '../assets/images/LogoMakr-6hmZdM.png'
function dialogue(){
    alert("Laboratory has been added successfully");
}
function Add() {

  return (
  <>
  
<header>
    <a href="homepage.html"><img src={pic1} class="logo"></img></a>
    <ul>
        <li><a href="/" >Home</a></li>
        <li><a href="forum.html" class="active"> Forum</a></li>
        <li><a href="index.html">projects</a></li>
        <li><a href="#section3">About Us</a></li>
        <li><a href="join.html">Join</a></li>
    </ul>
</header>

<div className="transition">
      <div id="add-form" className="add-page">
        <div className="form-box">
          <form id="add" className="input-group-add">
            <p>Add Laboratory</p>
            <input type="text" className="input-field" placeholder="Lab Name" required />
            <input type="text" className="input-field" placeholder="Lab ID" required />
            <input type="text" className="input-field" placeholder="Building Number" required />
            <input type="number" className="input-field" placeholder="Floor Number" required />
            <input type="number" className="input-field" placeholder="Number of PCs" required />
            <input type="number" className="input-field" placeholder="Capacity" required />
            <input type="number" className="input-field" placeholder="Number of chairs" required />
            <button type="submit" onClick={dialogue}>Add</button>
          </form>
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
<script defer src="../assets/JS/Add-java.js"></script>

  </>
  );
}



export default Add;




