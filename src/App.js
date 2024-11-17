import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js'
import './Header/Header.css'
import Banner from './Green-banner/Green-banner.js'
import './Green-banner/Green-banner.css'
import Circle from './Circle/Circle.js';
import Data from './Circle/Circle-data.js';
import './Circle/Circle.css'
import Barishta from './Brishta/Barishta.js';
import './Brishta/Barishta.css'
import Dataa from './Brishta/Barishta-data.js';
import Coffe from './Coffe/Coffe.js';
import Footer from './Footer/Footer.js';
import Bnr from './Bnr-slide/Bnr.js';
import Daataa from './Bnr-slide/Bnr-data.js';

// import { BrowserRouter as Router,Routes,React,Link, Route } from 'react-router-dom';
import Home from './Header/Home.js';
import Order from './Header/Order.js';
import Pay from './Header/Pay.js';import Gift from './Header/Gift.js';



function App() {
  return (
    <>
      <Header />
      <Banner />
      <Bnr />
      <Circle />
      <Barishta />
      <Coffe />
      <Footer />

{/* <Router>
<Header/>

</Router> */}


{/* <Routes>

<Route path='/Gift' element={<Gift/>} />

</Routes> */}
    </>
  );
}

export default App;
