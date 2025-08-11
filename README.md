# Challenge ONE | Lógica de Programación: Amigo Secreto

Este repositorio contiene mi implementación del desafío "Amigo Secreto" propuesto por Alura Latam y Oracle ONE.

El objetivo de este proyecto es desarrollar una aplicación web sencilla que permite a los usuarios **gestionar una lista de participantes** y realizar un **sorteo aleatorio** para determinar un "amigo secreto".

### **🔗 Ver en vivo la aplicación:** [https://challenge-amigo-secreto-joseph-gama.vercel.app/](https://challenge-amigo-secreto-joseph-gama.vercel.app/)

---

## Características

Esta aplicación incluye las siguientes funcionalidades:

- **Gestión de Nombres:**
  - **Agregar Amigos:** Permite añadir nombres de participantes a una lista.
  - **Eliminar Amigos:** Permite quitar nombres individuales de la lista en caso de error.
  - **Validación de Entrada:** Asegura que no se añadan nombres vacíos o que solo contengan espacios.
  - **Validación de Duplicados:** Evita que se agreguen nombres repetidos en la lista.
  - **Visualización de Lista:** Muestra claramente todos los nombres agregados en la interfaz.
- **Funcionalidades de Sorteo:**
  - **Sorteo Aleatorio:** Realiza una selección al azar de un "amigo secreto" de la lista de participantes.
  - **Manejo de Lista Vacía:** Muestra un mensaje dinámico si intentas sortear sin haber agregado nombres o cuando ya se sortearon todos los participantes.
- **Control de Sesión:**
  - **Feedback Visual:** Utiliza mensajes dinámicos en la interfaz para informar sobre el estado de la aplicación (éxito, error, etc.) en lugar de alertas intrusivas.
  - **Botón de Reinicio:** Permite limpiar la lista de amigos y el resultado del sorteo para empezar una nueva sesión.

---

## Tecnologías Utilizadas

- **JavaScript:** Contiene toda la lógica principal de la aplicación, incluyendo la gestión de nombres, validaciones y el sorteo.
- **HTML:** Proporciona la estructura base de la página web (suministrada como parte del desafío).
- **CSS:** Define los estilos visuales y el diseño de la interfaz de usuario (suministrado como parte del desafío).

---

## Cómo Usar la Aplicación

Tienes dos maneras de usar esta aplicación:

### Opción 1: Ver y Usar en Línea (Sin necesidad de instalar nada)

1.  Simplemente haz clic en el siguiente enlace para ver la aplicación funcionando en tu navegador:
    [**https://challenge-amigo-secreto-joseph-gama.vercel.app/**](https://challenge-amigo-secreto-joseph-gama.vercel.app/)

### Opción 2: Clonar y Abrir

1.  **Clonar el Repositorio:**
    Abre tu terminal o línea de comandos y ejecuta el siguiente comando para descargar el proyecto:

    ```bash
    git clone [https://github.com/Galking-droid/challenge-amigo-secreto-joseph-gama.git](https://github.com/Galking-droid/challenge-amigo-secreto-joseph-gama.git)
    ```

2.  **Acceder al Directorio del Proyecto:**
    Navega al directorio del proyecto que acabas de clonar:

    ```bash
    cd challenge-amigo-secreto-joseph-gama
    ```

3.  **Abrir en el Navegador:**
    Una vez dentro del directorio, abre el archivo `index.html` en tu navegador web preferido. Puedes hacerlo haciendo doble clic en el archivo o arrastrándolo a la ventana del navegador.

### Interactuar con la Aplicación

Una vez abierta la aplicación en tu navegador:

- **Añadir Nombres:** Escribe un nombre en el campo de texto y haz clic en el botón **"Añadir"** (o presiona Enter). Recibirás un mensaje de éxito o de error si el nombre ya existe.
- **Eliminar Nombres:** Si necesitas quitar un nombre de la lista, simplemente haz clic en la **"X"** que aparece junto a él.
- **Sortear Amigo:** Cuando tengas varios nombres, haz clic en el botón **"Sortear amigo"**. El nombre sorteado **tendrá una animación visual** antes de quedar tachado. La aplicación no sorteará nombres repetidos en la misma sesión y te informará cuando ya se hayan sorteado todos.
- **Reiniciar:** Si quieres comenzar una nueva sesión, haz clic en el botón **"Reiniciar"** para limpiar la lista y el resultado.
