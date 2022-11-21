import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Error } from "../../Components/Error";
import connection from "../../API/connection";
import Input from "../../Components/Input";
import isValidCPF from "../../helpers/isValidCpf";

import "./styles.scss";

const SingUpProfile = () => {
  const navigate = useNavigate();

  const [client, setClient] = useState({
    nm_pessoa: "",
    num_rg: "",
    num_cpf_cnpj: "",
    email: "",
    num_contato: "",
    estado_civil: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    isValidCPF(client.num_cpf_cnpj);

    if (
      client.nm_pessoa === "" ||
      client.num_rg === "" ||
      client.num_cpf_cnpj === "" ||
      client.email === "" ||
      client.num_contato === "" ||
      client.estado_civil === ""
    ) {
      return Error({ message: "Preencha todos os campos" });
    } else {
      localStorage.setItem("client", JSON.stringify(client));
      navigate("/singup/profile");
    }
  };

  return (
    <div className="container-singUp-page">
      <button className="button-goback">
        <Link to="/login">VOLTAR</Link>
      </button>
      <div className="singUp-content">
        <form className="form-singUp" onSubmit={handleSubmit}>
          <div className="singUp-form fadeInLeft ">
            <img src="img/logo2.png" alt="logo" />
            <div className="input-content-singUp">
              <div className="input-left-singUp">
                <div className="div-input">
                  <span>Digite Seu nome:</span>
                  <Input
                    type="text"
                    placeholder="Digite seu nome"
                    value={client.nm_pessoa}
                    onChange={(e) =>
                      setClient({ ...client, nm_pessoa: e.target.value })
                    }
                  />
                </div>
                <div className="div-input">
                  <span>Digite seu RG:</span>
                  <Input
                    type="number"
                    placeholder="000000000"
                    value={client.num_rg}
                    onChange={(e) =>
                      setClient({ ...client, num_rg: e.target.value })
                    }
                  />
                </div>
                <div className="div-input">
                  <span>Digite seu CPF: </span>
                  <Input
                    type="number"
                    placeholder="123456789"
                    value={client.num_cpf_cnpj}
                    onChange={(e) =>
                      setClient({ ...client, num_cpf_cnpj: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="input-right-singUp">
                <div className="div-input">
                  <span>Email</span>
                  <Input
                    type="text"
                    placeholder="Digite seu email"
                    value={client.email}
                    onChange={(e) =>
                      setClient({ ...client, email: e.target.value })
                    }
                  />
                </div>
                <div className="div-input">
                  <span>Telefone para contato:</span>
                  <Input
                    type="text"
                    placeholder="13981706262"
                    value={client.num_contato}
                    onChange={(e) =>
                      setClient({ ...client, num_contato: e.target.value })
                    }
                  />
                </div>
                <div className="div-input">
                  <span>Estado civil:</span>
                  <Input
                    type="text"
                    placeholder="Estado Civil"
                    value={client.estado_civil}
                    onChange={(e) =>
                      setClient({
                        ...client,
                        estado_civil: e.target.value.toUpperCase(),
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="button-singUp">
              <button type="submit">Avançar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUpProfile;
