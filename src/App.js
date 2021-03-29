import logo from './logo.svg';
import './App.css';
import ImageHeader from "./pages/ImageHeader";
import ImageHeader1 from "./pages/ImageHeader1";
import Footer from "./pages/Footer";
import CustomiseTouchBar from "./components/CustomiseTouchBar";
import OurTouchEditor from "./components/OurTouchEditor";
import UniteButtons from "./components/UniteButtons";
import MagicOfGestures from "./components/MagicOfGestures";
import BlockTouchBars from "./components/BlockTouchBars";
import React from "react";
import { Controller, Scene } from 'react-scrollmagic';



function App() {
  return (
    <div>
      <ImageHeader/>
      <ImageHeader1/>
      <CustomiseTouchBar/>
      <OurTouchEditor/>
      <UniteButtons/>
      <MagicOfGestures/>
      <BlockTouchBars/>
      <Footer/>
    </div>
  );
}

export default App;
