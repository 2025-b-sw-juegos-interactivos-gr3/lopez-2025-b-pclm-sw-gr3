// MÓDULO: PAREDES DE COLISIÓN
function crearParedes(sceneRef, curvePath) {
    crearParedColision("wallLeft", { width: 0.5, height: 3, depth: 100 },
        new BABYLON.Vector3(-6.25, 1.5, CONFIG.ROAD1_POS.z), sceneRef);
    crearParedColision("wallRight", { width: 0.5, height: 3, depth: 100 },
        new BABYLON.Vector3(6.25, 1.5, CONFIG.ROAD1_POS.z), sceneRef);
    crearParedColision("wallLeft2_ext", { width: 0.5, height: 3, depth: 105 },
        new BABYLON.Vector3(CONFIG.ROAD2_POS.x - 6.25, 1.5, CONFIG.ROAD1_POS.z), sceneRef);
    crearParedColision("wallRight2_ext", { width: 0.5, height: 3, depth: 105 },
        new BABYLON.Vector3(CONFIG.ROAD2_POS.x + 6.25, 1.5, CONFIG.ROAD1_POS.z), sceneRef);

    // Paredes en la curva
    const halfWidthCurve = 6;
    const wallHeight = 3;
    const wallThickness = 0.5;

    for (let i = 0; i < curvePath.length - 1; i++) {
        const p = curvePath[i];
        const p2 = curvePath[i + 1];
        const dir = p2.subtract(p).normalize();
        const angle = Math.atan2(dir.x, dir.z);
        const normal = new BABYLON.Vector3(-dir.z, 0, dir.x);

        const posL = p.add(normal.scale(-halfWidthCurve));
        crearParedColision("wallCurve_L_" + i,
            { width: wallThickness, height: wallHeight, depth: 3 },
            new BABYLON.Vector3(posL.x, 1.5, posL.z), sceneRef, angle);

        const posR = p.add(normal.scale(halfWidthCurve));
        crearParedColision("wallCurve_R_" + i,
            { width: wallThickness, height: wallHeight, depth: 3 },
            new BABYLON.Vector3(posR.x, 1.5, posR.z), sceneRef, angle);
    }
}
