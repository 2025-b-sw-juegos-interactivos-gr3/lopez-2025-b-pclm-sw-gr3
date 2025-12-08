// MÓDULO: MANEJO DE INPUT
function setupInput(sceneRef) {
    sceneRef.actionManager = new BABYLON.ActionManager(sceneRef);
    
    sceneRef.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnKeyDownTrigger, 
        function (evt) {
            game.inputMap[evt.sourceEvent.key.toLowerCase()] = true;
        }
    ));
    
    sceneRef.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnKeyUpTrigger, 
        function (evt) {
            game.inputMap[evt.sourceEvent.key.toLowerCase()] = false;
        }
    ));

    // Recoger/Entregar paciente
    sceneRef.onKeyboardObservable.add((kbInfo) => {
        if (kbInfo.type === BABYLON.KeyboardEventTypes.KEYDOWN && kbInfo.event.key === " ") {
            const ambulancia = game.ambulancia;
            const paciente = game.paciente;
            const hospital = game.hospital;

            if (!ambulancia || !paciente) return;

            if (!game.tienePaciente) {
                let dist = BABYLON.Vector3.Distance(ambulancia.position, paciente.position);
                if (dist < CONFIG.PATIENT_PICKUP_RANGE) {
                    paciente.parent = ambulancia;
                    paciente.position = new BABYLON.Vector3(0, 1, -1);
                    game.tienePaciente = true;

                    // Apagar holograma al recoger
                    game.patientRings.forEach(r => r.isVisible = false);
                    if (game.patientLight) game.patientLight.intensity = 0;
                }
            } else if (hospital) {
                const dropPoint = new BABYLON.Vector3(hospital.position.x, 0, hospital.position.z - 12);
                let dist = BABYLON.Vector3.Distance(ambulancia.position, dropPoint);

                if (dist < CONFIG.PATIENT_DELIVERY_RANGE) {
                    paciente.parent = null;
                    paciente.position = dropPoint.clone();
                    paciente.position.y = 0;
                    const toHospital = hospital.position.subtract(paciente.position);
                    paciente.rotation = new BABYLON.Vector3(0, Math.atan2(toHospital.x, toHospital.z), 0);
                    game.tienePaciente = false;
                    game.contadorPacientes++;
                    game.contadorText.text = `Pacientes entregados: ${game.contadorPacientes}`;
                    setTimeout(() => generarPaciente(), 300);
                }
            }
        }
    });
}
