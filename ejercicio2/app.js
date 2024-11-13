
const boton = document.querySelector('#verificar')

const mensaje = document.querySelector('#mensaje')
 

boton.addEventListener('click', calcular)

function calcular(){
    const campo1 = parseInt(document.querySelector('#campo1').value)
    const campo2 = parseInt(document.querySelector('#campo2').value)
    const campo3 = parseInt(document.querySelector('#campo3').value)
    let total = campo1 + campo2 + campo3


    if(total <= 10){

        mensaje.innerHTML = `<p>Llevas ${total} stickers</p>`

    }else{

        mensaje.innerHTML = `<p>Llevas demasiados stickers</p>`

    }

}
