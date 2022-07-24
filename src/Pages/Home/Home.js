import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Fqa from '../Fqa/Fqa';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import Clins from '../Clins/Clins';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <ProductFeatures/>
            <AboutUs/>
            <Fqa/>
            <Clins/>
            <Footer/>
        </div>
    );
};

export default Home;