const boton = window.document.querySelector('#boton');

boton.addEventListener('click', mostrarDatos);


function mostrarDatos () {
    
    const input1 = window.document.querySelector('#email');
    const user = input1.value;
    const input2 = window.document.querySelector('#contraseña');
    const pass = input2.value;
    
    console.log(user);
    input1.value = '';
    input1.focus(); 

    console.log(pass);
    input2.value = '';
    input2.focus(); 

    if (user === 'ejemplo@gmail.com' & pass === '123456'){
        console.log('Iniciando sesion...')    
    } else{
        console.log('Email y/o contraseña incorrecta')
    }
    

}
