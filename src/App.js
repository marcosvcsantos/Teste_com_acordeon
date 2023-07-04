import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./content";

const App = () => {
  return (
    <div>
      <center>
        <img src="./senai_branco.png" />
        <h2>Projeto Dev App - Senai</h2>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </center>
    </div>
  );
};

export default App;
