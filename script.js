function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        document.getElementById('result').value = Math.sqrt(eval(document.getElementById('result').value));
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function calculateSquare() {
    try {
        document.getElementById('result').value = Math.pow(eval(document.getElementById('result').value), 2);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    document.getElementById('result').value = '';
}

function toggleNightMode() {
    document.body.classList.toggle("night-mode");
    document.getElementById("calculator").classList.toggle("night-mode");
    document.getElementById("result").classList.toggle("night-mode");

    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("night-mode");
    }
}
