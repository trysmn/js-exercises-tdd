const passwordVerifier = require('./passwordVerifier');

describe("Password Verifier", () => {
    test("should not accept a password shorter than 9 characters", () => {
        // Arrange
        const inputPassword = "secret";
        const errorMessage = new Error("Password length is too short! Please make it 9 characters or more.");

        // Act
        const result = passwordVerifier.verify(inputPassword);

        // Assert
        expect(result).toEqual(errorMessage);
    }),

    test("should not accept a password that is null", () => {
        // Arrange
        const inputPassword = null;
        const errorMessage = new Error("Password cannot be be null");

        // Act
        const result = passwordVerifier.verify(inputPassword);

        // Assert
        expect(result).toEqual(errorMessage);
    }),

    test("should not accept a password that does not have at least one upper case letter", () => {
        // Arrange
        const inputPassword = "secretpassword";
        const errorMessage = new Error("Password must have at least one upper case letter.");

        // Act
        const result = passwordVerifier.verify(inputPassword);

        // Assert
        expect(result).toEqual(errorMessage);
    }),

    test("should not accept a password that does not have at least one lower case letter", () => {
        // Arrange
        const inputPassword = "SECRETPASSWORD";
        const errorMessage = new Error("Password must have at least one lower case letter.");

        // Act
        const result = passwordVerifier.verify(inputPassword);

        // Assert
        expect(result).toEqual(errorMessage);
    }),

    test("should not accept a password that does not have at least one number", () => {
        // Arrange
        const inputPassword = "SecretPassword";
        const errorMessage = new Error("Password must have at least one number.");

        // Act
        const result = passwordVerifier.verify(inputPassword);

        // Assert
        expect(result).toEqual(errorMessage);
    })
})