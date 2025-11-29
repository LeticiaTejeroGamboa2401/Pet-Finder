import React from "react";

export default function PetCard({ pet }) {
  return (
    <div className="bg-white shadow rounded-xl p-3 hover:scale-[1.02] transition w-64 h-80">
      <img
        src={pet.image}
        alt={pet.name}
        className="rounded-lg w-full h-55 object-cover"
      />
      <h2 className="font-bold text-black mt-2 text-lg">{pet.name}</h2>
      <p className="text-sm text-gray-500">Tiene {pet.age} años</p>
      <p className="text-sm text-gray-500">{pet.type}</p>
    </div>
  );
}
