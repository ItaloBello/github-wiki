import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { api } from "../services/api";
import { Container } from "./styles";
const App = () => {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepo = async () => {
    const { data } = await api.get(`/repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }else{
        alert("repositorio ja esta na lista")
      }
    }
  };
const handleRemoveRepo = (id) =>{
  const newRepos = repos.filter(repo => repo.id != id)
  setRepos(newRepos)
}
  return (
    <Container>
      <img src={gitLogo} alt="github logo" width={100} height={100} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} removeRepo={handleRemoveRepo}/>
      ))}
    </Container>
  );
};

export default App;
