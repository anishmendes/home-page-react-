import React from 'react';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer  from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";


const App = () => {

   
  const theme ={
    colors: {
      heading:"rgb(24 24 29)",
      text:"rgb(24 24 29)",
      white:"#edebeb",
      black:"#181b1c",
      helper:"#7fe5eb",
      bg:"rgb(249 249 255)",
      footer_bg:"#232b44",
      btn:"rgb(98,84,243,0.5)",
      hr:"#fffff",
      gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0% rgb(98 189 252) 100%)",
      shadow:"rgb(0,0,0,0.16) 0px 1px 4px",
      },
      media:{mobile:"768px", tab:"998px"},
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/about" element= {<About/>} />
    <Route path="/service" element= {<Services/>} />
    <Route path="/contact" element= {<Contact/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    </ThemeProvider>
   
  )
}

export default App 
