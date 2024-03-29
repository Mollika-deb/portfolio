import React from 'react';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';


const App = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <About></About>
            <Experience></Experience>
            {/* <Services></Services> */}
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Blog></Blog>
            <Footer></Footer>
           
        </div>
    );
};

export default App;