const passwordVerifier = require('./passwordVerifier');

describe("Password Verifier", () => {
    test("should not accept a password longer than 8 characters", () => {
        // Arrange
        const inputPassword = "secretPassword";
        const errorMessage = new Error("Password length is too long! Please no more than 8 characters.");

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
    });
})