// Clean Architecture - Orquestador principal
// Capa de entrada / aplicación mínima

console.log("SkyBox app inicializada");

document.addEventListener("DOMContentLoaded", () => {
  const appRoot = document.getElementById("app");
  if (appRoot) {
    appRoot.textContent = "SkyBox corriendo";
  }
});
