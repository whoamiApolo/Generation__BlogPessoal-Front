import { useState } from "react";
import astronautaSVG from "../../assets/astronauta.svg";
import "./Error.css";

function Error() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="Container--pageError">
        <img src={astronautaSVG} className="Logo--pageError" alt="Um astronauta" />

        <div>
          <h1 className="Title--pageError">Not Found</h1>
          <p className="Text--pageError">
            O código de status da resposta HTTP 404 Not Found indica que o
            servidor não pode localizar o recurso solicitado. Os links que levam
            a uma 404 página geralmente são chamados de links quebrados ou
            inativos e podem estar sujeitos à deterioração do link. Um 404código
            de status indica apenas que o recurso está ausente: não se a
            ausência é temporária ou permanente. Se um recurso for removido
            permanentemente, use o 410 Gonestatus.
          </p>
        </div>
        <article className="btn--pageError">
          <button className="btn__count--pageError" onClick={() => setCount((count) => count + 1)}>
            Not Found count is {count}
          </button>

          <button className="btn__count--pageError">Estamos há {count} dia(s) sem localizar o recurso.</button>
        </article>
      </main>
    </>
  );
}

export default Error;
