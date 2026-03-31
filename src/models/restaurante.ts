export type RestaurantStatus = "activo" | "inactivo" | "suspendido";

export class Restaurante {
  constructor(
    public readonly id: string,
    public name: string,
    public address: string,
    public status: RestaurantStatus
  ) {
    this.validate();
  }

  private validate() {
    if (!this.name) throw new Error("Nombre requerido");
    if (!this.address) throw new Error("Dirección requerida");
  }

  actualizarEstado(status: RestaurantStatus) {
    this.status = status;
  }
}