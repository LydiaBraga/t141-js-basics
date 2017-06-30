import '../css/style.css';
import { getBMIParams, showBMIResult, form } from './dom';

var onSubmit = function(event) {
    event.preventDefault(); //I want to stop the default event for this form
    
    let BMIParams = getBMIParams();
    let BMIResult = parseFloat(BMIParams.weight) / Math.pow(parseFloat(BMIParams.height), 2);

    showBMIResult(BMIResult);
}

form.addEventListener("submit", onSubmit);