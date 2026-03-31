export type DroneStatus = "ocupado" | "libre";

export class Dron {
  constructor(
    public readonly id: string,
    public modelo: string,
    public status: DroneStatus,
    public idRestaurante: string | null
  ) {}
}