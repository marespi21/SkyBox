# 🎨 SkyBox - Sistema de Diseño Completo

Guía de referencia para mantener consistencia visual en todas las vistas del proyecto.

---

## 🎯 Principios de Diseño

- **Moderno**: Interfaz contemporánea y actualizada
- **Premium**: Elegancia en cada detalle
- **Limpio**: Jerarquía visual clara
- **Profesional**: Confianza y credibilidad
- **Accesible**: Contraste y legibilidad óptimos

---

## 🎨 Paleta de Colores

### 🔵 Primario (Acciones principales)
```css
--color-primary: #2563EB;        /* Principal */
--color-primary-hover: #1E40AF;  /* Hover / Activo */
--color-primary-light: #DBEAFE;  /* Fondo suave */
```

### ⚫ Neutrales (Base UI)
```css
--color-bg-dark: #0F172A;        /* Fondo principal */
--color-bg-card: #1E293B;        /* Cards / Contenedores */
--color-border: #334155;         /* Bordes */
--color-text-secondary: #94A3B8; /* Texto secundario */
--color-text-primary: #F1F5F9;   /* Texto principal */
--color-white: #FFFFFF;          /* Elementos claros */
```

### 🟢 Estados - Disponible
```css
--color-success: #22C55E;        /* Principal */
--color-success-bg: #DCFCE7;     /* Fondo */
```

### 🔴 Estados - Ocupado/Error
```css
--color-error: #EF4444;          /* Principal */
--color-error-bg: #FEE2E2;       /* Fondo */
```

### 🟡 Estados - Advertencia
```css
--color-warning: #F59E0B;        /* Principal */
--color-warning-bg: #FEF3C7;     /* Fondo */
```

### Tabla de referencia rápida
| Elemento | Color | Hex |
|----------|-------|-----|
| Fondo principal | Oscuro | #0F172A |
| Cards | Gris oscuro | #1E293B |
| Azul principal | Azul | #2563EB |
| Azul hover | Azul oscuro | #1E40AF |
| Disponible | Verde | #22C55E |
| En entrega/Ocupado | Rojo | #EF4444 |
| Mantenimiento | Ámbar | #F59E0B |
| Bordes | Gris | #334155 |
| Texto principal | Blanco | #F1F5F9 |
| Texto secundario | Gris | #94A3B8 |

---

## 🔤 Tipografía

### Familia
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Jerarquía de Pesos

| Uso | Peso CSS | Ejemplo |
|-----|----------|---------|
| Títulos principales (H1) | 700 | "Dashboard SkyBox" |
| Títulos secundarios (H2, H3) | 600 | Títulos de cards |
| Botones, Labels | 500 | "Contratar Dron" |
| Datos importantes | 600 | Números grandes en KPIs |
| Texto normal | 400 | Párrafos, descripciones |
| Texto pequeño | 400 | Subtítulos, helper text |

### Tamaños recomendados
```css
/* Títulos */
.title-xl {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
}

.title-lg {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
}

.title-md {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
}

.title-sm {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
}

/* Cuerpo de texto */
.text-base {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.text-sm {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

.text-xs {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
}

/* Números grandes (KPIs) */
.number-xl {
  font-size: 48px;
  font-weight: 600;
  line-height: 1;
}

.number-lg {
  font-size: 36px;
  font-weight: 600;
  line-height: 1;
}
```

---

## 📏 Espaciado

### Escala base (múltiplos de 4px)
```css
--space-xs: 4px;      /* 1x */
--space-sm: 8px;      /* 2x */
--space-md: 12px;     /* 3x */
--space-base: 16px;   /* 4x */
--space-lg: 24px;     /* 6x */
--space-xl: 32px;     /* 8x */
--space-2xl: 48px;    /* 12x */
--space-3xl: 64px;    /* 16x */
```

