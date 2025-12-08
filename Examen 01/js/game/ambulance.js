// MÓDULO: CONTROL DE AMBULANCIA
function setupAmbulanceMovement(sceneRef) {
    sceneRef.onBeforeRenderObservable.add(() => {
        const ambulancia = game.ambulancia;
        if (!ambulancia) return;

        if (ambulancia.rotationQuaternion) {
            ambulancia.rotation = ambulancia.rotationQuaternion.toEulerAngles();
            ambulancia.rotationQuaternion = null;
        }

        const rotY = ambulancia.rotation.y;
        const forward = new BABYLON.Vector3(Math.sin(rotY), 0, Math.cos(rotY));
        let movimiento = new BABYLON.Vector3(0, 0, 0);

        if (game.inputMap["w"]) movimiento = movimiento.add(forward.scale(CONFIG.AMBULANCE_SPEED));
        if (game.inputMap["s"]) movimiento = movimiento.add(forward.scale(-CONFIG.AMBULANCE_SPEED));
        if (game.inputMap["a"]) ambulancia.rotation.y -= CONFIG.AMBULANCE_ROTATION_SPEED;
        if (game.inputMap["d"]) ambulancia.rotation.y += CONFIG.AMBULANCE_ROTATION_SPEED;

        ambulancia.moveWithCollisions(movimiento);
        
        // Límites del escenario
        if (ambulancia.position.x < CONFIG.AMBULANCE_BOUNDS.minX) ambulancia.position.x = CONFIG.AMBULANCE_BOUNDS.minX;
        if (ambulancia.position.x > CONFIG.AMBULANCE_BOUNDS.maxX) ambulancia.position.x = CONFIG.AMBULANCE_BOUNDS.maxX;
        if (ambulancia.position.z < CONFIG.AMBULANCE_BOUNDS.minZ) ambulancia.position.z = CONFIG.AMBULANCE_BOUNDS.minZ;
        if (ambulancia.position.z > CONFIG.AMBULANCE_BOUNDS.maxZ) ambulancia.position.z = CONFIG.AMBULANCE_BOUNDS.maxZ;
    });
}
