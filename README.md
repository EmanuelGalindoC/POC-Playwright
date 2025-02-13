### Documentación del POC de Automatización de Búsqueda en YouTube con Playwright

#### **Objetivo**
El objetivo de este POC es demostrar la capacidad de Playwright para automatizar interacciones con un navegador web. En este caso, la automatización consiste en realizar una búsqueda en YouTube mediante un valor ingresado en un formulario web. Este ejemplo servirá como base para una futura automatización más compleja en la que se utilizará Playwright para realizar interacciones con el sistema del Ministerio de Educación.

#### **Por qué Playwright es Mejor que Selenium en este Caso**
Para este POC, se ha investigado dos tecnologias, Selenium y Playwright, a continuación se menciona porqué Playwright resulta ser superior en este caso:

1. **Rendimiento Mejorado**:
   Playwright está diseñado para ofrecer un rendimiento superior y mayor estabilidad en las interacciones con el navegador, especialmente cuando se trata de pruebas en aplicaciones web dinámicas. Selenium, por otro lado, puede ser más lento y menos eficiente debido a su arquitectura más antigua y la dependencia de un servidor intermediario (como el `webdriver`).

2. **Compatibilidad Multinavegador**:
   Playwright ofrece compatibilidad nativa con múltiples navegadores: Chromium, Firefox y WebKit. Esto permite realizar pruebas en una variedad de entornos de navegador de manera más sencilla, sin la necesidad de configuraciones adicionales. Selenium también soporta múltiples navegadores, pero la configuración puede ser más compleja y menos fluida en comparación.

3. **Soporte para Funciones Modernas**:
   Playwright proporciona soporte mejorado para interactuar con páginas web modernas y dinámicas, como aquellas con AJAX, WebSockets, etc. Esto lo hace ideal para pruebas en aplicaciones con interfaces interactivas y dependientes de JavaScript, mientras que Selenium puede tener dificultades para manejar algunas de estas tecnologías de forma fluida.

4. **Soporte Nativo para Características de Última Generación**:
   Playwright soporta de manera nativa características como la captura de pantallas, grabación de video de la sesión de pruebas, y la posibilidad de interceptar y modificar peticiones de red. Estas características están diseñadas para pruebas más sofisticadas y robustas.

#### **Arquitectura del Proyecto**

El proyecto se compone de dos partes principales:

1. **Backend (Node.js con Express)**:
   - El backend usa `Express` para crear un servidor API REST que recibe solicitudes de búsqueda y automatiza la interacción con YouTube a través de Playwright.
   - Recibe una solicitud `POST` con el término de búsqueda y usa Playwright para abrir el navegador, navegar a YouTube, y ejecutar la búsqueda.

2. **Frontend (React)**:
   - El frontend es una aplicación simple en React que permite al usuario ingresar un número en un campo de texto y enviar una solicitud al backend para realizar la búsqueda en YouTube.
   - Utiliza `fetch` para enviar la solicitud al servidor y mostrar una alerta de éxito o error según el resultado.

#### **Pasos para Instalar el Proyecto**

1. **Clonar el repositorio desde GitHub**:
   ```bash
   git clone https://github.com/EmanuelGalindoC/POC-Playwright.git
   cd POC-Playwright
   ```

2. **Instalar dependencias para el servidor (Backend)**:
   - Navega al directorio del backend y ejecuta el siguiente comando para instalar las dependencias necesarias.
   ```bash
   cd backend
   npm install
   ```

3. **Instalar dependencias para el cliente (Frontend)**:
   - Navega al directorio del frontend y ejecuta el siguiente comando para instalar las dependencias necesarias.
   ```bash
   cd frontend
   npm install
   ```

4. **Iniciar el servidor (Backend)**:
   - En el directorio del backend, ejecuta el siguiente comando para iniciar el servidor Express.
   ```bash
   node server.js
   ```
   Esto iniciará el servidor en `http://localhost:3001`.

5. **Iniciar la aplicación React (Frontend)**:
   - En el directorio del frontend, ejecuta el siguiente comando para iniciar la aplicación React.
   ```bash
   npm run dev
   ```
   Esto abrirá la aplicación en `http://localhost:5173`.

6. **Probar la aplicación**:
   - Accede a `http://localhost:5173` en tu navegador.
   - Ingresa un número en el campo de búsqueda y haz clic en "Search on YouTube". Esto hará que el backend ejecute Playwright, abra YouTube y realice la búsqueda.


#### **Conclusiones**

- **Playwright como Herramienta de Pruebas**: Este POC demuestra que Playwright es una herramienta moderna, eficiente y poderosa para la automatización de pruebas en aplicaciones web. Su rendimiento y flexibilidad hacen que sea una opción preferible sobre herramientas más antiguas como Selenium, especialmente cuando se trata de interactuar con aplicaciones web dinámicas y modernas.

- **Potencial para Automatización de Procesos**: Si bien este ejemplo se limita a una búsqueda en YouTube, la misma infraestructura puede adaptarse fácilmente para automatizar procesos más complejos, como la subida de notas de estudiantes al sistema del Ministerio de Educación. Playwright puede interactuar con interfaces dinámicas, lo que lo hace ideal para este tipo de tareas.

- **Simplicidad y Flexibilidad**: La integración de Playwright con Express y React permite una solución simple pero poderosa para automatizar tareas. Este enfoque modular es fácil de mantener y escalar.

En resumen, este POC demuestra la viabilidad de Playwright como una herramienta para automatización web en proyectos de prueba y producción, y proporciona una base sólida para futuras implementaciones en la automatización de procesos de carga de datos en el sistema del Ministerio de Educación.
