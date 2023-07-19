function crearItem(){
    //obtenemos los valores del formulario
    let producto=document.getElementById("producto").value;
    let categoria=document.getElementById("categoria").value;

    //creamos el elementos y añadimos el texto
    // let check=document.createElement("input");
    // check.setAttribute("type","checkbox");
    // console.log(check);
    // elemento.appendChild(check);

    // creamos el elemento parrafo y añadimos el checkbox, el item y el boton eliminar
    let elemento=document.createElement("p");
    elemento.innerHTML="<input type='checkbox' onchange='tachado(this)'/>" + "<label>" + producto + "</label>" + "<button class='eliminar' onclick='eliminarItem(this)'>-</button>";

    //Se añade elemento al contenedor específico por categoria
    let contenedor=document.getElementById(categoria).children[1]; // accedemos al elemento en index 1 del array (dentro del div "frutas" hay 2 elementos: h3 y div "listado")
                                                                   // el valor de la variable categoria (option value) coincide con el id del div de cada categoria
    contenedor.appendChild(elemento);
    
    //limpiamos los campos, despues de añadir un producto se limpian todos los campos
    document.getElementById("producto").value="";
    document.getElementById("categoria").value="0";
    document.getElementById('boton').disabled = true;
}

function eliminarItem(elemento){  // elemento se refiere al boton -
    //obtenemos el div donde se inserta el item en la lista 
    let listado=elemento.parentElement.parentElement;   // accedemos al padre del boton - que es p y luego al padre de p que es el div
    //eliminamos el elemento
    listado.removeChild(elemento.parentElement);  // eliminamos al hijo del div que es p
}

function tachado(elemento) {   // elemento se refiere al checkbox
    let texto=elemento.nextSibling;
    //se evalúa si el checkbox esta seleccionado
    if(elemento.checked) {
        //si está seleccionado se tacha el texto aplicando una clase creada en css
        texto.setAttribute("class", "tachado");
    } else {
        //sino se selecciona se elimina la clase aplicada
        let texto=elemento.nextSibling;
        texto.removeAttribute("class");
    }

}

function activarBoton(){  // para que el boton + este activado o desactivado
    //obtenemos los valores de los diferentes campos
    let producto=document.getElementById("producto").value;
    let categoria=document.getElementById("categoria").value;

    //Comprobamos si categoria y producto es diferente a vacio
    if (producto!="" && categoria!="") {
        //si lo es lo desactivamos
        document.getElementById('boton').disabled = false;

    } else {
        //sino lo es se activa
        document.getElementById('boton').disabled = true;

    }

}