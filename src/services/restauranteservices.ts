import { Restaurante, RestaurantStatus } from "../models/restaurante.js";
import { Dron } from "../models/dronmodels.js";

export class RestauranteService {
  private restaurantes: Restaurante[] = [];

  constructor(data: Restaurante[]) {
    this.restaurantes = [...data];
  }

  // CREATE
  crearRestaurante(valorInput: string): Restaurante {
    const nombreLimpio = valorInput.trim();

    if (!nombreLimpio) {
      throw new Error("Debes escribir un nombre válido");
    }

    const nuevoRestaurante = crearRestauranteConId(nombreLimpio);

    this.restaurantes.push(nuevoRestaurante);

    return nuevoRestaurante;
  }

  conectarFormulario(
    input: HTMLInputElement,
    boton: HTMLButtonElement,
    contenedor: HTMLDivElement
  ): void {
    const manejarCreacion = (): void => {
      try {
        this.crearRestaurante(input.value);
        input.value = "";
        this.renderizarRestaurantes(contenedor);
        input.focus();
      } catch (error) {
        const mensaje =
          error instanceof Error ? error.message : "No se pudo crear el restaurante";
        input.setCustomValidity(mensaje);
        input.reportValidity();
        input.setCustomValidity("");
      }
    };

    this.renderizarRestaurantes(contenedor);

    boton.addEventListener("click", manejarCreacion);
    input.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        manejarCreacion();
      }
    });
  }

  private renderizarRestaurantes(contenedor: HTMLDivElement): void {
    contenedor.innerHTML = "";

    this.restaurantes.forEach((restaurante) => {
      const item = document.createElement("div");
      item.className = "entity-row";

      const info = document.createElement("div");
      const title = document.createElement("h4");
      title.style.margin = "0";
      title.textContent = restaurante.name;

      const description = document.createElement("small");
      description.style.color = "var(--color-text-secondary)";
      description.textContent = `ID: ${restaurante.id}`;

      info.appendChild(title);
      info.appendChild(description);

      const actions = document.createElement("div");
      actions.style.display = "flex";
      actions.style.gap = "var(--spacing-sm)";
      actions.style.flexWrap = "wrap";

      const editButton = document.createElement("button");
      editButton.className = "btn-secondary";
      editButton.type = "button";
      editButton.style.padding = "0.4rem 0.8rem";
      editButton.style.fontSize = "0.75rem";
      editButton.textContent = "Editar";
      editButton.addEventListener("click", () => {
        const nuevoNombre = window.prompt("Nuevo nombre del restaurante", restaurante.name);

        if (nuevoNombre === null) {
          return;
        }

        this.editar(restaurante.id, nuevoNombre);
        this.renderizarRestaurantes(contenedor);
      });

      const deleteButton = document.createElement("button");
      deleteButton.className = "btn-secondary btn-danger-soft";
      deleteButton.type = "button";
      deleteButton.style.padding = "0.4rem 0.8rem";
      deleteButton.style.fontSize = "0.75rem";
      deleteButton.textContent = "Borrar";
      deleteButton.addEventListener("click", () => {
        this.eliminar(restaurante.id);
        this.renderizarRestaurantes(contenedor);
      });

      actions.appendChild(editButton);
      actions.appendChild(deleteButton);

      item.appendChild(info);
      item.appendChild(actions);

      contenedor.appendChild(item);
    });
  }

  // READ
  listar(): Restaurante[] {
    return [...this.restaurantes];
  }

  obtenerPorId(id: string): Restaurante | undefined {
    return this.restaurantes.find((restaurante) => restaurante.id === id);
  }

  // UPDATE
  editar(id: string, nuevoNombre: string): void {
    const restaurante = this.obtenerPorId(id);
    if (!restaurante) throw new Error("No encontrado");

    const nombreLimpio = nuevoNombre.trim();
    if (!nombreLimpio) throw new Error("Debes escribir un nombre válido");

    restaurante.name = nombreLimpio;
  }

  actualizarEstado(id: string, status: RestaurantStatus): void {
    const restaurante = this.obtenerPorId(id);
    if (!restaurante) throw new Error("No encontrado");

    restaurante.actualizarEstado(status);
  }

  // DELETE
  eliminar(id: string): void {
    this.restaurantes = this.restaurantes.filter((restaurante) => restaurante.id !== id);
  }
} 



