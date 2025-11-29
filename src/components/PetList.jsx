import React from "react";
import PetCard from "./PetCard";

export default function PetList({ pets }) {
  if (pets.length === 0) return <p>No hay resultados.</p>;

  return (
    <div className="grid w-full min-h-screen grid-cols-1 md:grid-cols-5 gap-2">
      {pets.map((p) => (
        <PetCard key={p.id} pet={p} />
      ))}
    </div>
  );
}
