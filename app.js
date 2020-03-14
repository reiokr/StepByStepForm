// Create class for form inputs
class Input {
  constructor(type, placeholder, id, required) {
    this.type = type;
    this.placeholder = placeholder;
    this.id = id;
    this.required = required;
  };
//  Create method for input attributes
  inputField() {
    let input = document.createElement('input');
    input.type = this.type;
    input.placeholder = this.placeholder;
    input.id = this.id;
    input.required = this.required;
    return input;
  }
};
// Create class for buttons
class Button {
  constructor(type, value, className, id, innerhtml) {
    this.type = type;
    this.value = value;
    this.className = className;
    this.id = id;
    this.innerhtml = innerhtml;
  };
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
};
// create HTML elements
const form = document.createElement('form');form.id = "form";
const header = document.createElement('div');header.className = "formHeader";
const h1 = document.createElement('h1');h1.innerHTML = "Step by step Form";
const footer = document.createElement('div');footer.className = 'formFooter';
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
const e = document.createElement('p');
// bulid form
let formInput=(text,input,foot,button1,button2)=>{
  const div = document.getElementById('steppingForm');
  div.appendChild(form);
  form.appendChild(header);
  header.appendChild(h1);
  h1.innerHTML = text;
  form.appendChild(input);
  form.appendChild(foot);
  footer.appendChild(button1);
  footer.appendChild(button2);
};
//Create first form input  step
let nameInput=()=>{formInput("Please Enter Your Name",input,footer,continueBtn,e);};
// create second form input step
let passwordInput=()=>{formInput("Please Enter Your Password",input1,footer,continueBtn1,backBtn);};
// create third form input step
let emailInput=()=>{formInput("Please Enter Your E-mail",input2,footer,submitBtn,backBtn1);};
//  continue button event
let nextInput=()=>{
  if (input.value === '') {
    const div = document.createElement('div');
    div.className = "alert";
    form.appendChild(div).innerHTML ='Please fill the field';
    setTimeout(() =>{div.remove();}, 3000);
  } else {
    input.classList.add('hidden');
    continueBtn.remove();
    const div = document.getElementById('steppingForm');
    div.innerHTML = '';
    passwordInput();
  }
};
//  continue button1 event
let nextInput1=()=> {
  if (input1.value.length < 6) {
    const div = document.createElement('div');
    div.className = "alert";
    form.appendChild(div).innerHTML ='Required min 6 characters';
    setTimeout(() =>{div.remove();}, 3000);
  } else {
    input1.classList.add('hidden');
    continueBtn1.remove();
    backBtn.remove();
    const div = document.getElementById('steppingForm');
    div.innerHTML = '';
    emailInput();
  }
};
// submit button event
let submitForm=()=>{
  if (!validateEmail(input2.value)) {
    const div = document.createElement('div');
    div.className = "alert";
    form.appendChild(div).innerHTML = 'Please enter valid E-mail';
    setTimeout(() => {div.remove();}, 3000);
  } else {
    form.innerHTML = "";
    formMsg();
  }
};
//  validating email input
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
// form completed message
let formMsg=()=>{
  const div = document.getElementById('steppingForm');
  const div1 = document.createElement('div');
  div1.className = "form";
  form.appendChild(div1).innerHTML = `<h1>Thank You!</h1><br><div class="data">${input.value}<br> ${input2.value}</div><br><div class="form-msg">Your Data is Successfully submitted.</div>`;
  form.appendChild(footer);
  submitBtn.remove();
  backBtn1.remove();
  footer.appendChild(closeBtn);
};
// close button event
function closeForm() {document.getElementById('form').remove();};
// back button function
let backF =(b1,b2,i1,i2,f)=>{b1.remove();b2.remove();i1.remove();i2.classList.remove('hidden');f;}
//  back button event
let backForm=()=>{backF(continueBtn1,backBtn,input1,input,nameInput())};
//  back button2  event
let backForm2=()=>{backF(submitBtn,backBtn1,input2,input1,passwordInput())};
// call events
loadEventListeners();
// create event listeners
function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', nameInput);
  continueBtn.addEventListener('click', nextInput);
  continueBtn1.addEventListener('click', nextInput1);
  submitBtn.addEventListener('click', submitForm);
  closeBtn.addEventListener('click', closeForm);
  backBtn.addEventListener('click', backForm);
  backBtn1.addEventListener('click', backForm2);
};
