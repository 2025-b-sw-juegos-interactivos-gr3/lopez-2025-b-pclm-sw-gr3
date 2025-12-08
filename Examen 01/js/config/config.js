// CONSTANTES DE CONFIGURACIÓN DEL ESCENARIO
const CONFIG = {
    // Carreteras
    ROAD_WIDTH: 12,
    ROAD_HEIGHT: 105,
    ROAD1_POS: { x: 0, z: 50 },
    ROAD2_POS: { x: 30, z: 50 },

    // Curva
    CURVE_RADIUS: 15,
    CURVE_SEGMENTS: 40,
    CURVE_CENTER: { x: 15, z: 100 },
    CURVE_HALF_WIDTH: 7.5,

    // Aceras
    SIDEWALK_WIDTH: 3,
    SIDEWALK_POS_X: [7.5, -7.5],

    // Pasto
    GRASS_WIDTH: 100,
    GRASS_HEIGHT: 140,
    GRASS_POS: { x: 15, y: -0.05, z: 65 },

    // Decoración (árboles, farolas)
    TREES_COUNT: 10,
    TREE_POS: { x: -15 },
    LAMP_POS: { x: 15 },

    // Casas
    HOUSES_COUNT: 5,
    HOUSE_OFFSET: 20,
    HOUSE_INITIAL: 5,

    // Skybox
    SKYBOX_SIZE: 200,
    SKYBOX_POS: { x: 15, y: -50, z: 70 },

    // Movimiento ambulancia
    AMBULANCE_SPEED: 0.5,
    AMBULANCE_ROTATION_SPEED: 0.03,
    AMBULANCE_BOUNDS: {
        minX: -35, maxX: 65,
        minZ: -5, maxZ: 135
    },

    // Luz
    LIGHT_INTENSITY: 0.9,

    // Paciente
    PATIENT_SPAWN_Z_RANGE: 100,
    PATIENT_PICKUP_RANGE: 5,
    PATIENT_DELIVERY_RANGE: 4,
};

const COLORS = {
    ROAD: new BABYLON.Color3(0.1, 0.1, 0.1),
    SIDEWALK: new BABYLON.Color3(0.8, 0.8, 0.8),
    GRASS: new BABYLON.Color3(0.2, 0.7, 0.2),
    TREE_TRUNK: new BABYLON.Color3(0.5, 0.3, 0.1),
    TREE_LEAVES: new BABYLON.Color3(0.1, 0.6, 0.1),
    LAMP_POLE: new BABYLON.Color3(0.7, 0.7, 0.7),
    LAMP_LIGHT: new BABYLON.Color3(1, 1, 0.7),
    HOUSE_WALL: new BABYLON.Color3(1, 1, 1),
    HOUSE_ROOF: new BABYLON.Color3(0.7, 0.1, 0.1),
    LINE_ROAD: new BABYLON.Color3(1, 1, 0),
    CURB: new BABYLON.Color3(1, 1, 1),
};
