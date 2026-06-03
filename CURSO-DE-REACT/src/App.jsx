import { useState } from "react";

function App() {
  const [menssagem, setMenssage] = useState("Olá Mundo");

  return (
    <div>
      <h1>{menssagem}</h1>

      <button
        onClick={() => {
          setMenssage("Olá, fui clicado!");
        }}
      ></button>
    </div>
  );
}

export default App;
