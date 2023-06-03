import './App.css';
import React from 'react';
import styled from 'styled-components';
import Home from './pages/home'


import Navbar from "./components/header";
import Footer from './components/footer';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Forum from './pages/forum';
import Add from './pages/add';
function App() {

  
  return (
  <Wrapper>
        <BrowserRouter>
          <div className="BodyContainer">
            <div className="flex_item_header">
              <Navbar></Navbar>
            </div>
            <div className="flex_item_body">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Forum" element={<Forum />} />
                <Route path="/Add" element={<Add />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter> 
            <Footer></Footer>
    </Wrapper>
  );
}



const Wrapper= styled.div`
`

export default App;




