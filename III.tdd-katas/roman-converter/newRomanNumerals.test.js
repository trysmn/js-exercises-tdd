const convertToNewRoman = require('./newRomanNumerals');

describe("convertToNewRoman function", () => {
    test("should convert the integer input in to its new roman numeral equivalent", () => {
        // Arrange
        const input1 = 4;
        const expectedoutput1 = "IV";
        const input2 = 9;
        const expectedoutput2 = "IX";
        const input3 = 40;
        const expectedoutput3 = "XL";
        const input4 = 90;
        const expectedoutput4 = "XC";
        const input5 = 400;
        const expectedoutput5 = "CD";
        const input6 = 900;
        const expectedoutput6 = "CM";

        // Act
        const result1 = convertToNewRoman(input1);
        const result2 = convertToNewRoman(input2);
        const result3 = convertToNewRoman(input3);
        const result4 = convertToNewRoman(input4);
        const result5 = convertToNewRoman(input5);
        const result6 = convertToNewRoman(input6);

        // Assert
        expect(result1).toEqual(expectedoutput1);
        expect(result2).toEqual(expectedoutput2);
        expect(result3).toEqual(expectedoutput3);
        expect(result4).toEqual(expectedoutput4);
        expect(result5).toEqual(expectedoutput5);
        expect(result6).toEqual(expectedoutput6);
    });
})