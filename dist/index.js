import { restaurantes } from "./data/tsrestaurante.js";
import { drones } from "./data/drons.js";
import { RestauranteService, DronService } from "./services/restauranteservices.js";
// Clean Architecture - Orquestador principal
// Capa de entrada / aplicación mínima
console.log("SkyBox app inicializada");
document.addEventListener("DOMContentLoaded", () => {
    const restauranteInput = document.getElementById("restauranteInput");
    const agregarRestauranteBtn = document.getElementById("agregarRestauranteBtn");
    const restaurantesLista = document.getElementById("restaurantesLista");
    const agregarDronBtn = document.getElementById("agregarDronBtn");
    const dronesLista = document.getElementById("dronesLista");
    if (restauranteInput instanceof HTMLInputElement &&
        agregarRestauranteBtn instanceof HTMLButtonElement &&
        restaurantesLista instanceof HTMLDivElement) {
        const restauranteService = new RestauranteService(restaurantes);
        restauranteService.conectarFormulario(restauranteInput, agregarRestauranteBtn, restaurantesLista);
    }
    if (agregarDronBtn instanceof HTMLButtonElement &&
        dronesLista instanceof HTMLTableSectionElement) {
        const dronService = new DronService(drones);
        dronService.conectarFlota(agregarDronBtn, dronesLista);
    }
    const appRoot = document.getElementById("app");
    if (appRoot) {
        appRoot.textContent = "SkyBox corriendo";
    }
});
//# sourceMappingURL=index.js.map