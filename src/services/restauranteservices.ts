import { Restaurante, RestaurantStatus } from "../models/restaurante.js";

export class RestauranteService {
  private restaurantes: Restaurante[] = [];

  constructor(data: Restaurante[]) {
    this.restaurantes = [...data];
  }

  // CREATE
  crear(valorInput: string): Restaurante {
    const nombreLimpio = valorInput.trim();

    if (!nombreLimpio) {
      throw new Error("Debes escribir un nombre válido");
    }

    const nuevoId = `RST-${String(this.restaurantes.length + 1).padStart(3, "0")}`;
    const nuevoRestaurante = new Restaurante(
      nuevoId,
      nombreLimpio,
      "Sin dirección",
      "activo"
    );

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
        this.crear(input.value);
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