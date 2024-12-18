import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tags from "./components/Tag";
import BillService from "./components/BillService";
import Internet from "./components/Internet/index.jsx";
import Network from "./components/Network";
import Cellular from "./components/Cellular Service";
import FeedBack from "./components/FeedBack";
import Cyber from "./components/CyberSecurity/index.jsx";
import Iot from "./components/FirstNetIOT/index.jsx";
import Story from "./components/Story";
import Guide from "./components/Guide";
import Cloud from "./components/Cloud/index.jsx";
import Deploys from "./components/Deploys"
import Products from "./components/Products"
import ScrollTop from "./components/ScrollTop.jsx"
import BillsAndServices from "./components/BillandServices/index.jsx";
import Technology from "./components/Technology";
import Mobility from "./components/FirstNetMobility/index.jsx";
import Business from "./components/Partner/index.jsx"
import Footer from "./components/Footer";
import Fibre from "./components/Fibre";
import Form from "./components/Form/index.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<div className="overflow-x-hidden ">
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
          </div>} />
          <Route path="/cellular-service" element={<>
            <div className="overflow-x-hidden ">

              <Cellular />

            </div>
          </>} />
          <Route path="/fibre-internet" element={<>
            <div className="overflow-x-hidden ">

              <Fibre />

            </div></>} />
          <Route path="/order-form" element={<>
            <div className="overflow-x-hidden ">

              <Form />

            </div></>} />
          <Route path="/cloud-solution" element={<>
            <div className="overflow-x-hidden ">

              <Cloud />

            </div></>} />
          <Route path="/cyber-security" element={<>
            <div className="overflow-x-hidden ">

              <Cyber />

            </div></>} />
            <Route path="/internet-wan" element={<>
            <div className="overflow-x-hidden ">

              <Internet />

            </div></>} />
            <Route path="/business-voice" element={<>
            <div className="overflow-x-hidden ">

              <Business />

            </div></>} />
            <Route path="/first-net-iot" element={<>
            <div className="overflow-x-hidden ">

              <Iot/>

            </div></>} />
            <Route path="/first-net-mobility" element={<>
            <div className="overflow-x-hidden ">

              <Mobility/>

            </div></>} />
            <Route path="/bills-and-services" element={<>
            <div className="overflow-x-hidden ">

              <BillsAndServices/>

            </div></>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
