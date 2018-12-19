import {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";
import { withRouter } from 'react-router';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "material-ui/Dialog";
import React from "react";
import { connect } from 'react-redux';
import {signUpAction} from '../../action/signUpAction'
import SnackBar from "../snackbar";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
             userName: '',
             userEmail: '',
             password: '',
             confirmPassword: '',
            open: true,
            errors: {},
            snackbarStatus: false
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {Auth} = nextProps;
        if(Auth && Object.keys(Auth).length && Auth.signUp && Auth.signUp.success) {
            this.setState({snackbarStatus: true});
            this.handleClose();
            this.props.history.push('/dashboard');
        }

    }

    changeHandler = (name, value) => {
       this.setState({[name] : value});
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        this.props.closeModal();
    };

    signUphandler = () => {
      const errors = this.validateFields();
      if(!Object.keys(errors).length) {
          const req  = {};
          req.userName = this.state.userName;
          req.userEmail = this.state.userEmail;
          req.password = this.state.password;
          req.confirmPassword = this.state.confirmPassword;
          console.log(req);
          this.props.signUpAction(req);
      }
    };

    validateFields = () => {
        const errors = {};
        if(this.state.userName === '') {
            errors.userName = 'Enter User Name';
        }
        if(this.state.userEmail === '') {
            errors.userEmail = 'Enter User Email';
        }
        if(this.state.password === '') {
            errors.password = 'Password is required';
        }
        if(this.state.confirmPassword === '') {
            errors.confirmPassword = 'Confirm password is required';
        }
        this.setState({errors});
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
                label="Save"
                primary={true}
                onClick={this.signUphandler}
                style={{margin: '10px'}}
            />,
        ];
        return (
            <div className="login_form">
                <SnackBar
                    snackbarStatus = {this.state.snackbarStatus}
                    message = "User profile Added successfully!!!"
                />
                <MuiThemeProvider>
                    <Dialog
                        title="all Connect"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <div className="border_btm f-s24 margin_btn_10 f-w-500">Sign Up</div>
                        <form>
                            <label htmlFor="userName">User Name</label>
                            <input type="text" name="userName" placeholder="Enter User Name" onChange={(event) => this.changeHandler('userName', event.target.value)} />
                            {/*{this.state.errors && this.state.errors.userName && <span>{this.state.errors.userName}</span> }*/}

                            <label htmlFor="userName">User Email</label>
                            <input type="email" name="userEmail" placeholder="Enter User Email" onChange={(event) => this.changeHandler('userEmail', event.target.value)}/>

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter password" onChange={(event) => this.changeHandler('password', event.target.value)}/>

                            <label htmlFor="lname">Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="Enter confirm password" onChange={(event) => this.changeHandler('confirmPassword', event.target.value)}/>
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
    signUpAction: (req) => dispatch(signUpAction(req))
});

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
