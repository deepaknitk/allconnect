import React, {Component} from 'react';
import './style.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from 'material-ui/Dialog';
import {loginAction} from "../../action/signUpAction";
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            password: '',
            open: true,
            errors :{}
        };
    }

    changeHandler = (name, value) => {
        this.setState({[name] : value});
    };


    handleOpen = () => {
        this.setState({open: true});
    };


    handleClose = () => {
        var errors = this.validateLogin();
        if(!Object.keys(errors).length) {
            const obj = {
                userEmail: this.state.userEmail,
                password: this.state.password
            };
            this.props.loginAction(obj);
            // this.setState({open: false});
            // this.props.closeModal();
        }
    };

    validateLogin = () => {
      const errors = {};
      if(this.state.userEmail.trim() === '') {
          errors.userEmail = 'User Name is required'
      }

      if(this.state.password.trim() === '') {
          errors.password = 'Password is required'
      }
      return errors;
    };

    render() {
        const actions = [
            <RaisedButton
                label="Cancel"
                secondary={true}
                onClick={this.handleClose}
                style={{margin: '10px'}}
            />,
            <RaisedButton
                label="Submit"
                primary={true}
                onClick={this.handleClose}
                style={{margin: '10px'}}
            />,
        ];
        return (
            <div className="login_form">

                <MuiThemeProvider>
                    <Dialog
                        title="all Connect"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                            <div className="border_btm f-s24 margin_btn_10 f-w-500">Login</div>
                            <form>
                                <label htmlFor="fname">User Email</label>
                                <input type="text"
                                       id="fname"
                                       name="userEmail"
                                       placeholder="Enter User Email"
                                       onChange={(event) => this.changeHandler('userEmail', event.target.value)}
                                />
                                <label htmlFor="lname">Password</label>
                                <input type="password"
                                       id="lname"
                                       name="password"
                                       placeholder="Enter password"
                                       onChange={(event) => this.changeHandler('password', event.target.value)}
                                />
                            </form>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    loginAction: (req) => dispatch(loginAction(req))
});

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
