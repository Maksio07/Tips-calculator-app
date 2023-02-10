let $billSum;
let $numberOfPeople;
let $tipPercentCustom;
let $tipPercents;
let $tipResult;
let $tipTotal;
let $errorText;
let $resetBtn;


const main = () => {
    prepareDOMElements();
    prepareDOMEvents()
}


const prepareDOMElements = () => {
    $billSum = document.querySelector('.bill-sum');
    $numberOfPeople = document.querySelector('.number-people');
    $tipPercentCustom = document.querySelector('.tip-percent-input');
    $tipPercents = document.querySelectorAll('.tip');
    $tipResult = document.querySelector('.tip-amount-result');
    $tipTotal = document.querySelector('.total-result');
    $errorText = document.querySelector('.error-text');
    $resetBtn = document.querySelector('.reset-btn');
}

const prepareDOMEvents = () => {
    window.addEventListener('click', countTip);
    window.addEventListener('keyup', countTip);
    $resetBtn.addEventListener('click', resetCalculator);
    
}

const countTip = (e) =>{
    const bill = parseFloat($billSum.value);
    const people = parseFloat($numberOfPeople.value);
    const tipPerPerson = 0;
    const total = 0;
    
    if(e.target.classList[1] === 'tip'){
        
        const tipPerPerson = (bill + (bill * parseFloat(e.target.value / 100))) / people;
        
        const total = bill/people + tipPerPerson;
        
        checkTips(e);
        
        $tipResult.textContent = tipPerPerson.toFixed(2);
        $tipTotal.textContent = total.toFixed(2);
        
        checkInput();
    } else{
        return;
    }  
}

const checkInput = () => {
    if($numberOfPeople.value == 0){
        $errorText.textContent = "Can't be 0";
        $tipResult.textContent = '0.00';
        $tipTotal.textContent = '0.00';
    } else {
        $errorText.textContent = '';
    }
}

const resetCalculator = () => {
    $tipTotal.textContent = '0.00';
    $tipResult.textContent = '0.00';
    $billSum.value = '';
    $numberOfPeople.value = '';
    $errorText.textContent = '';
    $tipPercentCustom.value = '';
}

const checkTips = (e) => {
    if(e.target.classList[0] === 'tip-percent'){
        $tipPercentCustom.value = 'Custom';
    }
}



document.addEventListener('DOMContentLoaded', main);