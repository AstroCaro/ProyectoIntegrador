const nombre = document.querySelector('#fname');
const apellido = document.querySelector('#lname');
const mail = document.querySelector('#email');
const mensaje = document.querySelector('#comment');

const nameError = document.querySelector('#nameError');
const lnameError = document.querySelector('#lnameError');
const emailError = document.querySelector('#emailError');
const mensajeError = document.querySelector('#mensajeError');

const buttons = document.querySelector('button');


buttons.addEventListener('click', (e)=> {
    e.preventDefault();
    validateEmpty(nombre.value, nombre, nameError, 'El nombre no debe estar vació');
    validateEmpty(apellido.value, apellido, lnameError, 'El apellido no debe estar vació', );
    validateEmail(mail.value, mail, emailError, );
    validateEmpty(mensaje.value, mensaje, mensajeError, 'Por favor ingrese un mensaje');
   

});

function validateEmail(valueInput, divInput, divError) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
   if (regExp.test(valueInput) == true){
       hideError(divInput, divError);
}else {
    showError(divInput, divError, 'Email no es valido');
   };
}


function validateEmpty(valueInput, divInput, divError, nameInput) {
    if (valueInput.length === 0) {
        showError(divInput, divError, nameInput);
    }else {
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error) {
    divInput.style.border = '1px solid red';
    divError.innerHTML =  `<img class="icon-error" src="./Imágenes/icono-rojo.png" alt="" width="30px" height="30px">
    <p class="error">${error}</p>`;
     
}
function hideError(divInput, divError) {
    divInput.style.border = '1px solid green';
    divError.innerHTML =  ` `
    
}