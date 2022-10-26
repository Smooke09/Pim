import React, { useState, useEffect } from "react";
import connection from "../../API/connection";
import Input from "../../Components/Input";
import "./styles.scss";
import Spiner from "../../Components/Spineer";

const profile = () => {
  const [user, setUser] = useState({});
  const [client, setClient] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    rg: "",
    estadoCivil: "",
    Nacionalidade: "",
  });
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    connection.get("/users/18").then((response) => {
      setClient({
        nome: response.data.tb_pessoa.nm_pessoa,
        email: response.data.email,
        cpf: response.data.tb_pessoa.num_cpf_cnpj,
        telefone: response.data.tb_pessoa.num_contato,
        rg: response.data.tb_pessoa.num_rg,
        estadoCivil: response.data.tb_pessoa.estado_civil,
        Nacionalidade: response.data.tb_pessoa.nacionalidade,
      });
      setLoading(false);
    });
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  // console.log(user.tb_pessoa);
  console.log(client);

  return (
    <div className="container-profile-page">
      <button className="button-goback">
        <a href="/Home">VOLTAR</a>
      </button>
      <div className="profile-content">
        <form className="form-profile">
          <div className="profile-form fadeInLeft ">
            <img src="img/logo2.png" alt="logo" />
            <div className="div-h1">
              <h1 className="title-h1">Meu perfil</h1>
            </div>
            {loading ? (
              <Spiner />
            ) : (
              <div className="imputs-div">
                <div className="div-imput" id="input1">
                  <p>Nome:</p>
                  <Input
                    className="input-normal"
                    type="text"
                    name="name"
                    value={client?.nome}
                    onChange={(e) =>
                      setClient({ ...client, nome: e.target.value })
                    }
                    readOnly={!edit}
                  />
                  <p>Email:</p>
                  <Input
                    type="email"
                    className="input-normal"
                    value={client?.email}
                    onChange={(e) =>
                      setClient({ ...client, email: e.target.value })
                    }
                    readOnly={!edit}
                  />

                  <p>RG:</p>
                  <Input
                    type="number"
                    className="input-normal"
                    value={+client?.rg}
                    onChange={(e) =>
                      setClient({ ...client, rg: +e.target.value })
                    }
                    readOnly={!edit}
                  />

                  <p>CPF:</p>
                  <Input
                    type="number"
                    className="input-normal"
                    value={+client?.cpf}
                    onChange={(e) =>
                      setClient({ ...client, cpf: +e.target.value })
                    }
                    readOnly={!edit}
                  />
                </div>
                <div className="div-imput" id="input2">
                  <p>Número de contato:</p>
                  <Input
                    className="input-normal"
                    type="number"
                    value={+client?.telefone}
                    onChange={(e) =>
                      setClient({ ...client, num_contato: +e.target.value })
                    }
                    readOnly={!edit}
                  />

                  <p>Estado civil:</p>
                  <Input
                    className="input-normal"
                    type="text"
                    value={client?.estadoCivil}
                    onChange={(e) =>
                      setClient({ ...client, estado_civil: e.target.value })
                    }
                    readOnly={!edit}
                  />

                  <p>Nacionalidade:</p>
                  <Input
                    className="input-normal"
                    type="text"
                    value={client?.Nacionalidade}
                    onChange={(e) =>
                      setClient({ ...client, nacionalidade: e.target.value })
                    }
                    readOnly={!edit}
                  />
                </div>
              </div>
            )}
            <div className="button-profile">
              <button type="submit">Salvar</button>
              <button onClick={(e) => handleEdit(e)}>Editar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default profile;
