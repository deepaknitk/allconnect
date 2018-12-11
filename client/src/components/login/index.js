import React, {Component} from 'react';
import './style.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        this.props.closeModal();
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
                                <input type="text" id="fname" name="userEmail" placeholder="Enter User Email"/>
                                <label htmlFor="lname">Password</label>
                                <input type="text" id="lname" name="password" placeholder="Enter password"/>
                            </form>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Login;