// Función auxiliar para crear un restaurante con un ID único basado en la fecha actual
function crearRestauranteConId(nombre: string): Restaurante {
  const nuevoId = `RST-${String(Date.now()).slice(-6)}`;
  return new Restaurante(nuevoId, nombre, "Sin dirección", "activo");
}

export class DronService {
  private drones: Dron[] = [];

  constructor(data: Dron[]) {
    this.drones = [...data];
  }

  crearDron(modelo: string): Dron {
    const modeloLimpio = modelo.trim();
    if (!modeloLimpio) {
      throw new Error("Debes escribir un modelo válido");
    }

    const nuevoDron = new Dron(
      `DRN-${String(Date.now()).slice(-6)}`,
      modeloLimpio,
      "libre",
      null
    );

    this.drones.push(nuevoDron);
    return nuevoDron;
  }

  listarDrones(): Dron[] {
    return [...this.drones];
  }

  obtenerDronPorId(id: string): Dron | undefined {
    return this.drones.find((dron) => dron.id === id);
  }

  editarDron(id: string, nuevoModelo: string): void {
    const dron = this.obtenerDronPorId(id);
    if (!dron) throw new Error("Dron no encontrado");

    const modeloLimpio = nuevoModelo.trim();
    if (!modeloLimpio) throw new Error("Debes escribir un modelo válido");

    dron.modelo = modeloLimpio;
  }

  eliminarDron(id: string): void {
    this.drones = this.drones.filter((dron) => dron.id !== id);
  }

  conectarFlota(boton: HTMLButtonElement, contenedor: HTMLTableSectionElement): void {
    const manejarAlta = (): void => {
      const modelo = window.prompt("Modelo del dron");
      if (!modelo) return;

      try {
        this.crearDron(modelo);
        this.renderizarFlota(contenedor);
      } catch (error) {
        alert(error instanceof Error ? error.message : "No se pudo agregar el dron");
      }
    };

    this.renderizarFlota(contenedor);
    boton.addEventListener("click", manejarAlta);
  }

  private renderizarFlota(contenedor: HTMLTableSectionElement): void {
    contenedor.innerHTML = "";

    this.drones.forEach((dron) => {
      const fila = document.createElement("tr");

      const modeloCelda = document.createElement("td");
      modeloCelda.style.padding = "var(--spacing-md)";
      modeloCelda.style.fontWeight = "500";
      modeloCelda.textContent = dron.modelo;

      const statusCelda = document.createElement("td");
      statusCelda.style.padding = "var(--spacing-md)";
      statusCelda.textContent = dron.status;

      const restauranteCelda = document.createElement("td");
      restauranteCelda.style.padding = "var(--spacing-md)";
      restauranteCelda.textContent = dron.idRestaurante || "N/A";

      const actionsCelda = document.createElement("td");
      actionsCelda.style.padding = "var(--spacing-md)";
      actionsCelda.style.textAlign = "right";

      const editBtn = document.createElement("button");
      editBtn.textContent = "Editar";
      editBtn.className = "btn-secondary";
      editBtn.type = "button";
      editBtn.style.marginRight = "8px";
      editBtn.addEventListener("click", () => {
        const nuevoModelo = window.prompt("Nuevo modelo del dron", dron.modelo);
        if (!nuevoModelo) return;

        this.editarDron(dron.id, nuevoModelo);
        this.renderizarFlota(contenedor);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Borrar";
      deleteBtn.className = "btn-secondary btn-danger-soft";
      deleteBtn.type = "button";
      deleteBtn.addEventListener("click", () => {
        this.eliminarDron(dron.id);
        this.renderizarFlota(contenedor);
      });

      actionsCelda.appendChild(editBtn);
      actionsCelda.appendChild(deleteBtn);

      fila.appendChild(modeloCelda);
      fila.appendChild(statusCelda);
      fila.appendChild(restauranteCelda);
      fila.appendChild(actionsCelda);

      contenedor.appendChild(fila);
    });
  }
}