Feature: Roman to Decimal
As a football fan
I want to be able to easily convert Roman numerals to Decimal
So that I know what Super Bowl I am watching

Scenario: Converting a valid Roman Numeral to Decimal

Given A call to "/converter/roman/decimal/:symbols"
And the value as a JSON Payload

Example:

| symbols	| expected	| 
| IV | {"romanNumeral":IV, decimalValue:4} |
| XIX | {"romanNumeral":XIX, decimalValue:19} |
| MMVI | {"romanNumeral":MMVI, decimalValue:2006} |
| MCMXLIV | {"romanNumeral":MCMXLIV, decimalValue:1944} |
| XLIV | {"romanNumeral":XLIV, decimalValue:44} |
| XC | {"romanNumeral":XCX, decimalValue:90} |

Scenario: When the Roman Numeral is not valid

Given A call to "/converter/roman/decimal/:symbols"
When the symbols are not all valid Roman numerals
Then it should respond with a 400
And the value as a JSON Payload with an error message

| symbols	| expected	| 
| VX | {"input":VX, message:"Invalid Roman numeral"} |
| LM | {"input":LM, message:"Invalid Roman numeral"} |
| XCX | {"input":XCX, message:"Invalid Roman numeral"} |
| XM | {"input":XM, message:"Invalid Roman numeral"} |


Scenario: Invalid Symbols

Given A call to "/converter/roman/decimal/:symbols"
When the symbols are not valid Roman Numeral symbols
Then it should respond with a 400
And the value as a JSON Payload with an error message

| symbols	| expected	| 
| x | {"input":x, message:"Invalid Symbol(s)"} |
| c | {"input":c, message:"Invalid Symbol(s)"} |
| ff | {"input":ff, message:"Invalid Symbol(s)"} |
| XLIVZ | {"input":XLIVZ, message:"Invalid Symbol(s)"} |