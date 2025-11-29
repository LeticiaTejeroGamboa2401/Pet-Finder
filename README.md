# 🐾 Pet Finder — Feature de Búsqueda y Filtrado de Mascotas

Este feature forma parte del proyecto **Pet Finder**, una interfaz desarrollada con **React + Vite + TailwindCSS** que permite a los usuarios buscar, filtrar y visualizar mascotas disponibles para adopción.

Este módulo incluye:
- Motor de búsqueda por nombre.
- Filtro por tipo de mascota (Perro / Gato / Todos).
- Tarjetas con diseño uniforme y responsivo.
- Integración de imágenes locales desde `/public`.
- Grid adaptativo para mostrar los resultados de manera limpia y ordenada.

---

## 🚀 Tecnologías utilizadas

- **React 18**
- **Vite**
- **TailwindCSS**
- **JavaScript**
- **CSS Utility-first**

---

## 📁 Estructura del Feature
src/
├── components/
│ ├── Filters.jsx # Barra de filtros (texto + select)
│ ├── PetCard.jsx # Tarjeta individual de mascota
│ └── PetList.jsx # Grid donde se muestran las tarjetas
├── data/
│ └── pets.json # Datos locales de mascotas
public/
└── pets/ # Imágenes locales

---

## 📦 Instalación y ejecución
npm install
npm run dev

La aplicación se ejecuta en:
https://localhost:5173

---

## 🛠 Mejoras futuras

- Filtro por edad.
- Integración con API real.
- Animaciones al cargar tarjetas.
- Paginación o scroll infinito.

---

## 📘 Licencia

Este módulo pertenece al proyecto académico Pet Finder App.
Uso permitido únicamente con fines educativos o de demostración.

---

## ✨ Autoría

Feature desarrollado por Lae Tejero, como parte del módulo de Sistemas Generativos de IA en Ingeniería de Software.

---

## 📁 Reporte Ejecutivo para Stakeholders
* [Reporte Ejecutivo](public/Informe.pdf)
