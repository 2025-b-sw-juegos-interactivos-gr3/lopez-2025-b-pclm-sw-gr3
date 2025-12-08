// ARCHIVO PRINCIPAL - INICIALIZACIÓN DEL JUEGO
const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

function createScene() {
    const sceneRef = new BABYLON.Scene(engine);
    sceneRef.collisionsEnabled = true;
    game.scene = sceneRef;

    // Configurar cámara
    const camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(0, 10, -20), sceneRef);
    camera.radius = 30;
    camera.heightOffset = 8;
    camera.rotationOffset = 180;
    camera.attachControl(canvas, true);
    
    if (sceneRef.activeCamera) {
        sceneRef.activeCamera.checkCollisions = true;
        sceneRef.activeCamera.applyGravity = false;
    }

    // Configurar iluminación
    sceneRef.clearColor = new BABYLON.Color3(0, 0, 0);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), sceneRef);
    light.intensity = CONFIG.LIGHT_INTENSITY;

    // Crear escenario
    crearSkybox(sceneRef);
    const { roadMat } = crearCarreteras(sceneRef);
    const { curvePath } = crearCurva(sceneRef, roadMat);
    crearAceras(sceneRef, curvePath);
    crearDecoracion(sceneRef);
    crearLineasYBordes(sceneRef, curvePath);
    crearCasas(sceneRef);
    crearParedes(sceneRef, curvePath);

    // Crear HUD
    crearHUD(sceneRef);

    // Cargar modelos 3D
    cargarModelos(sceneRef, camera);

    // Configurar controles
    setupInput(sceneRef);
    setupAmbulanceMovement(sceneRef);

    // Animación del holograma
    sceneRef.onBeforeRenderObservable.add(() => {
        animarHolograma();
    });

    return sceneRef;
}

// Iniciar el juego
game.scene = createScene();
engine.runRenderLoop(() => game.scene.render());
window.addEventListener("resize", () => engine.resize());
