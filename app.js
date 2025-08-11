let amigos = []; // Declaración array para almacenar los nombres
let participantes = []; // Declaración array para almacenar los participantes del sorteo

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

  participantes.push(nombreAmigo); // Agrega el nombre al array de participantes para el sorteo

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
  if (participantes.length === 0) {
    alert("Agregue al menos un amigo para sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * participantes.length);
  let amigoSorteado = participantes[indiceAleatorio];

  // Mostrar el resultado
  let resultadoHTML = document.getElementById("resultado");
  resultadoHTML.innerHTML = `¡Tu amigo secreto es: ${amigoSorteado}!`;

  // --- LÓGICA CLAVE PARA INHABILITAR EL NOMBRE ---
  // 1. Eliminar al amigo sorteado del array de participantes
  participantes.splice(indiceAleatorio, 1);

  // 2. Encontrar al amigo sorteado en la lista visible y tacharlo
  let listaHTML = document.getElementById("listaAmigos");
  let listaItems = listaHTML.getElementsByTagName("li");

  for (let i = 0; i < listaItems.length; i++) {
    // Obtenemos el nombre del amigo en la lista visible (sin el botón 'X')
    let nombreLi = listaItems[i].firstChild.textContent;
    if (nombreLi.trim() === amigoSorteado.trim()) {
      listaItems[i].classList.add("tachado");
      break; // Salimos del bucle una vez que encontramos al amigo
    }
  }
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
  participantes = []; // Resetea el array de participantes

  // Limpiar la lista de nombres mostrada en el HTML
  actualizarListaAmigos();

  document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista de amigos en la interfaz

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
