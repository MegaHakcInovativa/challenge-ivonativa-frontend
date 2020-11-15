import React, { useEffect, useState } from "react";

import HeaderQuestion from "../components/headerQuestions";

import "../../styles/pages/questions/questionThree.css";

const QuestionThree: React.FC = () => {
  const [provider, setProvider] = useState<boolean>(false);
  const [stored, setStored] = useState<object>();

  useEffect(() => {
    const data = localStorage.getItem("elo-provider");
    if (data) {
      let stored = JSON.parse(data);
      let newTarget = { ...stored, initial: provider };
      setStored(newTarget);

      localStorage.setItem("elo-provider", JSON.stringify(newTarget));
    }
  }, []);

  function getProvider(item: boolean) {
    let newTarget = { ...stored, initial: item };

    setStored(newTarget);
    localStorage.setItem("elo-provider", JSON.stringify(newTarget));
  }

  return (
    <>
      <HeaderQuestion title="Você já possui startup?" />

      <div className="botoes">
        <button
          type="button"
          data-id="1"
          className={provider ? "active" : ""}
          onClick={() => {
            setProvider(true);
            getProvider(true);
          }}
        >
          Sim, já possuo
        </button>

        <button
          type="button"
          data-id="0"
          className={!provider ? "active" : ""}
          onClick={() => {
            setProvider(false);
            getProvider(false);
          }}
        >
          Ainda não
        </button>
      </div>
    </>
  );
};

export default QuestionThree;
