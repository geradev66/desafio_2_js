
const enviar = document.querySelector('#enviar')
const confirmacion = document.querySelector('#confirmacion')

enviar.addEventListener('click', password)

function password(){
    const opcion1 = parseInt(document.querySelector('#options1').value)
    const opcion2 = parseInt(document.querySelector('#options2').value)
    const opcion3 = parseInt(document.querySelector('#options3').value)


    if(opcion1 === 9 && opcion2 === 1 && opcion3 === 1){

        confirmacion.innerHTML = '<h2>password 1 correcto</h2>'

    }else if(opcion1 === 7 && opcion2 === 1 && opcion3 === 4){
        confirmacion.innerHTML = '<h2>password 2 correcto</h2>'
    }else{
        confirmacion.innerHTML = '<h2>password incorrecto</h2>'

    }


}
