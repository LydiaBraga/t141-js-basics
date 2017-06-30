export const form = document.getElementById("bmi-form")
const inputWeight = document.getElementById("weight")
const inputHeight = document.getElementById("height")
const spanResult = document.getElementById("spanResult");

export var getBMIParams = function() {
    return {weight: inputWeight.value, height: inputHeight.value};
}

export var showBMIResult = function(result) {
    spanResult.innerHTML = result.toFixed(2);
}