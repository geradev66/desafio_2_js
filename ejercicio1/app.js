document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.querySelector('#imagen');

    imagen.addEventListener('click', contornoImagen)

    function contornoImagen(){
        imagen.classList.toggle('contorno');
    }

  });