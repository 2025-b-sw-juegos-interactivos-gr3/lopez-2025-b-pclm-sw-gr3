// MÓDULO: SKYBOX
function crearSkybox(sceneRef) {
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: CONFIG.SKYBOX_SIZE }, sceneRef);
    skybox.position = new BABYLON.Vector3(CONFIG.SKYBOX_POS.x, CONFIG.SKYBOX_POS.y, CONFIG.SKYBOX_POS.z);

    const skyboxMaterial = new BABYLON.StandardMaterial("skyBoxMat", sceneRef);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("https://playground.babylonjs.com/textures/TropicalSunnyDay", sceneRef);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    return skybox;
}
