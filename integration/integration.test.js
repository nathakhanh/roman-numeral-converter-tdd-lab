let server
const request = require('supertest')

afterAll(() => server.close())
beforeAll(() => server = require('../server'))

describe("Roman Numeral to decimal", () => {
    describe("Call to a service with a valid Roman Numeral", () => {
        const testCases = [
            {
                symbol: 'IV',
                expected: 4
            },
            {
                symbol: 'XIX',
                expected: 19
            },
            {
                symbol: 'MMVI',
                expected: 2006
            },
            {
                symbol: 'MCMXLIV',
                expected: 1944
            },
            {
                symbol: 'XLIV',
                expected: 44
            },
            {
                symbol: 'XC',
                expected: 90
            }
        ];

        let results = undefined;

        for (let i = 0; i < testCases.length; i++) {
            describe(`of ${testCases[i].symbol}`, () => {
                it("should return the response with status code of 200", () => {
                    return request("localhost:3000")
                        .get(`/converter/roman/decimal/${testCases[i].symbol}`)
                        .expect(200)
                        .then(response => results = response.body);
                });

                it("should return the correct decimal value", () => {
                    expect(results).toEqual(testCases[i].expected);
                });
            });
        }
    });
});