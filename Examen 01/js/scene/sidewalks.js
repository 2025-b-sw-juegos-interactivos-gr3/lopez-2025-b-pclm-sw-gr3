// MÓDULO: ACERAS
function crearAceras(sceneRef, curvePath) {
    const sidewalkMat = crearMaterial("sidewalkMat", COLORS.SIDEWALK, sceneRef);
    const halfWidth = 6;
    const sidewalkHalfWidth = 1.5;

    // Aceras en carretera 1 (ida)
    for (let side of [-1, 1]) {
        const sidewalk = BABYLON.MeshBuilder.CreateGround("sidewalk" + side,
            { width: CONFIG.SIDEWALK_WIDTH, height: CONFIG.ROAD_HEIGHT }, sceneRef);
        sidewalk.material = sidewalkMat;
        sidewalk.position.x = side * 7.5;
        sidewalk.position.z = CONFIG.ROAD1_POS.z;
    }

    // Aceras en carretera 2 (regreso)
    for (let side of [-1, 1]) {
        const sidewalkReturn = BABYLON.MeshBuilder.CreateGround("sidewalkReturn" + side,
            { width: CONFIG.SIDEWALK_WIDTH, height: CONFIG.ROAD_HEIGHT }, sceneRef);
        sidewalkReturn.material = sidewalkMat;
        sidewalkReturn.position.x = side * 7.5 + 30;
        sidewalkReturn.position.z = CONFIG.ROAD2_POS.z;
    }

    // Aceras en curva
    for (let side of [-1, 1]) {
        const offset = halfWidth + 1.5;
        const shape = [
            new BABYLON.Vector3(-sidewalkHalfWidth, 0, 0),
            new BABYLON.Vector3(sidewalkHalfWidth, 0, 0)
        ];
        const pathCurve = curvePath.map((p, idx) => {
            const dir = (idx < curvePath.length - 1)
                ? curvePath[idx + 1].subtract(p).normalize()
                : curvePath[idx].subtract(curvePath[idx - 1]).normalize();
            const normal = new BABYLON.Vector3(-dir.z, 0, dir.x);
            return p.add(normal.scale(side * offset));
        });
        const sidewalkCurve = BABYLON.MeshBuilder.ExtrudeShape(`sidewalkCurve${side}`, {
            shape: shape,
            path: pathCurve,
            cap: BABYLON.Mesh.CAP_ALL,
            sideOrientation: BABYLON.Mesh.DOUBLESIDE
        }, sceneRef);
        sidewalkCurve.position.y = 0.05;
        sidewalkCurve.material = sidewalkMat;
    }
}
