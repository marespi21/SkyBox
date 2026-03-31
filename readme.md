# 🚁 SkyBox - Sistema de Contratación de Drones

---

## 📌 Descripción General

SkyBox es una plataforma diseñada para permitir a restaurantes gestionar y contratar drones disponibles para realizar envíos de comida de forma rápida, eficiente y controlada. El sistema centraliza la interacción entre restaurantes y drones, asegurando una correcta asignación, liberación y seguimiento del estado de cada dron en tiempo real, manteniendo siempre la consistencia de la información.

---

## 🎯 Objetivo del Proyecto

Desarrollar un sistema funcional que permita:

* Gestionar restaurantes
* Gestionar drones
* Visualizar disponibilidad en tiempo real
* Contratar drones
* Liberar drones
* Mantener consistencia en los estados del sistema

El enfoque principal es construir un MVP sólido, simple y confiable.

---

## 🧱 Modelo del Dominio

### 🧑‍🍳 Restaurant

Entidad que representa los restaurantes que utilizan el sistema.

**Atributos:**

* id
* name
* address
* status

**Responsabilidades:**

* Solicitar drones
* Liberar drones
* Consultar disponibilidad

---

### 🤖 Drone

Entidad que representa los drones disponibles.

**Atributos:**

* id
* code
* status (`available`, `busy`)
* currentRestaurantId (nullable)

**Responsabilidades:**

* Indicar su estado
* Asociarse temporalmente a un restaurante

---

## ⚙️ Lógica del Sistema

El sistema es responsable de:

* Gestionar restaurantes y drones
* Validar disponibilidad de drones
* Asignar drones a restaurantes
* Liberar drones
* Mantener la consistencia de estados

---

## 🚀 Épica Principal

**Gestión de contratación y asignación de drones para envíos de comida**

El sistema permite a los restaurantes interactuar con drones disponibles para realizar envíos, gestionando todo el ciclo de vida de contratación y liberación.

---

## 🔑 Funcionalidades Principales

* Crear, editar y eliminar restaurantes
* Crear, editar y eliminar drones
* Listar drones disponibles
* Listar drones ocupados
* Contratar drones
* Liberar drones
* Consultar drones asignados

---

## 📋 Reglas de Negocio

* Un dron solo puede estar asignado a un restaurante a la vez
* Un dron solo puede ser contratado si está disponible
* Al contratar un dron, su estado cambia a `busy`
* Al liberar un dron, su estado cambia a `available`
* No se permiten asignaciones duplicadas
* El sistema debe mantener consistencia en todo momento

---

## 🖥️ Estructura del Frontend

### 🏠 Dashboard

* Visualización general del sistema
* Drones disponibles y ocupados
* Acciones rápidas

### 🧑‍🍳 Restaurantes

* CRUD de restaurantes

### 🤖 Drones

* CRUD de drones
* Visualización de estado

### 🚁 Contratación

* Ver drones disponibles
* Contratar drones
* Liberar drones
* Ver drones asignados

### 🔍 Detalles

* Información individual de cada entidad

### ⚙️ Configuración (Opcional)

* Ajustes generales del sistema

---

## 🧪 Casos de Uso

* Crear restaurante
* Crear dron
* Listar drones disponibles
* Contratar dron
* Liberar dron
* Consultar drones en uso

---

## 📦 Resultado Esperado

Un sistema funcional que permita gestionar restaurantes y drones, simular la contratación de drones para envíos de comida y garantizar una operación consistente, clara y confiable.

---

## ⚠️ Consideraciones Técnicas (Pendiente de implementación)

* Backend: Node.js / NestJS
* Base de datos: PostgreSQL
* API REST
* Manejo de errores
* Validaciones de negocio

---

## 💥 Enfoque del Proyecto

Este proyecto está enfocado en construir una base sólida (MVP) que pueda escalar en el futuro, priorizando:

* Claridad en la lógica
* Consistencia de datos
* Simplicidad en la operación

No se busca complejidad innecesaria, sino un sistema bien estructurado y funcional.

---

## 🚧 Próximos Pasos

* Definición de historias de usuario
* Creación del backlog
* Planificación de sprints
* Implementación por módulos

---

## 🧠 Conclusión

SkyBox es un sistema centrado en la gestión eficiente de drones para envíos de comida, donde la prioridad es garantizar una interacción clara, controlada y sin inconsistencias entre restaurantes y drones.
