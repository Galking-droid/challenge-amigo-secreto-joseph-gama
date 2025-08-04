# Challenge ONE | Lógica de Programación: Amigo Secreto

Este repositorio contiene mi implementación del desafío "Amigo Secreto" propuesto por Alura Latam y Oracle ONE.

El objetivo de este proyecto es desarrollar una aplicación web sencilla que permite a los usuarios **gestionar una lista de participantes** y realizar un **sorteo aleatorio** para determinar un "amigo secreto".

---

## Características

Esta aplicación incluye las siguientes funcionalidades:

* **Gestión de Nombres:**
    * **Agregar Amigos:** Permite añadir nombres de participantes a una lista.
    * **Validación de Entrada:** Asegura que no se añadan nombres vacíos o que solo contengan espacios.
    * **Validación de Duplicados:** Evita que se agreguen nombres repetidos en la lista.
    * **Visualización de Lista:** Muestra claramente todos los nombres agregados en la interfaz.
* **Funcionalidades de Sorteo:**
    * **Sorteo Aleatorio:** Realiza una selección al azar de un "amigo secreto" de la lista de participantes.
    * **Manejo de Lista Vacía:** Alerta al usuario si intenta sortear sin haber agregado nombres.
* **Control de Sesión:**
    * **Botón de Reinicio:** Permite limpiar la lista de amigos y el resultado del sorteo para empezar una nueva sesión.

---

## Tecnologías Utilizadas

* **JavaScript:** Contiene toda la lógica principal de la aplicación, incluyendo la gestión de nombres, validaciones y el sorteo.
* **HTML:** Proporciona la estructura base de la página web (suministrada como parte del desafío).
* **CSS:** Define los estilos visuales y el diseño de la interfaz de usuario (suministrado como parte del desafío).

---

## Cómo Usar la Aplicación

Tienes dos maneras de usar esta aplicación:

### Opción 1: Clonar y Abrir

1.  **Clonar el Repositorio:**
    Abre tu terminal o línea de comandos y ejecuta el siguiente comando para descargar el proyecto:
    ```bash
    git clone https://github.com/Galking-droid/challenge-amigo-secreto-joseph-gama.git
    ```

2.  **Acceder al Directorio del Proyecto:**
    Navega al directorio del proyecto que acabas de clonar:
    ```bash
    cd challenge-amigo-secreto-joseph-gama
    ```

3.  **Abrir en el Navegador:**
    Una vez dentro del directorio, abre el archivo `index.html` en tu navegador web preferido. Puedes hacerlo haciendo doble clic en el archivo o arrastrándolo a la ventana del navegador.

### Opción 2: Descargar y Abrir

1.  **Descargar el Proyecto:**
    * Ve a la página del repositorio en GitHub: https://github.com/Galking-droid/challenge-amigo-secreto-joseph-gama.git
    * Haz clic en el botón verde **`< > Code`** (Código).
    * Selecciona **`Download ZIP`** (Descargar ZIP).
    * Descomprime el archivo ZIP en una carpeta de tu elección en tu computadora.

2.  **Abrir en el Navegador:**
    Dentro de la carpeta descomprimida, busca el archivo `index.html` y ábrelo directamente en tu navegador web (haciendo doble clic o arrastrándolo).

### Interactuar con la Aplicación

Una vez abierta la aplicación en tu navegador:

* **Añadir Nombres:** Escribe un nombre en el campo de texto y haz clic en el botón **"Añadir"** (o presiona Enter).
* **Sortear Amigo:** Cuando tengas varios nombres, haz clic en el botón **"Sortear amigo"** para ver el resultado.
* **Reiniciar:** Si quieres comenzar una nueva sesión, haz clic en el botón **"Reiniciar"** para limpiar la lista y el resultado.


