
# 🚑 Juego de Ambulancia 3D – Babylon.js

Simulador 3D educativo creado con Babylon.js. Controlas una ambulancia que debe recoger pacientes y llevarlos al hospital. El proyecto usa modelos 3D en la carpeta `modelos/` y se ejecuta directamente en el navegador.

---

## 📝 Características

- Mundo 3D construido con Babylon.js
- Carreteras (rectas y curva generada por extrusión)
- Aceras, pasto, casas, árboles y farolas
- Modelos 3D importados: ambulancia, hospital y persona
- Sistema de recogida y entrega de pacientes
- Holograma visual para destacar pacientes
- Cámara de seguimiento y pequeñas cinemáticas
- HUD simple con contador de pacientes

---

## 📁 Estructura del proyecto

Raíz del proyecto:

- `index.html` — página principal que carga la escena y los scripts
- `css/` — estilos (p. ej. `css/styles.css`)
- `js/` — scripts JavaScript del juego (escena, lógica, utilidades)
- `modelos/` — modelos 3D (subcarpetas: `ambulancia/`, `hospital/`, `persona/`)

Ejemplo:

```
index.html
css/
  └─ styles.css
js/
  ├─ config/
  ├─ scene/
  └─ game/
modelos/
  ├─ ambulancia/
  ├─ hospital/
  └─ persona/
```

---

## ▶️ Cómo ejecutar

1. El proyecto carga Babylon.js y complementos desde CDNs, por lo que **es necesaria conexión a internet** para cargar esas librerías.
2. Los modelos 3D (.gltf/.bin/.png) y la carga mediante GLTFLoader o peticiones XHR/fetch requieren que los archivos se sirvan por HTTP(S); abrir `index.html` con doble clic (protocolo `file://`) normalmente impide la carga de modelos.
3. Recomendado (desarrollo): usar la extensión **Live Server** de Visual Studio Code. Pasos rápidos:
  - Abre la carpeta del proyecto en VS Code.
  - Haz clic en "Go Live" en la barra de estado (o botón derecho > "Open with Live Server").
  - Live Server abrirá la URL local (por ejemplo `http://127.0.0.1:5500/`) donde la escena cargará correctamente.
4. Alternativas: cualquier servidor estático local (p. ej. `http-server` de npm o `npx serve .`) funciona igualmente.
5. Navegadores recomendados: Chrome, Edge o Firefox (versiones modernas con WebGL habilitado). Revisa la consola del navegador si los modelos no cargan.

---

## 🎮 Controles

- W: Avanzar
- S: Retroceder
- A: Girar a la izquierda
- D: Girar a la derecha
- Espacio: Recoger / entregar paciente

---

## 🔧 Requisitos

- Navegador moderno con WebGL habilitado
- Conexión a internet si el proyecto carga librerías desde CDNs
- GPU integrada o dedicada (cualquier equipo moderno debe funcionar)

---

## 🛠️ Notas para desarrolladores

- Los scripts principales están en `js/`. Mantén el orden de carga correcto si editas `index.html`.
- Los modelos 3D están en `modelos/`; si reemplazas modelos asegúrate de mantener las rutas usadas por el cargador.
- Para depuración, abre la consola del navegador y revisa errores de carga o referencias.

---

## 📜 Licencia

Uso libre para fines educativos y personales.

---

## 👤 Autor

Proyecto educativo para práctica de desarrollo 3D en la web con Babylon.js.