### Aplicación
```css
/* Márgenes */
margin: var(--space-base);        /* 16px */
margin-top: var(--space-lg);      /* 24px */
margin-bottom: var(--space-md);   /* 12px */

/* Padding */
padding: var(--space-lg);         /* 24px */
padding-x: var(--space-base);     /* 16px horizontal */
padding-y: var(--space-md);       /* 12px vertical */

/* Gap (entre elementos) */
gap: var(--space-base);           /* 16px */
```

---

## 💠 Estilos Generales

### Bordes
```css
border-radius: 16px;  /* Cards principales y elementos grandes */
border-radius: 12px;  /* Elementos medianos */
border-radius: 8px;   /* Elementos pequeños */
border: 1px solid #334155;  /* Color de borde estándar */
```

### Sombras
```css
/* Sombra suave (cards normales) */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);

/* Sombra media (hover, elementos elevados) */
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);

/* Sombra elevada (modals, dropdowns) */
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.19),
            0 6px 12px rgba(0, 0, 0, 0.23);

/* Sin sombra (elementos planos) */
box-shadow: none;
```

### Transiciones
```css
/* Transición estándar */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Para cambios de color */
transition: color 0.2s ease;
transition: background-color 0.2s ease;

/* Para transformaciones */
transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🧩 Componentes Principales

### Botones Primarios
```css
.btn-primary {
  background-color: #2563EB;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #1E40AF;
}

