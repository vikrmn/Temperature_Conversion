let inputElement = document.getElementById("input");
let CtoF = document.getElementById("CtoF");
let FtoC = document.getElementById("FtoC");
let submit = document.getElementById("submit_button");
let result = document.getElementById("result");

submit.onclick = function() {
    let inputValue = inputElement.value;
    let inputNumber = Number(inputValue);

    if (CtoF.checked) {
        let temp = inputNumber * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    } else if (FtoC.checked) {
        let temp = (inputNumber - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "C";
    } else {
        result.textContent = "Select a unit";
    }
}
