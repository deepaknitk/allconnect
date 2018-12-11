
// user Profile validation

 module.exports = userProfile = (userInfo) => {
    const error = {
    };
    if(!userInfo.userName || userInfo.userName.trim() === '') {
        error.userName = 'User Name is required';
    }

     if(!userInfo.userEmail || userInfo.userEmail.trim() === '') {
         error.userEmail = 'User Email is required';
     }

     if(!userInfo.password || userInfo.password.trim() === '') {
         error.password = 'password is required';
     }

     if(!userInfo.confirmPassword || userInfo.confirmPassword.trim() === '') {
         error.confirmPassword = 'confirm password is required';
     }
     if(userInfo.confirmPassword !== userInfo.password) {
         error.passwordMistatch = 'Password and confirm password should be same'
     }
     return error;
};

