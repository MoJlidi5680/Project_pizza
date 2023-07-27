import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import Login from './Login';
import Test from './Test';


const App = () => {
  
  const [MenuList,setMenuList]=useState([
    {
      name:"pepperonia pizza",
      image:"https://dxpulwm6xta2f.cloudfront.net/eyJidWNrZXQiOiJhZGMtZGV2LWltYWdlcy1yZWNpcGVzIiwia2V5IjoicGl6emFfcGVwcGVyb25pLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6ODB9LCJwbmciOnsicXVhbGl0eSI6ODB9LCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19",
      price:"15.99"
    },
    {
      name:"Margherita pizza",
      image:"https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg",
      price:"11.99"
    },
    {
      name:"PedroTech Special pizza",
      image:"https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=27qSFEznalRWqZ5iAgm4fnM6u_TgIqsgUWb3qLTn-Hk=",
      price:"256.53"
    },
    {
      name:"Vegan pizza",
      image:"https://cdn.loveandlemons.com/wp-content/uploads/2018/09/vegan-pizza.jpg",
      price:"17.99"
    },
    {
      name:"Pineapple pizza",
      image:"https://static01.nyt.com/images/2023/03/29/multimedia/23HAMREX2-pineapple-ham-pizza-qwct/HAMREX2-pineapple-ham-pizza-qwct-mediumSquareAt3X.jpg",
      price:"4.99"
    },
    {
      name:"Very Expensive pizza",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmL8MELIklrW66ETcBkKFDFrffcbUq_HVaQ&usqp=CAU",
      price:"1997.99"
    },
  ])

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Test' element={<Test MenuList={MenuList}/>} />
    </Routes>
  );
};

export default App;
