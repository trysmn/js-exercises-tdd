class passwordVerifier {
    static verify(passwordString) {
        if (passwordString === null) {
            return Error("Password cannot be be null");
        } else if (passwordString.length < 9) {
            return Error("Password length is too short! Please make it 9 characters or more.");
        } else if (passwordString === passwordString.toLowerCase()) {
            return Error("Password must have at least one upper case letter.");
        } else if (passwordString === passwordString.toUpperCase()) {
            return Error("Password must have at least one lower case letter.");
        } else if (/\d/.test(passwordString) === false) {
            return Error("Password must have at least one number.");
        } else {
            return "Password verified!";
        }
    }
}

module.exports = passwordVerifier;