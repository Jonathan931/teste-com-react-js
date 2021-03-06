import React, { useState, useEffect, useCallback } from "react";

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");

  const initFetch = useCallback(() => {
    const techs = localStorage.getItem("techs");
    if (techs) {
      setTechs(JSON.parse(techs));
    }
  }, []);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  useEffect(() => {
    localStorage.setItem("techs", JSON.stringify(techs));
  }, [techs]);

  function handleAddTech(e) {
    e.preventDefault();
    setTechs([...techs, newTech]);
    setNewTech("");
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        id="tech"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
