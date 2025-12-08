// MÓDULO: CARGA DE MODELOS 3D
function cargarModelos(sceneRef, camera) {
    // Cargar hospital
    BABYLON.SceneLoader.ImportMesh("", "modelos/hospital/", "scene.gltf", sceneRef, function (meshes) {
        game.hospital = meshes[0];
        game.hospital.scaling = new BABYLON.Vector3(3, 3, 3);
        game.hospital.position = new BABYLON.Vector3(15, 0, 130);
    });

    // Cargar ambulancia
    BABYLON.SceneLoader.ImportMesh("", "modelos/ambulancia/", "scene.gltf", sceneRef, function (meshes) {
        game.ambulancia = meshes[0];
        game.ambulancia.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
        game.ambulancia.position = new BABYLON.Vector3(0, 0, 5);
        game.ambulancia.checkCollisions = true;
        game.ambulancia.ellipsoid = new BABYLON.Vector3(1.8, 1.5, 3);
        game.ambulancia.ellipsoidOffset = new BABYLON.Vector3(0, 1.5, 0);
        game.ambulancia.rotation = new BABYLON.Vector3(0, 0, 0);
        camera.lockedTarget = game.ambulancia;
    });

    // Cargar paciente
    BABYLON.SceneLoader.ImportMesh("", "modelos/persona/", "scene.gltf", sceneRef, function (meshes) {
        game.paciente = meshes[0];
        game.paciente.scaling = new BABYLON.Vector3(2, 2, 2);
        generarPaciente();
    });
}
