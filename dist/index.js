import { restaurantes } from "./data/tsrestaurante.js";
import { RestauranteService } from "./services/restauranteservices.js";
// Clean Architecture - Orquestador principal
// Capa de entrada / aplicación mínima
console.log("SkyBox app inicializada");
document.addEventListener("DOMContentLoaded", () => {
    const restauranteInput = document.getElementById("restauranteInput");
    const agregarRestauranteBtn = document.getElementById("agregarRestauranteBtn");
    const restaurantesLista = document.getElementById("restaurantesLista");
    if (restauranteInput instanceof HTMLInputElement &&
        agregarRestauranteBtn instanceof HTMLButtonElement &&
        restaurantesLista instanceof HTMLDivElement) {
        const restauranteService = new RestauranteService(restaurantes);
        restauranteService.conectarFormulario(restauranteInput, agregarRestauranteBtn, restaurantesLista);
    }
    const appRoot = document.getElementById("app");
    if (appRoot) {
        appRoot.textContent = "SkyBox corriendo";
    }
});
//# sourceMappingURL=index.js.map