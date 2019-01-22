# JavaScript TDD Lab

Utilizing TDD methods, implement the following feature:

```gherkin
Feature: Roman to Decimal
As a football fan
I want to be able to easily convert Roman numerals to Decimal
So that I know what Super Bowl I am watching

Scenario: Converting a valid Roman Numeral to Decimal

Given A call to "/converter/roman/decimal/:symbols"
When the symbols are all valid Roman numerals
Then it should respond with a 200
And the value as a JSON Payload

Example:

| symbols	| expected	| 
| IV | {"romanNumeral":IV, decimalValue:4} |
| XIX | {"romanNumeral":XIX, decimalValue:19} |
| MMVI | {"romanNumeral":MMVI, decimalValue:2006} |
| MCMXLIV | {"romanNumeral":MCMXLIV, decimalValue:1944} |
| XLIV | {"romanNumeral":XLIV, decimalValue:44} |
| XCX | {"romanNumeral":XCX, decimalValue:90} |

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
```

# Fully Stacked Immersive Cohort Bootcamp Assessment Instructions

1. Clone the repo
1. Remove the .git directory
1. Reinitialize git
1. Add all files to tracking
1. Push to your personal enterprise github


### Additional required content for assessment

1. Create a markdown file named tdd-notes.md
1. Keep track of the steps you had to take each time you made the test pass or fail.  Summarize any steps that did not change the status, such as adding tests or criteria that did not break the test.

Example:

1. Created integration test to call the endpoint
1. Created the route to make the test pass
1. Added [ some criteria ] to the test to make it fail

...continue until all scenarios are complete.