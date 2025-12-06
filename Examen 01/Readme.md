# 🚑 Juego de Ambulancia 3D – Babylon.js

Este proyecto es un **simulador 3D interactivo** desarrollado con **Babylon.js**, donde controlas una ambulancia que debe recoger pacientes generados aleatoriamente y llevarlos al hospital para ganar puntos. Todo el proyecto funciona desde un único archivo **HTML** usando JavaScript incrustado, sin necesidad de servidores o archivos externos adicionales (salvo los modelos 3D).

---

## 📝 Características del Proyecto

- Mundo 3D completo construido con Babylon.js  
- Carreteras rectas y una carretera curva generada con extrusión  
- Aceras, pasto, casas, árboles y farolas decorativas  
- Modelos 3D importados: ambulancia, hospital y paciente  
- Sistema de recogida y entrega de pacientes  
- Holograma animado con anillos y luz de tipo sci-fi  
- Cámara de seguimiento con cinemática  
- Colisiones físicas y paredes invisibles  
- HUD con contador de pacientes  
- Código refactorizado y organizado  

---

## 📁 Estructura del Proyecto

index.html
modelos/
├─ ambulancia/
├─ persona/
└─ hospital/

El archivo **index.html** contiene todo el código:

- creación del mundo  
- lógica de juego  
- animaciones  
- holograma  
- controles  
- HUD  
- carga de modelos  

---

## ▶️ Cómo Ejecutarlo

1. Descarga `index.html` y la carpeta `modelos/`
2. Abre `index.html` haciendo doble clic.
3. El juego funcionará automáticamente en tu navegador.

> Recomendado: Chrome, Edge o Firefox (con WebGL habilitado).

---

## 🎮 Controles

| Tecla | Acción |
|------|--------|
| **W** | Avanzar |
| **S** | Retroceder |
| **A** | Girar a la izquierda |
| **D** | Girar a la derecha |
| **ESPACIO** | Recoger o entregar paciente |

---

## 🌆 Mundo 3D

El escenario está compuesto por:

- 2 carreteras rectas
- 1 carretera curva generada mediante ExtrudeShape
- Aceras rectas y curvas
- Casas a ambos lados de las carreteras
- Árboles, farolas y pasto
- Un skybox para simular el cielo
- Un hospital al fondo del mapa
- Líneas amarillas y bordes blancos

---

## 🧠 Lógica del Juego

### ✔ Generación del Paciente
- Aparece en una de las dos carreteras.
- Lado aleatorio (izquierda/derecha).
- Posición Z aleatoria.
- Se marca con un holograma animado:
  - anillos giratorios
  - pulso y transparencia
  - luz azul tipo sci-fi

### ✔ Recoger Paciente
Si la ambulancia está cerca:

- El paciente se coloca dentro de la ambulancia.
- El holograma desaparece.

### ✔ Entregar Paciente
En el hospital:

- El paciente baja y se orienta hacia el hospital.
- Se suma al contador.
- Se genera un nuevo paciente.

---

## 🎇 Holograma

Cada paciente se resalta con:

- 4 anillos animados de luz
- rotación continua
- cambios de escala
- variación de transparencia
- una luz spotlight azul desde abajo

Además, se realiza una cinemática de cámara:
1. la cámara mira al paciente  
2. se acerca  
3. vuelve suavemente a la ambulancia  

---

## 📦 Optimización y Refactorización

Se redujo el código repetitivo mediante funciones reutilizables:

- `crearArbolYFarola()`
- `crearCasaConTecho()`
- Bucles compactos para carreteras, líneas y bordes
- Agrupación de variables en `game{}`

Esto mejora:

- claridad  
- mantenimiento  
- legibilidad  
- escalabilidad  

---

## 🔧 Requisitos

- Navegador moderno con WebGL
- Hardware mínimo con GPU integrada

---

## 📜 Licencia

Proyecto de uso libre para fines educativos y personales.

---

## 👤 Autor

Desarrollado como proyecto educativo para la creación de videojuegos y mundos 3D en Web mediante **Babylon.js**.

