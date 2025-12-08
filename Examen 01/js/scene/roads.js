// MÓDULO: CARRETERAS Y CURVA
function crearCarreteras(sceneRef) {
    const roadMat = crearMaterial("roadMat", COLORS.ROAD, sceneRef);

    // Carretera 1
    const road = BABYLON.MeshBuilder.CreateGround("road", { width: CONFIG.ROAD_WIDTH, height: CONFIG.ROAD_HEIGHT }, sceneRef);
    road.material = roadMat;
    road.position.x = CONFIG.ROAD1_POS.x;
    road.position.z = CONFIG.ROAD1_POS.z;
    road.checkCollisions = true;

    // Carretera 2
    const roadReturn = BABYLON.MeshBuilder.CreateGround("roadReturn", { width: CONFIG.ROAD_WIDTH, height: CONFIG.ROAD_HEIGHT }, sceneRef);
    roadReturn.material = roadMat;
    roadReturn.position.x = CONFIG.ROAD2_POS.x;
    roadReturn.position.z = CONFIG.ROAD2_POS.z;
    roadReturn.checkCollisions = true;

    return { road, roadReturn, roadMat };
}

function crearCurva(sceneRef, roadMat) {
    const curvePath = [];
    const curveSegments = CONFIG.CURVE_SEGMENTS;
    const curveRadius = CONFIG.CURVE_RADIUS;
    const cx = CONFIG.CURVE_CENTER.x;
    const cz = CONFIG.CURVE_CENTER.z;

    for (let i = 0; i <= curveSegments; i++) {
        const t = i / curveSegments;
        const theta = Math.PI - Math.PI * t;
        const x = cx + curveRadius * Math.cos(theta);
        const z = cz + curveRadius * Math.sin(theta);
        curvePath.push(new BABYLON.Vector3(x, 0, z));
    }

    const roadShape = [
        new BABYLON.Vector3(-CONFIG.CURVE_HALF_WIDTH, 0, 0),
        new BABYLON.Vector3(CONFIG.CURVE_HALF_WIDTH, 0, 0)
    ];

    const roadCurve = BABYLON.MeshBuilder.ExtrudeShape("roadCurve", {
        shape: roadShape,
        path: curvePath,
        cap: BABYLON.Mesh.CAP_ALL,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, sceneRef);

    roadCurve.material = roadMat;
    roadCurve.position.y = 0.01;
    roadCurve.checkCollisions = true;

    return { roadCurve, curvePath };
}
