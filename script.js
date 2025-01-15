async function calculateSqrt() {
    const inputNumber = document.getElementById('input-number').value;
    const resultElement = document.getElementById('result');

    if (!inputNumber) {
        resultElement.textContent = "Please enter a number.";
        return;
    }

    const pyodide = await loadPyodide();
    const result = pyodide.runPython(`
        import math
        math.sqrt(${inputNumber})
    `);

    resultElement.textContent = `The square root of ${inputNumber} is ${result}`;
}
