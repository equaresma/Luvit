export default {
    isPasswordStrong: (pwd) => {
        return String(pwd).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/g);
    }
}
