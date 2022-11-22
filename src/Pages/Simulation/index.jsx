import React, { useState, useEffect } from "react";
import Api from "../../API/connection";
import Input from "../../Components/Input";
import { Error, ErrorCard, Success } from "../../Components/Error";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import "./styles.scss";

const Simulation = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(true);

  const { id_pessoa, id } = JSON.parse(localStorage.getItem("user"));

  const [modal, setModal] = useState(false);
  const [client, setClient] = useState({
    name: "",
    email: "",
    rg: "",
    cpf: "",
    genero: "",
    num_contato: "",
    birth: "",
    pessoa_key: id_pessoa,
    estado_civil: "",
    hobbies: "",
    profissao: "",
    renda: "",
  });
  const [edit, setEdit] = useState(false);

  const [pessoaKey, setPessoaKey] = useState(null);

  useEffect(() => {
    Api.get(`/users/${id}`).then((response) => {
      console.log("repsonse full", response);
      const data = response.data.tb_pessoa;
      const client = data.tb_cliente[0];
      console.log(client);
      const convertTelBR = (tel) => {
        const telBR = tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        return telBR;
      };
      setPessoaKey(response.data.pessoa_key);
      console.log(data.nm_pessoa);
      setClient({
        name: data.nm_pessoa,
        email: response.data.email,
        rg: data.num_rg,
        cpf: data.num_cpf_cnpj,
        genero: data.genero,
        num_contato: convertTelBR(data.num_contato),
        birth: data.dt_nascimento,
        estado_civil: client.estado_civil,
      });
    });
  }, []);

  console.log(client);

  useEffect(() => {
    if (id_pessoa) {
      Api.get(`/client/form/unity/${id_pessoa}`).then((response) => {
        navigate("/modal/simulation");
        ErrorCard({
          message: "Você já possui uma simulação em andamento!",
          type: "error",
        });
      });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      status: "pendente",
      pessoa_key: pessoaKey,
      funcionario_id: 1,
      hobbies: client.hobbies,
      profissao: client.profissao,
      faixa_renda: client.renda,
      client_id: client.id,
    };

    Api.post(`/client/form/create`, data)
      .then((response) => {
        Success({ message: "Dados enviados com sucesso!" });
      })
      .catch((error) => {
        Error({
          message: error.response.data,
        });
      });
  };

  return (
    <div className="container-simulation-page">
      <button className="button-goback">
        <Link to="/modal/simulation">VOLTAR</Link>
      </button>
      <div className="simulation-content">
        <form className="form-simulation" onSubmit={handleSubmit}>
          <div className="simulation-form fadeInLeft ">
            <img src="img/logo2.png" alt="logo" />
            <div className="imputs-div">
              <div className="div-imput" id="input1">
                <p>Nome:</p>
                <Input
                  className="input-normal"
                  value={client?.name}
                  onChange={(e) =>
                    setClient({ ...client, name: e.target.value })
                  }
                  readOnly={!edit}
                />
                <p>RG:</p>
                <Input
                  className="input-normal"
                  value={client?.rg}
                  onChange={(e) => setClient({ ...client, rg: e.target.value })}
                  readOnly={!edit}
                />

                <p>CPF:</p>
                <Input
                  className="input-normal"
                  value={client?.cpf}
                  onChange={(e) =>
                    setClient({ ...client, cpf: e.target.value })
                  }
                  readOnly={!edit}
                />

                <div className="div-checkbox">
                  <p>Gênero:</p>
                  <fieldset
                    style={{
                      border: "none",
                      display: "flex",
                    }}
                  >
                    <>
                      <Input
                        type="radio"
                        name="genero"
                        value="MASCULINO"
                        checked={client?.genero === "MASCULINO"}
                        onChange={(e) =>
                          setClient({ ...client, genero: e.target.value })
                        }
                      />
                      <label className={{ padding: "2px" }}>Masculino</label>

                      <Input
                        type="radio"
                        name="genero"
                        value="FEMININO"
                        checked={client?.genero === "FEMININO"}
                        onChange={(e) =>
                          setClient({ ...client, genero: e.target.value })
                        }
                        readOnly={!edit}
                      />
                      <label className={{ padding: "2px" }}>Feminino</label>

                      <Input
                        type="radio"
                        name="genero"
                        value="OUTROS"
                        checked={client?.genero === "OUTROS"}
                        onChange={(e) =>
                          setClient({ ...client, genero: e.target.value })
                        }
                        readOnly={!edit}
                      />
                      <label className={{ padding: "2px" }}>Outros</label>
                    </>
                  </fieldset>
                </div>
                <p>Número de contato:</p>
                <Input
                  type="tel"
                  className="input-normal"
                  value={client?.num_contato}
                  onChange={(e) =>
                    setClient({ ...client, num_contato: e.target.value })
                  }
                  readOnly={!edit}
                />
                <p>Estado civil:</p>
                <Input
                  className="input-normal"
                  value={client?.estado_civil}
                  onChange={(e) =>
                    setClient({ ...client, estado_civil: e.target.value })
                  }
                  readOnly={!edit}
                />
              </div>
              <div className="div-imput" id="input2">
                <p>Data de nascimento:</p>
                <Input
                  className="input-normal"
                  value={client?.birth}
                  onChange={(e) =>
                    setClient({ ...client, birth: e.target.value })
                  }
                  type="date"
                  readOnly={!edit}
                />

                <p>Email:</p>
                <Input
                  className="input-normal"
                  value={client?.email}
                  readOnly={!edit}
                />
                <p>Profissão:</p>
                <Input
                  className="input-normal"
                  value={client?.profissao}
                  onChange={(e) =>
                    setClient({ ...client, profissao: e.target.value })
                  }
                />
                <p>Hobbies:</p>
                <Input
                  className="input-normal"
                  value={client?.hobbies}
                  onChange={(e) =>
                    setClient({ ...client, hobbies: e.target.value })
                  }
                />
                <p>Faixa de renda:</p>
                <Input
                  className="input-normal"
                  value={+client?.renda}
                  onChange={(e) =>
                    setClient({ ...client, renda: +e.target.value })
                  }
                  type="number"
                />
              </div>
            </div>
            {data && (
              <div className="button-simulation">
                <button type="submit">Simular</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Simulation;
