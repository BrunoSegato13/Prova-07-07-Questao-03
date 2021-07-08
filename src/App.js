import { useEffect, useState } from 'react';
import './App.css';
import api from "./services/api"


function App() {

  const [user, setUser] = useState();
  

  useEffect(()=>{
    api.get("users/BrunoSegato13")
    .then((response) => setUser(response.data))
    .catch((error) => {console.log(error)})
  }, []);

  console.log("User name:", user.login);
  console.log("User bio:", user.bio);
  console.log("Qtd de Repos", user.public_repos);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Prova Questão 3
        </p>
      </header>
    </div>
  );
}

export default App;
