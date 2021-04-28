const { translate } = require("./index");

//INPUTS -> OUTPUT

//tests for words begining with a vowel
//apple -> appleway
//eye -> eyeway
//ice -> iceway
//orange -> orangeway
//under -> underway

describe("translate function", () => {
    test("apple test", () => {
        let result = translate("apple");
        expect(result).toEqual("appleway");
    });
    test("ice test", () => {
        let result = translate("ice");
        expect(result).toEqual("iceway");
    });
    test("eye test", () => {
        let result = translate("eye");
        expect(result).toEqual("eyeway");
    });
    test("orange test", () => {
        let result = translate("orange");
        expect(result).toEqual("orangeway");
    });
    test("under test", () => {
        let result = translate("under");
        expect(result).toEqual("underway");
    });

//tests for words starting with one consonant
//hand -> andhway
//desk -> eskdway
    test("hand test", () => {
        let result = translate("hand");
        expect(result).toEqual("andhay");
    });
    test("desk test", () => {
        let result = translate("desk");
        expect(result).toEqual("eskday");
    });

//tests for words starting with two consonants
    test("ski test", () => {
        let result = translate("ski");
        expect(result).toEqual("iskay");
    }); 

//tests for words starting with three consonants
    test("strawberry test", () => {
        let result = translate("strawberry");
        expect(result).toEqual("awberrystray");
    }); 

//test for checking lower case conversion
    test("Pineapple test", () => {
        let result = translate("Pineapple");
        expect(result).toEqual("ineapplepay");
    }); 

});