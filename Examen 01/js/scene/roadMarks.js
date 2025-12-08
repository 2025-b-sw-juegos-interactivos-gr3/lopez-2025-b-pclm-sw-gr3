// MÓDULO: LÍNEAS Y BORDES DE CARRETERA
function crearLineasYBordes(sceneRef, curvePath) {
    const carreteras = [
        { x: CONFIG.ROAD1_POS.x, nombre: "carretera 1" },
        { x: CONFIG.ROAD2_POS.x, nombre: "carretera 2" }
    ];

    carreteras.forEach((car, idxCar) => {
        for (let i = 0; i < 10; i++) {
            // Líneas centrales
            const line = BABYLON.MeshBuilder.CreateBox(`line_${idxCar}_${i}`, { width: 0.5, height: 0.1, depth: 4 }, sceneRef);
            line.position = new BABYLON.Vector3(car.x, 0.05, i * 10);
            line.material = crearMaterial(`lineMat_${idxCar}_${i}`, COLORS.LINE_ROAD, sceneRef);

            // Bordes (ambos lados)
            for (let side of [-1, 1]) {
                const curb = BABYLON.MeshBuilder.CreateBox(`curb_${idxCar}_${side}_${i}`,
                    { width: 0.3, height: 0.2, depth: 4 }, sceneRef);
                curb.position = new BABYLON.Vector3(car.x + side * 6, 0.1, i * 10);
                curb.material = crearMaterial(`curbMat_${idxCar}_${side}_${i}`, COLORS.CURB, sceneRef);
            }
        }
    });

    // Líneas en curva
    for (let i = 0; i < curvePath.length; i += 7) {
        const p = curvePath[i];
        const p2 = curvePath[i + 1];
        const dir = p2.subtract(p);
        const angle = Math.atan2(dir.x, dir.z);

        const dash = BABYLON.MeshBuilder.CreateBox("lineCurve_" + i,
            { width: 0.5, height: 0.1, depth: 4 }, sceneRef);
        dash.position = new BABYLON.Vector3(p.x, 0.06, p.z);
        dash.rotation.y = angle;
        dash.material = crearMaterial("lineCurveMat_" + i, COLORS.LINE_ROAD, sceneRef);
    }
}
