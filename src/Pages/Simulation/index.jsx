import React, { useState, useEffect } from "react";
import Api from "../../API/connection";
import Input from "../../Components/Input";
import { Error, Success } from "../../Components/Error";
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
    rg: "",
    cpf: "",
    genero: "",
    num_contato: "",
    estado_civil: "",
    nacionalidade: "",
    reside_brasil: "",
    birth: "",
    hobbies: "",
    fuma: false,
    RegistroDeConducao: "",
    renda: 0,
    politicamenteExposto: false,
    vinculoPolitico: false,
    profissao: "",
    risco_profissao: "",
  });
  const [edit, setEdit] = useState(false);

  const [pessoaKey, setPessoaKey] = useState(null);

  console.log(client);

  useEffect(() => {
    Api.get(`/users/${id}`).then((response) => {
      const data = response.data.tb_pessoa;
      const client = data.tb_cliente[0];

      const convertTelBR = (tel) => {
        const telBR = tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        return telBR;
      };

      setPessoaKey(response.data.pessoa_key);

      setClient({
        name: data.nm_pessoa,
        email: response.data.email,
        rg: data.num_rg,
        cpf: data.num_cpf_cnpj,
        genero: data.genero,
        num_contato: convertTelBR(data?.num_contato),
        estado_civil: data.estado_civil,
        birth: data.dt_nascimento?.split("T")[0],
        hobbies: client?.hobbies,
        fuma: client?.fuma,
        registro_conducao: client?.registro_conducao,
        faixa_renda: client?.faixa_renda,
        politicamente_exposto: client?.politicamente_exposto,
        profissao: client?.profissao,
        risco_profissao: "PEQUENO",
      });
    });
  }, []);

  useEffect(() => {
    if (id_pessoa) {
      Api.get(`/client/form/unity/${id_pessoa}`).then((response) => {
        console.log(response.data);
        if (response.data) setData(false);
      });
    }
  });

  const changeEdit = () => {
    setEdit(!edit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      hobbies: client.hobbies,
      fuma: client.fuma,
      registro_conducao: client.registro_conducao,
      faixa_renda: client.faixa_renda,
      politicamente_exposto: client.politicamente_exposto,
      vinculo_politico: client.vinculo_politico,
      profissao: client.profissao,
      risco_profissao: client.risco_profissao,
    };

    Api.post(`/client/form/create/${pessoaKey}`, data)
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

                <p>Nacionalidade:</p>
                <Input
                  className="input-normal"
                  value={client?.nacionalidade}
                  onChange={(e) =>
                    setClient({ ...client, nacionalidade: e.target.value })
                  }
                />
                <div className="div-checkbox">
                  <p>Reside no Brasil?:</p>
                  <fieldset
                    style={{
                      border: "none",
                      display: "flex",
                    }}
                  >
                    <>
                      <Input
                        label="Sim"
                        type="radio"
                        name="reside_brasil"
                        value={client?.reside_brasil}
                        checked={client?.reside_brasil}
                        onChange={(e) =>
                          setClient({
                            ...client,
                            reside_brasil: e.target.value,
                          })
                        }
                        readOnly={!edit}
                      />
                      <Input
                        label="Não"
                        type="radio"
                        name="reside_brasil"
                        value={client?.reside_brasil}
                        checked={!client?.reside_brasil}
                        onChange={(e) =>
                          setClient({
                            ...client,
                            reside_brasil: e.target.value,
                          })
                        }
                        readOnly={!edit}
                      />
                    </>
                  </fieldset>
                </div>
              </div>
              <div className="div-imput">
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
                <p>Hobbies:</p>
                <Input
                  className="input-normal"
                  value={client?.hobbies}
                  onChange={(e) =>
                    setClient({ ...client, hobbies: e.target.value })
                  }
                />
                <div className="div-checkbox">
                  <p>Fuma?:</p>
                  <fieldset
                    style={{
                      border: "none",
                      display: "flex",
                    }}
                  >
                    <>
                      <Input
                        label="Sim"
                        type="radio"
                        name="fuma"
                        value={client?.fuma}
                        checked={!client?.fuma}
                        onChange={(e) =>
                          setClient({ ...client, fuma: e.target.value })
                        }
                        readOnly={!edit}
                      />
                      <Input
                        label="Não"
                        type="radio"
                        name="fuma"
                        value={client?.fuma}
                        checked={!client?.fuma}
                        onChange={(e) =>
                          setClient({ ...client, fuma: e.target.value })
                        }
                        readOnly={!edit}
                      />
                    </>
                  </fieldset>
                </div>
                <p>Registro de condução:</p>
                <Input
                  className="input-normal"
                  value={client?.registro_conducao}
                  onChange={(e) =>
                    setClient({
                      ...client,
                      registro_conducao: e.target.value,
                    })
                  }
                />

                <p>Faixa de renda mensal:</p>
                <Input
                  className="input-normal"
                  value={+client?.faixa_renda}
                  onChange={(e) =>
                    setClient({ ...client, faixa_renda: +e.target.value })
                  }
                  type="number"
                />
                <p>Profissao</p>
                <Input
                  className="input-normal"
                  value={client?.profissao}
                  onChange={(e) =>
                    setClient({ ...client, profissao: e.target.value })
                  }
                  type="number"
                />
                <div className="div-checkbox">
                  <p>Politicamente exposto?:</p>
                  <fieldset style={{ border: "none", display: "flex" }}>
                    <>
                      <Input
                        type="radio"
                        label="Sim"
                        name="politico"
                        value={client?.politicamenteExposto}
                        checked={client?.politico}
                        onChange={(e) =>
                          setClient({
                            ...client,
                            politicamenteExposto: e.target.value,
                          })
                        }
                        readOnly={!edit}
                      />
                      <Input
                        type="radio"
                        label="Não"
                        name="politico"
                        value={client?.politicamenteExposto}
                        checked={!client?.politico}
                        onChange={(e) =>
                          setClient({
                            ...client,
                            politicamenteExposto: e.target.value,
                          })
                        }
                        readOnly={!edit}
                      />
                    </>
                  </fieldset>
                </div>

                <p>Email:</p>
                <Input
                  className="input-normal"
                  value={client?.email}
                  readOnly={!edit}
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
