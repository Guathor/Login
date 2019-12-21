console.log("hola mundo");

const boton = window.document.querySelector('#boton');

boton.addEventListener('click', mostrarDatos);


function mostrarDatos () {
    
    const input1 = window.document.querySelector('#email');
    const textoInput = input1.value;
    const input2 = window.document.querySelector('#contraseña');
    const textoInput2 = input2.value;
    

    if (textoInput === 'ejemplo@gmail.com' & textoInput2 === '123456'){
        console.log('Iniciando sesion')    
    } else{
        console.log('Email y/o contraseña incorrecta')
    }
    console.log(textoInput);
    input1.value = '';
    input1.focus(); 

    console.log(textoInput2);
    input2.value = '';
    input2.focus(); 

}
