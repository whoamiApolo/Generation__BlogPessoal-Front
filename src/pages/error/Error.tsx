import { useState } from "react";
import astronautaSVG from "../../assets/astronauta.svg";
//import "./Error.css";

function Error() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-[#878787] dark:bg-[#1a1a1a] grid place-items-center min-h-screen px-4">
        <img
          src={astronautaSVG}
          className="drop-shadow-[0_0_30rem_blue] w-[75%] lg:w-[50%]"
          alt="Um astronauta"
        />

        <article className="flex flex-col items-center">
          <h1 className="text-3xl hover:text-4xl hover:ease-in hover:duration-500 dark:text-[#878787] font-bold">Not Found</h1>
          <p className="text-base p-4 dark:text-[#ffffff] text-justify">
            O código de status da resposta HTTP 404 Not Found indica que o
            servidor não pode localizar o recurso solicitado. Os links que levam
            a uma 404 página geralmente são chamados de links quebrados ou
            inativos e podem estar sujeitos à deterioração do link. Um 404código
            de status indica apenas que o recurso está ausente: não se a
            ausência é temporária ou permanente. Se um recurso for removido
            permanentemente, use o 410 Gonestatus.
          </p>
        </article>

        <article className="flex flex-wrap justify-center pb-4 lg:gap-16">
          <button
            className="border-none dark:text-neutral-50 px-4 py-2 hover:bg-[#1a1a1a] hover:text-neutral-50 dark:hover:text-[#1a1a1a] dark:hover:bg-[#878787] hover:rounded-lg hover:ease-in hover:duration-700"
            onClick={() => setCount((count) => count + 1)}
          >
            Not Found count is {count}
          </button>

          <button className="border-none dark:text-neutral-50 px-4 py-2">
            Estamos há {count} dia(s) sem localizar o recurso.
          </button>
        </article>
      </main>
    </>
  );
}

export default Error;
