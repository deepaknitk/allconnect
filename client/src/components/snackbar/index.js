import React from 'react';

import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const SnackBar = (props) => {
    const style = {
        backgroundColor: props.snackbarStatus ? 'green' : 'red'
    };
        return (
            <div>
                <div>
                    <MuiThemeProvider>
                    <Snackbar
                        open={props.snackbarStatus}
                        message={props.message}
                        autoHideDuration={4000}
                        bodyStyle={style}
                    />
                    </MuiThemeProvider>
                </div>
            </div>
        );
};

export default SnackBar;
