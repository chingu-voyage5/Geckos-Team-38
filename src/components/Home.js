import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from '../assests/bg.jpg';
import green from '@material-ui/core/colors/green';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        marginTop:64,
        backgroundSize: 'cover',
        height: 500,
        paddingTop: 100
    },
    title:{
        color:'#000'
    },
    para: {
        paddingLeft: 150,
        paddingRight: 150,
        paddingTop: 50,
        fontSize: 20
    },
    sub: {
        fontSize: 30
    },
    learnMore: {
        backgroundColor: green[400],
        color: '#fff',
        margin: "10px",
        fontWeight: 600
    },
    signUp: {
        backgroundColor: green[700],
        color: '#fff',
        margin: "10px",
        fontWeight: 600
    }
};

class Home extends Component {
    render () {
        const {
            paperContainer,
            title,
            para,
            sub,
            learnMore,
            signUp
        } = styles;
        return (
            <div>
                <Header />
                <Paper style={paperContainer}>
                    <Typography variant='display3' style={title}>Welcome to Positivo</Typography>
                    <Typography variant='subheading' style={sub}> Your Daily Greatefulness Reminder </Typography>
                    <Typography paragraph style={para}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Button variant='flat' style={learnMore}>Learn More</Button>                    
                    <Button variant='flat' style={signUp}>Sign Up</Button>
                </Paper>
                {/* <img src={BgImage} style={{width:'100%'}} /> */}
                <Footer />
            </div>

        )
    }
}

export default Home;