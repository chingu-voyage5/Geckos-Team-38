import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Footer from './Footer';

class SignUp extends Component {
    render(){
        return (
            <div>
                <Header />
                <Paper>
                    Hello
                </Paper>
                <Footer />
            </div>
        )
    }
};

export default SignUp;