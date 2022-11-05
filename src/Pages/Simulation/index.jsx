import React, { useState, useEffect } from "react";
import Api from "../../API/connection";
import Input from "../../Components/Input";
import { Error, Success } from "../../Components/Error";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Simulation = () => {
  const navigate = useNavigate();

  const { id } = JSON.parse(localStorage.getItem("user"));

  console.log(id);

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
  const [pessoaKey, setPessoaKey] = useState(null);

  useEffect(() => {
    Api.get(`/users/${id}`).then((response) => {
      console.log("RESPONSE DA API", response.data);
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
        nacionalidade: data.nacionalidade,
        reside_brasil: data.reside_brasil,
        birth: data.dt_nascimento?.split("T")[0],
        hobbies: client?.hobbies,
        fuma: client?.fuma,
        registro_conducao: client?.registro_conducao,
        faixa_renda: client?.faixa_renda,
        politicamente_exposto: client?.politicamente_exposto,
        vinculo_politico: client?.vinculo_politicamente_exposto,
        profissao: client?.profissao,
        risco_profissao: "PEQUENO",
      });
    });
  }, []);

  console.log("clientes", client.fuma);

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
        <a href="/home">VOLTAR</a>
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
                  readOnly
                />
                <p>RG:</p>
                <Input
                  className="input-normal"
                  value={+client?.rg}
                  onChange={(e) => setClient({ ...client, rg: e.target.value })}
                  type="number"
                  readOnly
                />

                <p>CPF:</p>
                <Input
                  className="input-normal"
                  value={+client?.cpf}
                  onChange={(e) =>
                    setClient({ ...client, cpf: e.target.value })
                  }
                  type="number"
                  readOnly
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
                        readOnly
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
                        readOnly
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
                  readOnly
                />
                <p>Estado civil:</p>
                <Input
                  className="input-normal"
                  value={client?.estado_civil}
                  onChange={(e) =>
                    setClient({ ...client, estado_civil: e.target.value })
                  }
                  readOnly
                />

                <p>Nacionalidade:</p>
                <Input
                  className="input-normal"
                  value={client?.nacionalidade}
                  onChange={(e) =>
                    setClient({ ...client, nacionalidade: e.target.value })
                  }
                  readOnly
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
                        readOnly
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
                        readOnly
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
                  readOnly
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
                        readOnly
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
                        readOnly
                      />
                    </>
                  </fieldset>
                </div>
                <p>Registro de condução:</p>
                <Input
                  className="input-normal"
                  value={client?.registro_conducao}
                  onChange={(e) =>
                    setClient({ ...client, registro_conducao: e.target.value })
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
                        readOnly
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
                        readOnly
                      />
                    </>
                  </fieldset>
                </div>
                <p>CEP:</p>
                <input
                  type="number"
                  className="input-normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="div-imput">
                <p>Tipo de imóvel:</p>
                <input
                  className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="div-checkbox">
                  <p>Residência propria?:</p>
                  <input className="input-checkbox" type="checkbox" />
                  <label>Sim</label>
                  <input className="input-checkbox" type="checkbox" />
                  <label>Não</label>
                </div>
                <p>
                  Complemento, número da residência e detalhes sobre a moradia
                  caso necessário
                </p>
                <input
                  className="input-normal"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Trabalho:</p>
                <Input
                  className="input-normal"
                  value={client?.profissao}
                  onChange={(e) =>
                    setClient({ ...client, profissao: e.target.value })
                  }
                />

                <div className="div-checkbox">
                  <p>Risco do trabalho:</p>
                  <fieldset style={{ border: "none", display: "flex" }}>
                    <>
                      <select
                        value={client?.risco_profissao}
                        onChange={(e) =>
                          setClient({
                            ...client,
                            risco_profissao: e.target.value,
                          })
                        }
                      >
                        <option value="NULO">Nulo</option>
                        <option value="BAIXO">Baixo</option>
                        <option value="MEDIO">Médio</option>
                        <option value="ALTO">Alto</option>
                        <option value="EXTREMO">Extremo</option>
                      </select>
                    </>
                  </fieldset>
                </div>
                <p>Email:</p>
                <Input
                  className="input-normal"
                  value={client?.email}
                  readOnly
                />
              </div>
            </div>
            <div className="button-simulation">
              <button type="submit">Simular</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Simulation;
