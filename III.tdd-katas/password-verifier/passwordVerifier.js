class passwordVerifier {
    static verify(passwordString) {
        if (passwordString === null) {
            let errorMessage = "Password cannot be be null";
            return Error(errorMessage);
        } else if (passwordString.length > 8) {
            let errorMessage = "Password length is too long! Please no more than 8 characters.";
            return Error(errorMessage);
        } else if (passwordString === passwordString.toLowerCase()) {
            let errorMessage = "Password must have at least one upper case letter.";
            return Error(errorMessage);
        } else if (passwordString === passwordString.toUpperCase()) {
            let errorMessage = "Password must have at least one lower case letter.";
            return Error(errorMessage);
        }
    }
}

module.exports = passwordVerifier;