// The poll object with a question, options, and an array to store answers
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0), // Generates [0, 0, 0, 0]

    registerNewAnswer() {
        if (typeof input === "number" && input >= 0 && input < this.answers.length) {
            this.answers[input]++;
        } else {
            alert("Đầu vào không hợp lệ. Vui lòng nhập số từ 0 đến 3.");
        }


        this.displayResults("string");
        this.displayResults("array");
    },


    displayResults(type = "array") {
        if (type === "array") {
            console.log(this.answers);
        } else if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        }
    },
};


const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];


poll.displayResults.call({ answers: testData1 }, "string");
poll.displayResults.call({ answers: testData1 }, "array");
poll.displayResults.call({ answers: testData2 }, "string");
poll.displayResults.call({ answers: testData2 }, "array");
