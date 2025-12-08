// MÓDULO: CASAS
function crearCasaConTecho(sceneRef, x, z, index, prefix) {
    const house = BABYLON.MeshBuilder.CreateBox(`house_${prefix}_${index}`,
        { width: 4, height: 2, depth: 4 }, sceneRef);
    house.position = new BABYLON.Vector3(x, 1, z);
    house.material = crearMaterial(`houseMat_${prefix}_${index}`, COLORS.HOUSE_WALL, sceneRef);

    const roof = BABYLON.MeshBuilder.CreateBox(`roof_${prefix}_${index}`,
        { width: 4.2, height: 1, depth: 4.2 }, sceneRef);
    roof.position = new BABYLON.Vector3(x, 2.1, z);
    roof.material = crearMaterial(`roofMat_${prefix}_${index}`, COLORS.HOUSE_ROOF, sceneRef);
}

function crearCasas(sceneRef) {
    const casasPosiciones = [];

    // Casas carretera 1
    for (let i = 0; i < CONFIG.HOUSES_COUNT; i++) {
        const casaZ = i * CONFIG.HOUSE_OFFSET + CONFIG.HOUSE_INITIAL;

        crearCasaConTecho(sceneRef, -10, casaZ, i, "c1L");
        crearCasaConTecho(sceneRef, 10, casaZ, i, "c1R");

        casasPosiciones.push(new BABYLON.Vector3(-10, 0, casaZ));
        casasPosiciones.push(new BABYLON.Vector3(10, 0, casaZ));
    }

    // Casas carretera 2
    for (let i = 0; i < CONFIG.HOUSES_COUNT; i++) {
        const casaZ2 = i * CONFIG.HOUSE_OFFSET + CONFIG.HOUSE_INITIAL;
        const offsetX = CONFIG.ROAD2_POS.x;

        crearCasaConTecho(sceneRef, offsetX - 10, casaZ2, i, "c2L");
        crearCasaConTecho(sceneRef, offsetX + 10, casaZ2, i, "c2R");

        casasPosiciones.push(new BABYLON.Vector3(offsetX - 10, 0, casaZ2));
        casasPosiciones.push(new BABYLON.Vector3(offsetX + 10, 0, casaZ2));
    }

    return casasPosiciones;
}
