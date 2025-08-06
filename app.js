let amigos = []; // Declaración array para almacenar los nombres

// Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let nombreAmigo = document.getElementById("amigo").value;
  // Validar la entrada: asegurar que el campo no esté vacío
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return; //Salir de la función si no se ha ingresado nombre
  }

  nombreAmigo = nombreAmigo.trim(); // Para eliminar espacios en blanco al inicio y final

  // Validación de nombre repetido
  // Convierte nombre a minusculas para validar
  let nombreAmigoLowerCase = nombreAmigo.toLowerCase();
  if (
    amigos.some(
      (amigoExistente) => amigoExistente.toLowerCase() === nombreAmigoLowerCase
    )
  ) {
    alert(
      "¡Ese nombre ya ha sido agregado! Por favor, inserte un nombre diferente."
    );
    document.getElementById("amigo").value = ""; // Limpia el campo
    return; // Salir de la función si el nombre está repetido
  }

  amigos.push(nombreAmigo); //Agrega el nombre al array

  document.getElementById("amigo").value = ""; // Limpia el campo

  actualizarListaAmigos();
}

// Función para actualizar lista amigos en la interfaz
function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos"); // Obtiene el elemento de la lista HTML
  listaAmigos.innerHTML = ""; // Limpia la lista
  // Itera sobre el array amigos
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li"); // Crea elemento lista
    li.textContent = amigos[i]; // Asigna el nombre del amigo como contenido de la lista

    // Boton para eliminar nombres
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X"; // O 'Eliminar', o un ícono si tienes Font Awesome
    botonEliminar.classList.add("boton-eliminar"); // Para darle estilos en CSS

    // Función para habilitar click para eliminar
    botonEliminar.onclick = function () {
      excluirAmigo(i); // Llamamos a la nueva función con el índice del amigo
    };

    li.appendChild(botonEliminar); // Añade botón a la lista

    listaAmigos.appendChild(li);
  }
}

// Función para sortear los amigos
function sortearAmigo() {
  // Valida que haya amigos disponibles en el array
  if (amigos.length === 0) {
    alert("Agregue al menos un amigo para sortear.");
    return;
  }
  // Obtiene el elemento donde se mostrará el resultado del sorteo
  let resultadoHTML = document.getElementById("resultado");
  resultadoHTML.innerHTML = ""; // Limpia cualquier resultado anterior
  // Genera un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  // Obtiene el nombre sorteado usando el índice aleatorio
  let amigoSorteado = amigos[indiceAleatorio];

  // Muestra el resultado
  let liResultado = document.createElement("li");
  liResultado.textContent = `¡Su amigo secreto es: ${amigoSorteado}!`;
  resultadoHTML.appendChild(liResultado);
}

// Función excluir amigo del array
function excluirAmigo(indice) {
  // Splice para eliminar elementos del array
  amigos.splice(indice, 1);

  // Vuelve a llamar a actualizarListaAmigos para que la interfaz se refresque
  actualizarListaAmigos();

  // Para limpiar el sorteo, si ya estaba en función.
  document.getElementById("resultado").innerHTML = "";
}

// Función para el botón de reinicio
function reiniciar() {
  // Vacia el array de amigos
  amigos = [];

  // Limpiar la lista de nombres mostrada en el HTML
  actualizarListaAmigos();

  document.getElementById("resultado").innerHTML = ""; // Limpia el resultado del sorteo previo

  document.getElementById("amigo").value = ""; // Limpia el campo de entrada de nombres
}

// Agregar el nombre del amigo al accionar la tecla enter.
const inputNombre = document.getElementById("amigo");

if (inputNombre) {
  inputNombre.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      agregarAmigo();
    }
  });
} else {
  console.warn("Elemento con ID 'amigo' no encontrado. Verifica tu HTML.");
}
