import React from "react";
import { useState } from "react";
import petsData from "./data/pets.json";
import Filters from "./components/Filters";
import PetList from "./components/PetList";

function App() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const filteredPets = petsData.filter((p) => {
    const matchesName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = type ? p.type === type : true;
    return matchesName && matchesType;
  });

  return (
    <div className="w-full p-6">
      <h1 className="text-3xl font-bold mb-4">Pet Finder 🐾</h1>
      <Filters search={search} setSearch={setSearch} type={type} setType={setType} />
      <PetList pets={filteredPets} />
    </div>
  );
}

export default App;
