import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter, Routes } from "react-router-dom"
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import Content from './components/Content';
import Productslider from './components/productslider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <HeaderContainer />
      <Content/>
      <Productslider/>
      
      
 
      <HomeContainer />
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
