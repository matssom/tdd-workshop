import { fizzBuzz } from "./fizzBuzz";

const log = jest.spyOn(console, "log");

describe("FizzBuzz", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

    it("should console.log 1 time", () => {
        fizzBuzz();

        expect(log).toHaveBeenCalledTimes(1);
    });

    it("should console.log 100 lines", () => {
        fizzBuzz();

        const output = log.mock.calls[0][0];

        expect(output.split("\n").length).toEqual(101);
    });

    it('should console.log numbers when not divisible by 3 or 5', () => {
       fizzBuzz();

        const output = log.mock.calls[0][0];
        const lines = output.split("\n");

         expect(lines[0]).toEqual("1");
            expect(lines[1]).toEqual("2");
            expect(lines[3]).toEqual("4");
            expect(lines[7]).toEqual("8");
    });

    it('should output "Fizz" when the number is divisible by 3 only', () => {
        fizzBuzz();

        const output = log.mock.calls[0][0];
        const lines = output.split("\n");

        expect(lines[2]).toEqual("Fizz");
        expect(lines[5]).toEqual("Fizz");
        expect(lines[8]).toEqual("Fizz");
        expect(lines[11]).toEqual("Fizz");
        expect(lines[98]).toEqual("Fizz");
    });

    it('should output "Buzz" when the number is divisible by 5 only', () => {
        fizzBuzz();

        const output = log.mock.calls[0][0];
        const lines = output.split("\n");

        expect(lines[4]).toEqual("Buzz");
        expect(lines[9]).toEqual("Buzz");
        expect(lines[19]).toEqual("Buzz");
        expect(lines[24]).toEqual("Buzz");
        expect(lines[99]).toEqual("Buzz");
    });

    it('should console.log "FizzBuzz" when the number is divisible by 3 and 5', () => {
        fizzBuzz();

        const output = log.mock.calls[0][0];
        const lines = output.split("\n");

        expect(lines[14]).toEqual("FizzBuzz");
        expect(lines[29]).toEqual("FizzBuzz");
        expect(lines[44]).toEqual("FizzBuzz");
        expect(lines[59]).toEqual("FizzBuzz");
    });
});