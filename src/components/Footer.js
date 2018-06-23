import React, { Component } from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const styles ={
    text:{
        fontSize: "20px",
        fontWeight: 600,
        color: '#000',
        textTransform: 'Uppercase'
    }
};

class Footer extends Component {
    render() {
        return (
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Privacy Policy" style={styles.text} />
                    <BottomNavigationAction label="Developers/Github" style={styles.text} />
                    <BottomNavigationAction label="Contact Us" style={styles.text} />
                </BottomNavigation>
        )
    }
}

export default Footer;