import React, { Component } from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const styles ={
    text:{
        fontSize: 20,
        fontWeight: 700,
        color: '#000',
        textTransform: 'Uppercase',
        fontFamily: 'Source Sans Pro'
    }
};

class Footer extends Component {
    render() {
        const { text } = styles;
        return (
                <BottomNavigation showLabels style={{height: 75}}>
                    <BottomNavigationAction label="Privacy Policy" style={text} />
                    <BottomNavigationAction label="Developers/Github" style={text} />
                    <BottomNavigationAction label="Contact Us" style={text} />
                </BottomNavigation>
        )
    }
}

export default Footer;