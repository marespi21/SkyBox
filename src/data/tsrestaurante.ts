import { Restaurante } from "../models/restaurante.js";

export const restaurantes: Restaurante[] = [
  new Restaurante("RST-001", "Pizza Express", "Calle 10", "activo"),
  new Restaurante("RST-002", "Burger House", "Carrera 15", "activo"),
  new Restaurante("RST-003", "Sushi Go", "Avenida 8", "inactivo"),
  new Restaurante("RST-004", "Tacos MX", "Carrera 30", "suspendido"),
  new Restaurante("RST-005", "Healthy Food", "Calle 50", "activo")
];

