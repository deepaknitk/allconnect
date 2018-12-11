import React, {Component} from 'react';
import logo from '../../home1.jpg';
import Login from '../../components/login';
import SignUp from '../../components/signUp';
import './style.css';
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${logo})`,
    position: 'absolute'
};

class Index extends Component {

    constructor(props) {
       super(props);
       this.state = {
           signUp: false,
           login: false
       }
    }

    showSignUpForm = () => {
        this.setState({signUp: true});
    };

    showLoginForm = () => {
        this.setState({login: true});
    };

    closeModal = () => {
        this.setState({signUp: false, login: false})
    };

    render() {
        return (
            <div className="home_image_container" style={{height: '100%'}}>
                    { this.state.login && <div className="card">
                        <Login
                            closeModal = {this.closeModal}
                        />
                    </div>}

                { this.state.signUp && <div className="card">
                    <SignUp
                        closeModal = {this.closeModal}
                    />
                </div>}

                 <div className="signin_signUp">
                    <MuiThemeProvider>
                        <RaisedButton label="Sign Up" primary={true} onClick={this.showSignUpForm} style={{margin: '10px'}} />
                    </MuiThemeProvider>

                    <MuiThemeProvider>
                        <RaisedButton label="Login" secondary={true} onClick={this.showLoginForm} style={{margin: '10px'}} />
                    </MuiThemeProvider>
                    </div>

                    <div className=" home_img_shape zoomInLoop" style={sectionStyle}></div>
            </div>
        );
    }
}

export default Index;
