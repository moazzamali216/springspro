import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tags from "./components/Tag";
import BillService from "./components/BillService";
import Network from "./components/Network";
import Cellular from "./components/Cellular Service";
import FeedBack from "./components/FeedBack";
import Story from "./components/Story";
import Guide from "./components/Guide";
import Deploys from "./components/Deploys"
import Products from "./components/Products"
import ScrollTop from "./components/ScrollTop.jsx"
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import Fibre from "./components/Fibre";
import Form from "./components/Form/index.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<div className="overflow-x-hidden ">
            <Header />
            <Hero />
            <Tags />
            <Network />
            <BillService />
            <FeedBack />
            <Story />
            <Guide />
            <Deploys />
            <Products />
            <Technology />
            <Footer />
          </div>} />
          <Route path="/cellular-service" element={<>
            <div className="overflow-x-hidden ">
              <Header />
              <Cellular />
              <Footer />
            </div>
          </>} />
          <Route path="/fibre-internet" element={<>            
          <div className="overflow-x-hidden ">
            <Header />
            <Fibre />
            <Footer />
          </div></>} />
          <Route  path="/order-form" element={<>            
          <div className="overflow-x-hidden ">
            <Header />
            <Form />
            <Footer />
          </div></>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
