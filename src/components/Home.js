import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from './Header';
import BgImage from '../assests/bg.jpg';
import { width } from "window-size";

// const styles = {
//     bg: {
//         backgroundImage: `url(${BgImage})`,
//         width: '100%'
//     }
// }

class Home extends Component {
    render () {
        return (
            <div>
                <Header />
                <img src={BgImage} style={{width:'100%'}} />
            </div>

        )
    }
}

export default Home;