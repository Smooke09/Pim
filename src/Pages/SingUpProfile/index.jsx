import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import connection from "../../API/connection";
import { Error, Success } from "../../Components/Error";
import Input from "../../Components/Input";
import Spiner from "../../Components/Spineer";
import "./styles.scss";

const SingUp = () => {
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState({
    usuario: "",
    senha: "",
    confirmSenha: "",
    dt_nascimento: "",
    genero: "",
    nacionalidade: "",
    reside_brasil: true,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const item = localStorage.getItem("client");
    const clientStorage = JSON.parse(item);
    connection
      .post("/public/add", {
        ...client,
        ...clientStorage,
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        localStorage.clear();
        Success({ message: "Cadastro realizado com sucesso!" });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Error({
          message: `Erro ao realizar o cadastro! ${error.response.data}`,
        });
      });
  };

  return (
    <div className="container-singUp-page">
      <button className="button-goback">
        <Link to="/singup">VOLTAR</Link>
      </button>
      <div className="singUp-content">
        <form className="form-singUp" onSubmit={handleSubmit}>
          <div className="singUp-form fadeInLeft ">
            <img src="/public/img/logo2.png" alt="logo" />
            <div className="input-content-singUp">
              <div className="input-left-singUp">
                <div className="div-input">
                  <span>Digite seu usuario:</span>
                  <Input
                    type="text"
                    placeholder="Digite seu nome"
                    value={client.usuario}
                    onChange={(e) =>
                      setClient({ ...client, usuario: e.target.value })
                    }
                  />
                </div>
                <div className="div-input">
                  <span>Digite sua senha:</span>
                  <Input
                    type="password"
                    placeholder="*********"
                    value={client.senha}
                    onChange={(e) =>
                      setClient({ ...client, senha: e.target.value })
                    }
                  />
                </div>
                <div className="div-input">
                  <span>Confirme sua senha: </span>
                  <Input
                    type="password"
                    placeholder="*********"
                    value={client.confirmSenha}
                    onChange={(e) =>
                      setClient({ ...client, confirmSenha: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="input-right-singUp">
                <div className="div-input">
                  <span>Data de nascimento</span>
                  <Input
                    type="date"
                    value={client.dt_nascimento}
                    onChange={(e) =>
                      setClient({ ...client, dt_nascimento: e.target.value })
                    }
                  />
                </div>
                <div className="div-input">
                  <span>Genero:</span>
                  <Input
                    type="text"
                    placeholder="MASCULINO"
                    value={client.genero}
                    onChange={(e) =>
                      setClient({
                        ...client,
                        genero: e.target.value.toUpperCase(),
                      })
                    }
                  />
                </div>
                <div className="div-input">
                  <span>Nacionalidade :</span>
                  <Input
                    type="text"
                    placeholder="Nacionalidade"
                    value={client.nacionalidade}
                    onChange={(e) =>
                      setClient({
                        ...client,
                        nacionalidade: e.target.value.toUpperCase(),
                      })
                    }
                  />
                </div>

                <div className="div-input">
                  <span>Reside no Brasil? :</span>
                  <select
                    name="residente"
                    onChange={(e) =>
                      setClient({
                        ...client,
                        reside_brasil: !e.target.value,
                      })
                    }
                  >
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="button-singUp">
              {loading ? <Spiner /> : <button type="submit">Cadastrar</button>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
