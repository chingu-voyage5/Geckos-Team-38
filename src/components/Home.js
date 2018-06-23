import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import BgImage from '../assests/bg.jpg';

class Home extends Component {
    render () {
        return (
            <div>
                <Header />
                <img src={BgImage} style={{width:'100%'}} />
                <Footer />
            </div>

        )
    }
}

export default Home;