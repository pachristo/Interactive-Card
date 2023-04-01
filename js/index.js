const card_name = 'Jane Appleseed'
document.querySelector('.name').innerText = card_name

const card_number = '0000 0000 0000 0000'
document.querySelector('.atm-number').innerText = card_number

const card_month = '00'
document.querySelector('.month').innerText = card_month

const card_year = '00'
document.querySelector('.year').innerText = card_year

const card_cvv = '000'
document.querySelector('.cvv').innerText = card_cvv

const cardName = document.getElementById('name');
const nameInput = document.getElementById('card_Name');

const cardNumber = document.getElementById('number');
const numberInput = document.getElementById('card_Number');

const cardMonth = document.getElementById('month');
const monthInput = document.getElementById('card_Month');

const cardYear = document.getElementById('year');
const yearInput = document.getElementById('card_Year');

const cardCvv = document.getElementById('cvv');
const cvvInput = document.getElementById('card_Cvv');

const submitBtn = document.getElementById('submit_bnt')

const completed = document.querySelector('.thank');
const Form = document.querySelector('form');

nameInput.addEventListener("keyup", setcardName);
numberInput.addEventListener("keyup", setcardNumber);
yearInput.addEventListener("keyup", setcardYear);
monthInput.addEventListener("keyup", setcardMonth);
cvvInput.addEventListener("keyup", setcardCvv);

submitBtn.addEventListener("click", handleSubmit);

function setcardNumber(e) {
    var number = format(e.target.value);
    var len = number.length
    if(len == 0){
        cardNumber.innerText = card_number;
    }else{
        cardNumber.innerText = number;
    }
}

function setcardName(e) {
    var name = e.target.value;
    var len = name.length;
    if(len == 0){
        cardName.innerText = card_name;
    }else{
        cardName.innerText = name;
    }
}

function setcardMonth(e) {
    var month = e.target.value;
    var len = month.length;
    if(len == 0){
        cardMonth.innerText = card_month
    }else if(len < 2){
        var s = '0';
        cardMonth.innerText = s.concat(month)
    }else{
        cardMonth.innerText = month
    }
}

function setcardYear(e) {
    var year = e.target.value;
    var len = year.length;
    if(len == 0){
        cardYear.innerText = card_year
    }else if(len < 2){
        var s = '0';
        cardYear.innerText = s.concat(year)
    }else{
        cardYear.innerText = year
    }
}

function setcardCvv(e) {
    var cvv = e.target.value;
    var len = cvv.length;
    if(len == 0){
        cardCvv.innerText = card_cvv
    }else if(len < 2){
        var v = '00';
        cardCvv.innerText = v.concat(cvv);
    }else if(len < 3){
        var v = '0';
        cardCvv.innerText = v.concat(cvv);
    }else{
        cardCvv.innerText = cvv;
    }
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}


function handleSubmit(e) {
    e.preventDefault();

    if(!nameInput.value){
        nameInput.classList.add('error')
        nameInput.parentElement.classList.add('error-message')
    }else{
        nameInput.classList.remove('error')
        nameInput.parentElement.classList.remove('error-message')
    }

    if(!numberInput.value){
        numberInput.classList.add('error')
        numberInput.parentElement.classList.add('error-message')
    }else if(numberInput.value != String){
        numberInput.classList.add('error')
        numberInput.parentElement.classList.add('error-message2')
    }else if(numberInput.value == String){
        numberInput.classList.remove('error')
        numberInput.parentElement.classList.remove('error-message2')
    }else{
        numberInput.classList.remove('error')
        numberInput.parentElement.classList.remove('error-message')
        numberInput.parentElement.classList.remove('error-message2')
    }

    if(!yearInput.value){
        yearInput.classList.add('error')
        yearInput.parentElement.classList.add('error-message')
    }else{
        yearInput.classList.remove('error')
        yearInput.parentElement.classList.remove('error-message')
    }

    if(!monthInput.value){
        monthInput.classList.add('error')
        monthInput.parentElement.classList.add('error-message')
    }else{
        monthInput.classList.remove('error')
        monthInput.parentElement.classList.remove('error-message')
    }

    if(!cvvInput.value){
        cvvInput.classList.add('error')
        cvvInput.parentElement.classList.add('error-message')
    }else{
        cvvInput.classList.remove('error')
        cvvInput.parentElement.classList.remove('error-message')
    }

    if(nameInput.value && numberInput.value && yearInput.value && monthInput.value && cvvInput.value){
        completed.classList.remove('hidden')
        Form.classList.add('hidden')
    }
}

function nextInput(currentInput, nextInput){
    if(currentInput.value.length >= currentInput.maxLength){
        document.getElementById(nextInput).focus()
    }
}

// function restForm() {
//     document.getElementById('form').reset()
// }
