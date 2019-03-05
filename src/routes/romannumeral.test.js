const request = require("supertest");
const express = require("express");

const { romanNumeralRoutes } = require("./romannumeral");

describe('GET "/converter/roman/decimal/:symbols"', () => {
    describe.each`
    romanNumeral | expected
    ${"IV"} | ${4}
    ${"XIX"} | ${19}
    ${"MMVI"} | ${2006}
    ${"MCMXLIV"} | ${1944}
    ${"XLIV"} | ${44}
    ${"XC"} | ${90}
    `
        ("When the :symbols is $romanNumeral", ({
            romanNumeral,
            expected
        }) => {

            it("Then it should respond with a status code 200 and the result", () => {
                const app = express()
                app.use(romanNumeralRoutes())

                return request(app)
                    .get(`/converter/roman/decimal/${romanNumeral}`)
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .then(result => {
                        expect(result.body).toEqual(expected)
                    })
            })

        })
})