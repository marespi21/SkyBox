"use strict";
// Clean Architecture - Orquestador principal
// Capa de entrada / aplicación mínima
Object.defineProperty(exports, "__esModule", { value: true });
console.log("SkyBox app inicializada");
document.addEventListener("DOMContentLoaded", () => {
    const appRoot = document.getElementById("app");
    if (appRoot) {
        appRoot.textContent = "SkyBox corriendo";
    }
});
//# sourceMappingURL=index.js.map