import { useState } from "react";

// useState = hooks

// sempre que vamos alterar o valor de algo => useState
// se for somente leitura => var, state

const UseStateComponent = () => {
  // variável de consulta e variável de alteração e inicia o hook
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };

  const [user, setUser] = useState({
    name: "Anna",
    age: 30,
    hobbies: ["Leitura", "Cozinha", "Programação"],
  });

  const updateUserAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>

      <p>
        Nome: {user.name} e Idade: {user.age}
      </p>

      <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>
  );
};

export default UseStateComponent;
