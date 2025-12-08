// UTILIDADES HELPER
function crearMaterial(nombre, color, sceneRef) {
    const mat = new BABYLON.StandardMaterial(nombre, sceneRef);
    mat.diffuseColor = color;
    return mat;
}

function crearParedColision(nombre, dimensiones, posicion, sceneRef, rotY = 0) {
    const pared = BABYLON.MeshBuilder.CreateBox(nombre, dimensiones, sceneRef);
    pared.position = posicion;
    if (rotY) pared.rotation = new BABYLON.Vector3(0, rotY, 0);
    pared.isVisible = false;
    pared.checkCollisions = true;
    return pared;
}
