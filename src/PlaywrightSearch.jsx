import { useState } from "react";

export default function SearchPlaywright() {
  const [number, setNumber] = useState("");

  const handleSearch = async () => {
    const response = await fetch("http://localhost:3001/run-playwright", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchQuery: number }),
    });

    if (response.ok) {
      alert("Playwright executed succesfully");
    } else {
      alert("Error executing Playwright");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Put a Number"
      />
      <button onClick={handleSearch}>Search on YouTube</button>
    </div>
  );
}
