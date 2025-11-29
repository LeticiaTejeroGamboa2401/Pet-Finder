import React from "react";

export default function Filters({ search, setSearch, type, setType }) {
  return (
    <div className="flex gap-4 items-center mb-4">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg w-full"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded-lg text-gray-600"
      >
        <option value="">Todos</option>
        <option value="Perro">Perros</option>
        <option value="Gato">Gatos</option>
        <option value="Zorro">Zorro</option>
        <option value="Lemur">Lemur</option>
        <option value="Serpiente">Serpiente</option>
        <option value="Camaleon">Camaleon</option>
      </select>
    </div>
  );
}
