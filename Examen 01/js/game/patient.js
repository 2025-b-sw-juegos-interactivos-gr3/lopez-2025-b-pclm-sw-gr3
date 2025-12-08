// MÓDULO: SISTEMA DE PACIENTES
function generarPaciente() {
    const sceneRef = game.scene;
    const paciente = game.paciente;

    if (!sceneRef || !paciente) return;

    const carreteraIndex = Math.random() < 0.5 ? 0 : 1;
    const centrosX = [0, 30];
    const centroX = centrosX[carreteraIndex];
    const side = Math.random() < 0.5 ? -1 : 1;

    const bordeCarretera = 5.5;
    const offset = 0.8;
    const posX = centroX + side * (bordeCarretera + offset);
    const posZ = Math.random() * CONFIG.PATIENT_SPAWN_Z_RANGE;

    paciente.position = new BABYLON.Vector3(posX, 0, posZ);
    paciente.rotation = new BABYLON.Vector3(0, side === -1 ? Math.PI / 2 : -Math.PI / 2, 0);

    // Luz spotlight
    if (!game.patientLight) {
        game.patientLight = new BABYLON.SpotLight("patientSpot",
            new BABYLON.Vector3(posX, 0.2, posZ),
            new BABYLON.Vector3(0, 1, 0),
            Math.PI / 2.2, 25, sceneRef);
        game.patientLight.diffuse = new BABYLON.Color3(0.2, 0.7, 1);
        game.patientLight.specular = new BABYLON.Color3(0.2, 0.7, 1);
        game.patientLight.intensity = 2;
    } else {
        game.patientLight.position.set(posX, 0.2, posZ);
        game.patientLight.direction = new BABYLON.Vector3(0, 1, 0);
        game.patientLight.intensity = 2;
    }

    // Aros holográficos
    const numRings = 4;
    const baseRadius = 2.3;
    const ringGap = 0.5;

    if (game.patientRings.length === 0) {
        for (let i = 0; i < numRings; i++) {
            const points = [];
            const segments = 72;
            for (let a = 0; a <= segments; a++) {
                const angle = (a / segments) * Math.PI * 2;
                const x = Math.cos(angle) * baseRadius;
                const z = Math.sin(angle) * baseRadius;
                points.push(new BABYLON.Vector3(x, 0, z));
            }

            const ring = BABYLON.MeshBuilder.CreateTube("holoRing" + i,
                { path: points, radius: 0.10, tessellation: 32, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, sceneRef);

            const mat = new BABYLON.StandardMaterial("holoMat" + i, sceneRef);
            mat.emissiveColor = new BABYLON.Color3(0.4, 0.9, 1.2);
            mat.diffuseColor = new BABYLON.Color3(0, 0, 0);
            mat.specularColor = new BABYLON.Color3(0.4, 0.9, 1);
            mat.alpha = 0.8;
            ring.material = mat;
            ring.alwaysSelectAsActiveMesh = true;
            game.patientRings.push(ring);
        }
    }

    game.patientRings.forEach((ring, index) => {
        ring.position.x = posX;
        ring.position.z = posZ;
        ring.position.y = 0.1 + index * ringGap;
        ring.isVisible = true;
    });

    // Enfoque de cámara
    if (sceneRef.activeCamera && game.paciente && game.ambulancia) {
        const cam = sceneRef.activeCamera;
        cam.lockedTarget = paciente;
        setTimeout(() => {
            let t = 0;
            const duration = 30;
            const start = cam.position.clone();
            const end = cam.position.add(game.ambulancia.position.subtract(paciente.position));

            function smoothToAmbulancia() {
                t++;
                cam.position = BABYLON.Vector3.Lerp(start, end, t / duration);
                if (t >= duration) {
                    let t2 = 0;
                    const duration2 = 30;
                    const start2 = cam.position.clone();
                    const zoomPos = game.ambulancia.position.add(new BABYLON.Vector3(0, 16, -25));

                    function zoomAmbulancia() {
                        t2++;
                        cam.position = BABYLON.Vector3.Lerp(start2, zoomPos, t2 / duration2);
                        cam.lockedTarget = game.ambulancia;
                        if (t2 >= duration2) {
                            sceneRef.onBeforeRenderObservable.removeCallback(zoomAmbulancia);
                        }
                    }
                    sceneRef.onBeforeRenderObservable.add(zoomAmbulancia);
                    sceneRef.onBeforeRenderObservable.removeCallback(smoothToAmbulancia);
                }
            }
            sceneRef.onBeforeRenderObservable.add(smoothToAmbulancia);
        }, 1500);
    }
}

function animarHolograma() {
    if (game.patientRings.length === 0) return;
    game.hologramTime += game.scene.getEngine().getDeltaTime() / 1000;

    game.patientRings.forEach((ring, index) => {
        const t = game.hologramTime;
        const baseScale = 1 + 0.12 * Math.sin(t * 3 + index * 0.6);
        ring.scaling = new BABYLON.Vector3(baseScale, 1, baseScale);
        ring.rotation.y += 0.01 * (index + 1);
        const mat = ring.material;
        if (mat) {
            mat.alpha = 0.4 + 0.2 * Math.sin(t * 4 + index);
        }
    });
}
