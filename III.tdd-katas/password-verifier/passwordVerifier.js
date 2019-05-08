class passwordVerifier {
    static verify(passwordString) {
        if (passwordString === null) {
            let errorMessage = "Password cannot be be null";
            return Error(errorMessage);
        } else if (passwordString.length > 8) {
            let errorMessage = "Password length is too long! Please no more than 8 characters.";
            return Error(errorMessage);
        }
    }
}

module.exports = passwordVerifier;