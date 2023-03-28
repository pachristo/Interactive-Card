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
const E= document.getElementById('submit_bnt')

const completed = document.querySelector('.thank');
const Form = document.querySelector('form');

nameInput.addEventListener("keyup", setcardName);
numberInput.addEventListener("keyup", setcardNumber);
yearInput.addEventListener("keyup", setcardYear);
monthInput.addEventListener("keyup", setcardMonth);
cvvInput.addEventListener("keyup", setcardCvv);

submitBtn.addEventListener("click", handleSubmit);

function setcardNumber(e) {
    
    cardNumber.innerText = e.target.value;
}

function setcardName(e) {
    cardName.innerText = e.target.value;
}

function setcardMonth(e) {
    cardMonth.innerText = e.target.value;
}

function setcardYear(e) {
    cardYear.innerText = e.target.value;
}

function setcardCvv(e) {
    cardCvv.innerText = e.target.value;
}

function handleSubmit(e) {
    e.preventDefault();

    if(nameInput.value && numberInput && yearInput && monthInput && cvvInput){
        completed.classList.remove('hidden')
        Form.classList.add('hidden')
    }
}

function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
       
            return false;
    }
    numberInput.classList.remove("active");
    return true;
}