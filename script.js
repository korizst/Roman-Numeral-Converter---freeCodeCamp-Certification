// --- HTML ELEMENTS --- //

const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// --- ROMAN NUMBERS OBJECT --- //

const numbers = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
}

// --- FUNCTIONS --- //

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);

    if (!inputInt || isNaN(inputInt)) {
        output.innerText = "Please enter a valid number";
        output.classList.add("error-output", "roboto-regular");
        return;
    }

    arabicToRoman(inputInt);
    numberInput.value = "";
}

const arabicToRoman = (input) => {
    if (input === -1) {
        output.classList.add("error-output", "roboto-regular");
        output.innerText = "Please enter a number greater than or equal to 1";
        return;
    }
    else if (input >= 4000) {
        output.classList.add("error-output", "roboto-regular");
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    }
    else {
        let result = "";
        const romans = Object.keys(numbers);
        for (let i = 0; i < romans.length; i++) {
            const val = numbers[romans[i]];
            while (input >= val) {
                input -= val;
                result += romans[i];
            }
        }
        output.classList.remove("error-output");
        output.classList.add("valid-output", "roboto-regular");
        output.innerText= `${result}`;
        }
}

// --- EVENTS --- //

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});