.btn-primary:active {
  opacity: 0.8;
}
```

### Botones Secundarios
```css
.btn-secondary {
  background-color: #1E293B;
  color: #F1F5F9;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  border: 1px solid #334155;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: #334155;
  border-color: #475569;
}
```

### Cards
```css
.card {
  background-color: #1E293B;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
              0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);
  border-color: #475569;
}
```

### KPI Card
```css
.kpi-card {
  background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.kpi-value {
  font-size: 48px;
  font-weight: 600;
  color: #F1F5F9;
}

.kpi-label {
  font-size: 14px;
  color: #94A3B8;
  font-weight: 500;
}
```

### Input/Search
```css
.input {
  background-color: #1E293B;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 10px 16px;
  color: #F1F5F9;
  font-size: 14px;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input::placeholder {
  color: #94A3B8;
}
```

### Badge/Etiqueta
```css
/* Disponible - Verde */
.badge-success {
  background-color: #DCFCE7;
  color: #15803D;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

/* En Entrega/Ocupado - Rojo */
.badge-error {
  background-color: #FEE2E2;
  color: #991B1B;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

/* En Mantenimiento - Ámbar */
.badge-warning {
  background-color: #FEF3C7;
  color: #92400E;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}
```

### Sidebar Item (Activo)
```css
.sidebar-item {
  padding: 12px 16px;
  border-radius: 8px;
  color: #94A3B8;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar-item:hover {
  background-color: #334155;
  color: #F1F5F9;
}

.sidebar-item.active {
  background-color: #2563EB;
  color: #FFFFFF;
  font-weight: 500;
}
```

---

## 🎨 Gradientes

### Gradiente principal (KPIs)
```css
background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
```

### Gradiente de acento (Hero section)
```css
background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%);
```

### Gradiente sutil (Fondos)
```css
background: rgba(37, 99, 235, 0.1);
```

---

## 🔍 Íconos

- **Estilo**: Outline (no rellenos)
- **Tamaños recomendados**: 20px, 24px, 32px
- **Color**: Heredar del contexto (blanco para iconos principales, gris para secundarios)
- **Librería sugerida**: Feather Icons, Heroicons, Lucide Icons

Ejemplo de uso:
```html
<!-- Ícono en botón -->
<button class="btn-primary">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">...</svg>
  Contratar Dron
</button>
```

---

## 📱 Layout Base

### Estructura general
```
┌─────────────────────────────────────┐
│         HEADER (56px)               │
├──────────┬────────────────────────────┤
│          │                            │
│ SIDEBAR  │      MAIN CONTENT          │
│ (240px)  │      (Flex grow)           │
│          │                            │
└──────────┴────────────────────────────┘
```

### Breakpoints (Responsive)
```css
/* Desktop */
@media (min-width: 1024px) {
  /* Layout completo */
}

/* Tablet */
@media (max-width: 1024px) {
  /* Sidebar colapsable, content ajustado */
  sidebar { width: 64px; }
}

/* Mobile */
@media (max-width: 768px) {
  /* Sidebar drawer, full-width content */
  sidebar { position: fixed; left: -100%; }
}
```

---

## ✨ Microinteracciones

### Hover en cards
```css
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}
```

### Hover en botones
```css
.btn-primary:hover {
  background-color: #1E40AF;
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(37, 99, 235, 0.3);
}
```

### Focus visible (Accesibilidad)
```css
button:focus-visible {
  outline: 2px solid #2563EB;
  outline-offset: 2px;
}
```

### Animación de carga
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeIn 0.5s ease-out;
}
```

---

## 🎯 Checklist para nuevas vistas

- [ ] Fondo principal: #0F172A
- [ ] Cards/contenedores: #1E293B
- [ ] Tipografía: Inter en los pesos correctos
- [ ] Botones primarios: #2563EB con hover #1E40AF
- [ ] Espaciado: Múltiplos de 4px
- [ ] Bordes: 16px en principales, 8px en secundarios
- [ ] Estados: Verde #22C55E, Rojo #EF4444, Ámbar #F59E0B
- [ ] Iconos: Outline, no rellenos
- [ ] Sombras: Suaves y contextuales
- [ ] Transiciones: 0.3s cubic-bezier
- [ ] Contraste: Texto principal #F1F5F9 sobre fondos oscuros
- [ ] Responsive: Funciona en mobile, tablet, desktop

---

## 📚 Ejemplos de uso en HTML/CSS

### Crear una nueva vista
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Vista - SkyBox</title>
  <link rel="stylesheet" href="dashboard.css">
</head>
<body class="bg-skybox-dark">
  <div class="layout">
    <!-- Usar componentes del sistema -->
    <div class="card">
      <h2 class="title-md">Título de sección</h2>
      <button class="btn-primary">Acción</button>
    </div>
  </div>
</body>
</html>
```

---

## 🎨 Opciones Tailwind alternativas

Si prefieres usar Tailwind directamente (sin archivo CSS separado):

```jsx
// Variables de color en tailwind.config.js
theme: {
  colors: {
    skybox: {
      dark: '#0F172A',
      card: '#1E293B',
      primary: '#2563EB',
      primaryHover: '#1E40AF',
      border: '#334155',
      textPrimary: '#F1F5F9',
      textSecondary: '#94A3B8',
      success: '#22C55E',
      error: '#EF4444',
      warning: '#F59E0B',
    }
  }
}
```

---

## ❓ Preguntas frecuentes

**P: ¿Qué hago si necesito un color que no está aquí?**
R: No lo uses. Mantén consistencia con la paleta. Si es crítico, consulta con el equipo de diseño.

**P: ¿Puedo cambiar tamaños de fuente?**
R: Los tamaños están optimizados. Mantén la jerarquía respetando los pesos y tamaños base.

**P: ¿Cuándo usar bordes de 16px vs 8px?**
R: 16px para cards principales y contenedores. 8px para botones, inputs, badges.

**P: ¿Es obligatorio usar las sombras?**
R: Sí, ayudan a la profundidad visual. Adapta según contexto (hover = sombra mayor).

---

## 📞 Soporte

Para dudas sobre el sistema de diseño, revisa:
1. Este archivo
2. El código del `dashboard.html`
3. El archivo `dashboard.css`
4. Consulta con el equipo de producto

---

**Última actualización**: 31 de marzo de 2026
**Versión**: 1.0
**Mantenedor**: Equipo de Diseño SkyBox
