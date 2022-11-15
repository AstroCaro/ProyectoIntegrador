const user2 = document.getElementById('usuario');
const pass2 = document.getElementById('password');
const formu = document.getElementById('form2')
const warn1 = document.getElementById("warnings")

formu.addEventListener('submit', i =>{
    i.preventDefault();
    let entrance = false;
    if(user2.value.length <12){
        alert('El usuario debe contener 12 caracteres')
    }
    if(pass2.value.length < 8){
        alert('Contraseña inválida, intente nuevamente')
    }
    if(entrance){
        warn1.innerHTML = warn1
    }
})