const name1 = document.getElementById('nombre');
const lastname = document.getElementById('apellido');
const mail = document.getElementById('email');
const doc = document.getElementById('documento')
const dirr = document.getElementById('direccion')
const phone = document.getElementById('telefono')
const user = document.getElementById('usuario')
const pass1 = document.getElementById('password');
const formularioo = document.getElementById('form1')
const warn1 = document.getElementById("warnings")

formularioo.addEventListener('submit', e=>{
    e.preventDefault()
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    if (name1.value.length <2){
        alert('Nombre inválido')
    }
    if(lastname.value.length <2){
        alert("Apellido inválido")
    }
    console.log(regexEmail.test(mail.value))
    if(!regexEmail.test(mail.value)){
        alert('Email inválido')
    }
    if(user.value.length <12){
        alert('El usuario debe contener 12 caracteres')
    }
    if(password.value.length < 8){
        alert('Contraseña inválida, debe contener mas de 8 caracteres')
    }
    if(entrar){
        warn1.innerHTML =warn1
    }
})