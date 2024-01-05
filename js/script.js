let key = 'e43a78d88a52423cb6d20642a20efbd1';
let category = 'sports'
let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${key}`;
let mostrar_noticias = document.getElementById('noticias');
var div_noticias = document.getElementById('noticia');

    fetch(utl)
        .then((resp) => resp.json())
        .then(dato => {
            console.log(dato);
            let noticias = dato.articles;

            if(noticias){
                noticias.map(function(numero){
                    div_noticias.innerHTML = `<br>
                    <img style = "max-width:650px ; text-align: center" src = ${numero.urlToImage}><br>
                    <h1 style = "text-align: center">${numero.title}</h1><br>
                    <h2 style = "text-align: center">${numero.description}</h2><br>
                    <h3 style = "text-align: center">${numero.url}</h3><br>`;

                    mostrar_noticias.appendChild(div_noticias);
                });
            }else{
                console.error("No hay artículos en la API")
            }
        })
        .catch(error => {
            console.error("Error al obtener datos de la API: ", error);
        });





/* Código Original */
/*
fetch (url).then((resp) =>resp.json()).then(dato =>{
    console.log(dato);
    let noticias = (dato.articles);
    noticias.map(function(numero){
        let div = document.createElement('div');
        div.innerHTML = `<br>
                            <img style = "max-width:650px ; text-align: center" src = ${numero.urlToImage}><br>
                            <h1 style = "text-align: center">${numero.title}</h1><br>
                            <h2 style = "text-align: center">${numero.description}</h2><br>
                            <h3 style = "text-align: center">${numero.url}</h3><br>`;
            mostrar_noticias.appendChild(div);
    })
}); 
*/

document.addEventListener('DOMContentLoaded', function () {
    const formularioComentario = document.getElementById('formulario-comentario');
    const comentariosLista = document.getElementById('comentarios-lista');

    formularioComentario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;

        if (nombre && comentario) {
            agregarComentario(nombre, comentario);
            formularioComentario.reset();
        }
    });

    function agregarComentario(nombre, comentario) {
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');
        nuevoComentario.innerHTML = `<strong>${nombre}:</strong> ${comentario}`;
        comentariosLista.appendChild(nuevoComentario);
    }
});

function crearEncuesta() {
    const pregunta = document.getElementById('pregunta').value;
    const opciones = document.getElementById('opciones').value.split(',');

    // Puedes almacenar la encuesta y sus opciones, y luego mostrar los resultados en esta sección
    const encuestaHTML = `<div class="encuesta">
                            <p>${pregunta}</p>
                            <ul>
                                ${opciones.map(opcion => `<li>${opcion.trim()}</li>`).join('')}
                            </ul>
                          </div>`;

    document.getElementById('encuestas-contenedor').innerHTML += encuestaHTML;
    document.getElementById('formulario-encuesta').reset();
}

document.addEventListener('DOMContentLoaded', function () {
    // Puedes obtener los recursos de una fuente externa, por ejemplo, una API o un archivo JSON
    const recursos = [
        { titulo: 'Guía de inicio rápido', enlace: 'https://ejemplo.com/guia' },
        { titulo: 'Documentación completa', enlace: 'https://ejemplo.com/documentacion' },
        { titulo: 'Foro de soporte', enlace: 'https://ejemplo.com/foro' }
        // Agrega más recursos según sea necesario
    ];

    const listaRecursos = document.getElementById('lista-recursos');

    recursos.forEach(recurso => {
        const elementoRecurso = document.createElement('li');
        elementoRecurso.classList.add('recurso');

        const enlace = document.createElement('a');
        enlace.href = recurso.enlace;
        enlace.textContent = recurso.titulo;

        elementoRecurso.appendChild(enlace);
        listaRecursos.appendChild(elementoRecurso);
    });
});