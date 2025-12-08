// MÓDULO: HUD Y UI
function crearHUD(sceneRef) {
    const gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    
    // Instrucciones
    const instrucciones = new BABYLON.GUI.TextBlock();
    instrucciones.text = "WASD para mover | Espacio para recoger/entregar";
    instrucciones.color = "black";
    instrucciones.fontSize = 24;
    instrucciones.top = "-45%";
    gui.addControl(instrucciones);

    // Caja del contador
    const hudBox = new BABYLON.GUI.Rectangle();
    hudBox.width = "220px";
    hudBox.height = "50px";
    hudBox.cornerRadius = 8;
    hudBox.color = "#FFD700";
    hudBox.thickness = 2;
    hudBox.background = "#222";
    hudBox.top = "10px";
    hudBox.left = "10px";
    hudBox.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    hudBox.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    gui.addControl(hudBox);

    // Texto del contador
    const contadorText = new BABYLON.GUI.TextBlock();
    contadorText.text = "Pacientes entregados: 0";
    contadorText.color = "yellow";
    contadorText.fontSize = 18;
    hudBox.addControl(contadorText);
    game.contadorText = contadorText;
}
