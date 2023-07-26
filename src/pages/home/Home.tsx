import React, { useEffect, useState } from "react";
import "./Home.css";

interface myProps {
  title: String;
  description: String;
}

function Home(props: myProps) {
  {
    /*const [valor, setValor] = useState(0);*/
  }
  const [completa, setCompleta] = useState(false);
  const [tarefa, setTarefa] = useState("");
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (completa) {
      setTarefa("Parabéns! Você concluiu a tarefa!");
    }
  }, [completa]);

  return (
    <>
      <main className="container--pageHome">
        <h1 className="title--pageHome">{props.title}</h1>
        <p className="text--pageHome">{props.description}</p>

        <div className="content__Btn--PageHome">
          {login ? (
            <img
              className="urlExterno--pageHome"
              src="https://i.imgur.com/H88yIo2.png"
              alt="Imagem Tela Inicial"
            />
          ) : (
            <button
              className="btn__Login--pageHome"
              onClick={() => setLogin(true)}
            >
              Entrar
            </button>
          )}
        </div>

        <button className="btn--pageHome" onClick={() => setCompleta(true)}>
          Concluir Tarefa
        </button>
        <p className="text__btn--pageHome">{tarefa}</p>

        {/*
         <button onClick={ () => setValor(valor+1)}>asd</button>
        <p>{valor}</p>
  */}
      </main>
    </>
  );
}

export default Home;
