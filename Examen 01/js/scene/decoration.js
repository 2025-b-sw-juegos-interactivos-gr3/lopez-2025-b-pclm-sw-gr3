// MÓDULO: DECORACIÓN (Árboles, farolas, pasto)
function crearArbolYFarola(sceneRef, xArbol, xFarola, zBase, index, prefix) {
    // Árbol
    const trunk = BABYLON.MeshBuilder.CreateCylinder("trunk_" + prefix + index, { diameter: 0.3, height: 2 }, sceneRef);
    trunk.position = new BABYLON.Vector3(xArbol, 1, zBase);
    trunk.material = crearMaterial("trunkMat_" + prefix + index, COLORS.TREE_TRUNK, sceneRef);

    const leaves = BABYLON.MeshBuilder.CreateSphere("leaves_" + prefix + index, { diameter: 2 }, sceneRef);
    leaves.position = new BABYLON.Vector3(xArbol, 2.5, zBase);
    leaves.material = crearMaterial("leavesMat_" + prefix + index, COLORS.TREE_LEAVES, sceneRef);

    // Farola
    const pole = BABYLON.MeshBuilder.CreateCylinder("pole_" + prefix + index, { diameter: 0.1, height: 3 }, sceneRef);
    pole.position = new BABYLON.Vector3(xFarola, 1.5, zBase + 2);
    pole.material = crearMaterial("poleMat_" + prefix + index, COLORS.LAMP_POLE, sceneRef);

    const lamp = BABYLON.MeshBuilder.CreateSphere("lamp_" + prefix + index, { diameter: 0.3 }, sceneRef);
    lamp.position = new BABYLON.Vector3(xFarola, 3, zBase + 2);
    lamp.material = crearMaterial("lampMat_" + prefix + index, COLORS.LAMP_LIGHT, sceneRef);
}

function crearDecoracion(sceneRef) {
    // Pasto
    const grass = BABYLON.MeshBuilder.CreateGround("grass",
        { width: CONFIG.GRASS_WIDTH, height: CONFIG.GRASS_HEIGHT }, sceneRef);
    const grassMat = crearMaterial("grassMat", COLORS.GRASS, sceneRef);
    grassMat.specularColor = new BABYLON.Color3(0, 0, 0);
    grass.material = grassMat;
    grass.position.x = CONFIG.GRASS_POS.x;
    grass.position.z = CONFIG.GRASS_POS.z;
    grass.position.y = CONFIG.GRASS_POS.y;

    // Árboles y farolas en ambas carreteras
    for (let i = 0; i < CONFIG.TREES_COUNT; i++) {
        const z = i * 10;

        // Carretera 1
        crearArbolYFarola(sceneRef, CONFIG.TREE_POS.x, CONFIG.LAMP_POS.x, z, i, "c1");

        // Carretera 2
        crearArbolYFarola(sceneRef, 15, 45, z, i, "c2");
    }
}
