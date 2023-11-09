export const fizzBuzz = () => {
    let output = "";
    for (let i = 1; i <= 100; i++) {
        let msg = "";

        const isDivisibleBy3 = i % 3 === 0;
        const isDivisibleBy5 = i % 5 === 0;

        if (isDivisibleBy3) msg += "Fizz";
        if (isDivisibleBy5) msg += "Buzz";

        output += (msg || i) + "\n";
    }

    console.log(output);
}