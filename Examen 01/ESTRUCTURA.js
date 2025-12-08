// ============================================
// ESTRUCTURA DEL PROYECTO - DOCUMENTACIÓN
// ============================================

/*
ORGANIZACIÓN MODULAR DEL PROYECTO

📦 Examen 01
│
├── 📄 index.html                 # Punto de entrada - Carga todos los módulos
├── 📄 Readme.md                  # Documentación del proyecto
│
├── 📁 css/
│   └── 📄 styles.css            # Estilos generales del canvas
│
├── 📁 js/
│   │
│   ├── 📄 main.js               # ⭐ ARCHIVO PRINCIPAL
│   │                            # - Inicializa el motor Babylon.js
│   │                            # - Crea la escena
│   │                            # - Orquesta todos los módulos
│   │
│   ├── 📁 config/               # ⚙️ CONFIGURACIÓN
│   │   ├── 📄 config.js        # Constantes del juego (CONFIG, COLORS)
│   │   └── 📄 gameState.js     # Estado global (game object)
│   │
│   ├── 📁 utils/                # 🛠️ UTILIDADES
│   │   └── 📄 helpers.js       # Funciones helper reutilizables
│   │
│   ├── 📁 scene/                # 🏙️ MÓDULOS DE ESCENA
│   │   ├── 📄 skybox.js        # Crear skybox del entorno
│   │   ├── 📄 roads.js         # Crear carreteras y curva
│   │   ├── 📄 sidewalks.js     # Crear aceras
│   │   ├── 📄 decoration.js    # Crear árboles, farolas, pasto
│   │   ├── 📄 roadMarks.js     # Crear líneas y bordes
│   │   ├── 📄 houses.js        # Crear casas
│   │   └── 📄 walls.js         # Crear paredes de colisión
│   │
│   └── 📁 game/                 # 🎮 LÓGICA DEL JUEGO
│       ├── 📄 patient.js       # Sistema de pacientes y hologramas
│       ├── 📄 ambulance.js     # Movimiento de la ambulancia
│       ├── 📄 input.js         # Controles del usuario
│       ├── 📄 hud.js           # Interfaz de usuario
│       └── 📄 modelLoader.js   # Carga de modelos 3D
│
└── 📁 modelos/                  # 🎨 ASSETS 3D
    ├── 📁 ambulancia/
    ├── 📁 hospital/
    └── 📁 persona/


FLUJO DE EJECUCIÓN:
===================

1. index.html carga en orden:
   ┌─────────────────────────────────────┐
   │ 1. Librerías Babylon.js (CDN)      │
   │ 2. Configuración (config, state)   │
   │ 3. Utilidades (helpers)            │
   │ 4. Módulos de escena               │
   │ 5. Módulos de juego                │
   │ 6. main.js (inicialización)        │
   └─────────────────────────────────────┘

2. main.js ejecuta:
   ┌─────────────────────────────────────┐
   │ → createScene()                     │
   │   ├── Configura cámara e iluminación│
   │   ├── Llama a módulos de escena    │
   │   ├── Crea HUD                      │
   │   ├── Carga modelos 3D             │
   │   └── Configura controles          │
   │                                     │
   │ → engine.runRenderLoop()            │
   │   └── Renderiza cada frame         │
   └─────────────────────────────────────┘


VENTAJAS DE ESTA ARQUITECTURA:
================================

✅ Separación de responsabilidades
✅ Código modular y mantenible
✅ Fácil de extender con nuevas características
✅ Debugging más sencillo
✅ Reutilización de código
✅ Trabajo en equipo facilitado
✅ Testing más simple
✅ Carga ordenada de dependencias


CONVENCIONES DE NOMBRES:
=========================

Funciones:
  - crearXXX()     → Crea y retorna objetos de la escena
  - setupXXX()     → Configura sistemas del juego
  - cargarXXX()    → Carga assets externos

Variables globales:
  - CONFIG         → Constantes de configuración
  - COLORS         → Paleta de colores
  - game           → Estado del juego

Parámetros:
  - sceneRef       → Referencia a la escena de Babylon
  - xxxMat         → Materiales
  - xxxPath        → Rutas/caminos

*/
