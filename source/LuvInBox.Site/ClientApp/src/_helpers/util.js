export default {
    passwordIsStrong: (pwd) => {
        return pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/g);
    }
}
