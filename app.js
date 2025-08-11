// --- Declaración de Variables Globales ---

// Array principal para almacenar los nombres de todos los amigos agregados.
let amigos = [];
// Array temporal para almacenar los nombres disponibles para el sorteo en una ronda.
let participantes = [];

// --- Funciones del Proyecto ---

/**
 * Muestra un mensaje de feedback dinámico en la interfaz por 3 segundos.
 * @param {string} texto - El mensaje a mostrar.
 * @param {string} tipo - El tipo de mensaje ('info', 'error', 'exito') para aplicar estilos CSS.
 */
function mostrarMensaje(texto, tipo = "info") {
  let elementoMensaje = document.getElementById("mensaje");
  elementoMensaje.textContent = texto; // Limpia cualquier clase de estilo de mensajes previa.

  elementoMensaje.classList.remove("info", "error", "exito"); // Agrega la clase de estilo según el tipo de mensaje.
  elementoMensaje.classList.add(tipo); // Hace el mensaje visible.

  elementoMensaje.style.opacity = "1"; // Oculta el mensaje después de 3 segundos usando un temporizador.

  setTimeout(() => {
    elementoMensaje.style.opacity = "0";
  }, 3000);
}

/**
 * Agrega un amigo a la lista, con validaciones de entrada.
 */
function agregarAmigo() {
  // Captura el valor del campo de entrada de texto.
  let nombreAmigo = document.getElementById("amigo").value; // Validación 1: El campo no puede estar vacío.

  if (nombreAmigo.trim() === "") {
    mostrarMensaje("Por favor, inserte un nombre.", "error");
    return;
  } // Elimina espacios en blanco al inicio y al final del nombre.

  nombreAmigo = nombreAmigo.trim();
  let nombreAmigoLowerCase = nombreAmigo.toLowerCase(); // Validación 2: El nombre no puede estar repetido.

  if (
    amigos.some(
      (amigoExistente) => amigoExistente.toLowerCase() === nombreAmigoLowerCase
    )
  ) {
    mostrarMensaje(
      "¡Ese nombre ya ha sido agregado! Por favor, inserte un nombre diferente.",
      "error"
    );
    document.getElementById("amigo").value = "";
    return;
  } // Agrega el nuevo nombre a los arrays de amigos y participantes.

  amigos.push(nombreAmigo);
  participantes.push(nombreAmigo);

  document.getElementById("amigo").value = ""; // Muestra un mensaje de éxito y actualiza la lista visual.

  mostrarMensaje("¡Amigo agregado con éxito!", "exito");
  actualizarListaAmigos();
}

/**
 * Actualiza la lista de amigos en la interfaz HTML.
 */
function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos"); // Limpia todo el contenido de la lista para volver a renderizarla.
  listaAmigos.innerHTML = ""; // Recorre el array de amigos para crear un elemento de lista por cada nombre.

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i]; // Crea y configura el botón para eliminar nombres.

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add("boton-eliminar"); // Asigna un evento 'onclick' al botón para llamar a la función 'excluirAmigo'.

    botonEliminar.onclick = function () {
      excluirAmigo(i);
    }; // Añade el botón al elemento de la lista y el elemento de la lista al HTML.

    li.appendChild(botonEliminar);
    listaAmigos.appendChild(li);
  }
}

/**
 * Realiza el sorteo de un amigo secreto y actualiza la interfaz.
 */
function sortearAmigo() {
  // Lógica para verificar el estado de la lista antes de sortear.
  if (participantes.length === 0) {
    if (amigos.length === 0) {
      mostrarMensaje("Agregue al menos un amigo para sortear.", "error");
    } else {
      mostrarMensaje("Ya se han sorteado todos los participantes.", "info");
    }
    return;
  } // Genera un índice aleatorio para seleccionar un participante.

  let indiceAleatorio = Math.floor(Math.random() * participantes.length);
  let amigoSorteado = participantes[indiceAleatorio]; // Elimina al amigo sorteado del array de participantes para que no vuelva a salir.

  participantes.splice(indiceAleatorio, 1); // Encuentra el elemento de lista del amigo sorteado en el HTML.

  let listaHTML = document.getElementById("listaAmigos");
  let listaItems = listaHTML.getElementsByTagName("li");

  for (let i = 0; i < listaItems.length; i++) {
    // Extrae el nombre del elemento de lista.
    let nombreLi = listaItems[i].firstChild.textContent;
    if (nombreLi.trim() === amigoSorteado.trim()) {
      // Añade una clase para la animación de selección.
      listaItems[i].classList.add("sorteado-animacion"); // Usa un temporizador para tachar el nombre después de la animación.
      setTimeout(() => {
        listaItems[i].classList.add("tachado");
        listaItems[i].classList.remove("sorteado-animacion");
      }, 1500);

      break;
    }
  } // Muestra el resultado del sorteo en la interfaz.

  let resultadoHTML = document.getElementById("resultado");
  resultadoHTML.innerHTML = `¡Tu amigo secreto es: ${amigoSorteado}!`;
}

/**
 * Elimina un amigo de la lista por su índice.
 * @param {number} indice - El índice del amigo a eliminar en el array.
 */
function excluirAmigo(indice) {
  let amigoExcluido = amigos[indice]; // Elimina el amigo de ambos arrays.
  amigos.splice(indice, 1);
  let indiceParticipante = participantes.indexOf(amigoExcluido);
  if (indiceParticipante !== -1) {
    participantes.splice(indiceParticipante, 1);
  } // Actualiza la interfaz, muestra un mensaje de éxito y limpia el resultado.
  actualizarListaAmigos();
  mostrarMensaje("Amigo eliminado con éxito.", "exito");
  document.getElementById("resultado").innerHTML = "";
}

/**
 * Reinicia la aplicación a su estado inicial.
 */
function reiniciar() {
  // Vacia ambos arrays.
  amigos = [];
  participantes = []; // Actualiza la interfaz para reflejar los arrays vacíos.

  actualizarListaAmigos(); // Limpia el resultado del sorteo y el campo de entrada.

  document.getElementById("resultado").innerHTML = "";
  document.getElementById("amigo").value = ""; // Muestra un mensaje de reinicio.

  mostrarMensaje("Aplicación reiniciada. ¡Listo para comenzar!", "info");
}

// --- Eventos de Interacción ---

// Captura el evento de presionar la tecla 'Enter' en el campo de entrada.
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
