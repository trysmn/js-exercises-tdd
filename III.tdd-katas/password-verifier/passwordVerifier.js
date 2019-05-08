class passwordVerifier {
    static verify(passwordString) {
        if (passwordString === null) {
            let errorMessage = "Password cannot be be null";
            return Error(errorMessage);
        } else if (passwordString.length < 9) {
            let errorMessage = "Password length is too short! Please make it 9 characters or more.";
            return Error(errorMessage);
        } else if (passwordString === passwordString.toLowerCase()) {
            let errorMessage = "Password must have at least one upper case letter.";
            return Error(errorMessage);
        } else if (passwordString === passwordString.toUpperCase()) {
            let errorMessage = "Password must have at least one lower case letter.";
            return Error(errorMessage);
        } else if (/\d/.test(passwordString) === false) {
            let errorMessage = "Password must have at least one number.";
            return Error(errorMessage);
        } else {
            return "Password verified!";
        }
    }
}

module.exports = passwordVerifier;