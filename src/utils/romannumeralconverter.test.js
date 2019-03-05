const romannumeralconverter = require("./romannumeralconverter");

describe.each`
romanNumeral | expected
${"IV"} | ${4}
${"XIX"} | ${19}
${"MMVI"} | ${2006}
${"MCMXLIV"} | ${1944}
${"XLIV"} | ${44}
${"XC"} | ${90}
`
    ("Given the romanNumeral as $romanNumeral", ({ romanNumeral, expected }) => {
        it("Should return $expected", () => {
            let actual = romannumeralconverter.convert(romanNumeral);
            expect(actual).toEqual(expected);
        });
    });