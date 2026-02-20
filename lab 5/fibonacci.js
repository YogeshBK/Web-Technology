// Arrow function that returns Fibonacci series as an ARRAY
const fibonacci = (n) => {
    let series = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        series.push(a);
        let c = a + b;
        a = b;
        b = c;
    }

    return series;
};

// Function to detect ENTER key
function handleEnter(event) {
    if (event.key === "Enter") {
        let n = document.getElementById("num").value;
        let resultArray = fibonacci(n);

        document.getElementById("output").innerHTML =
            "Fibonacci Array: [" + resultArray.join(", ") + "]";
    }
}