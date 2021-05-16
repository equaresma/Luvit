export default {
    isPasswordStrong: (pwd) => {
        return String(pwd).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/g);
    },
    isAuthenticated: () => {
        let user = localStorage.getItem('user');

        if (!user)
            return false;

        //Luvinbox adm user Or Vendor user:
        return (user.userType != '2');
    },
    coalesce: (sender, attrib) => {
        return (sender && sender[attrib]);
    }
}
