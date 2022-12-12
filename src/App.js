import React from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/services/Services';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default App;