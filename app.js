// Create class for form inputs
class Input {
  constructor(type, placeholder, id, required) {
    this.type = type;
    this.placeholder = placeholder;
    this.id = id;
    this.required = required;

  }
//  Create method for input attributes
  inputField() {
    let input = document.createElement('input');
    input.type = this.type;
    input.placeholder = this.placeholder;
    input.id = this.id;
    input.required = this.required;
    return input;
  }
}

// Create class for buttons
class Button {
  constructor(type, value, className, id, innerhtml) {
    this.type = type;
    this.value = value;
    this.className = className;
    this.id = id;
    this.innerhtml = innerhtml;
  }

  // create method for button attributes
  createButton() {
    const button = document.createElement('button');
    button.type = this.type;
    button.value = this.value;
    button.className = this.className;
    button.id = this.id;
    button.innerHTML = this.innerhtml;
    return button;
  }
}

// create HTML elements
const form = document.createElement('form');
form.id = "form";
const header = document.createElement('div');
header.className = "formHeader";
const h1 = document.createElement('h1');
h1.innerHTML = "Step by step Form";
const footer = document.createElement('div');
footer.className = 'formFooter';
// create buttons
const continueBtn = new Button('button', '', 'btn', 'continue', 'Continue').createButton();
const continueBtn1 = new Button('button', '', 'btn', 'continue1', 'Continue').createButton();
const backBtn = new Button('button', '', 'btn', 'back', 'Back').createButton();
const backBtn1 = new Button('button', '', 'btn', 'back1', 'Back').createButton();
const submitBtn = new Button('button', 'Submit', 'btn', 'submitBtn', 'Submit').createButton();
const closeBtn = new Button('button', '', 'btn', 'closeBtn', 'Close').createButton();

// Create Input fields
const input = new Input('text', 'Your Name', 'name', true).inputField();
const input1 = new Input('password', 'Password', 'password', true).inputField();
const input2 = new Input('email', 'your@email.com', 'email', true).inputField();

//Create first form input  step
function nameInput() {
  const div = document.getElementById('steppingForm');
  div.appendChild(form);
  form.appendChild(header);
  header.appendChild(h1);
  h1.innerHTML = "Please Enter Your Name";
  form.appendChild(input);
  form.appendChild(footer);
  footer.appendChild(continueBtn);
  return;
}
// create second form input step
function passwordInput() {
  const div = document.getElementById('steppingForm');
  div.appendChild(form);
  form.appendChild(header);
  header.appendChild(h1);
  h1.innerHTML = "Please Enter Your Password";
  form.appendChild(input1);
  form.appendChild(footer);
  footer.appendChild(continueBtn1);
  footer.appendChild(backBtn);
}
// create third form input step
function emailInput() {
  const div = document.getElementById('steppingForm');
  div.appendChild(form);
  form.appendChild(header);
  header.appendChild(h1);
  h1.innerHTML = "Please Enter Your E-mail";
  form.appendChild(input2);
  form.appendChild(footer);
  footer.appendChild(submitBtn);
  footer.appendChild(backBtn1);
}
// create function for continue button event
function nextInput() {
  if (input.value === '') {
    const div = document.createElement('div');
    div.className = "alert";
    form.appendChild(div).innerHTML = 'Please fill the field';
    setTimeout(function () {
      div.remove();
    }, 3000);
  } else {
    input.classList.add('hidden');
    continueBtn.remove();
    const div = document.getElementById('steppingForm');
    div.innerHTML = '';
    passwordInput()
  }
}
// create function for continue button1 event
function nextInput1() {
  if (input1.value.length < 6) {
    const div = document.createElement('div');
    div.className = "alert";
    form.appendChild(div).innerHTML = 'Required min 6 characters';;
    setTimeout(function () {
      div.remove();
    }, 3000);
  } else {
    input1.classList.add('hidden');
    continueBtn1.remove();
    backBtn.remove();
    form.innerHTML = "";
    const div = document.getElementById('steppingForm');
    div.innerHTML = '';
    emailInput();
  }
}
// function for validating email input
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// function for submit button event
function submitForm() {
  if (!validateEmail(input2.value)) {
    const div = document.createElement('div');
    div.className = "alert";
    form.appendChild(div).innerHTML = 'Please enter valid E-mail';
    setTimeout(function () {
      div.remove();
    }, 3000);
  } else {
    form.innerHTML = "";
    formMsg();
  }
}
// function for complete message
function formMsg() {
  const div = document.getElementById('steppingForm');
  const div1 = document.createElement('div');
  div1.className = "form";
  form.appendChild(div1).innerHTML = `<h1>Thank You!</h1><br><div class="data">${input.value}<br> ${input2.value}</div><br><span class="form-msg">Your Data is Successfully submitted.</span>`;
  form.appendChild(footer);
  submitBtn.remove();
  backBtn1.remove();
  footer.appendChild(closeBtn);
}
// function for close button event
function closeForm() {
  document.getElementById('form').remove();
  return;
}
//  function for back button event
function backForm(){
  continueBtn1.remove();
  backBtn.remove();
  input1.remove();
  input.classList.remove('hidden');
  nameInput();
}
// function for back button2  event
function backForm2(){
  submitBtn.remove();
  backBtn1.remove();
  input2.remove();
  input1.classList.remove('hidden');
  passwordInput();
}
// call events
loadEventListeners();
// create event listeners
function loadEventListeners() {
  form.addEventListener('submit', nameInput);
  document.addEventListener('DOMContentLoaded', nameInput);
  continueBtn.addEventListener('click', nextInput);
  continueBtn1.addEventListener('click', nextInput1);
  submitBtn.addEventListener('click', submitForm);
  closeBtn.addEventListener('click', closeForm);
  backBtn.addEventListener('click', backForm);
  backBtn1.addEventListener('click', backForm2);
};