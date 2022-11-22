import React, { useEffect, useState } from "react";
import Api from "../../API/connection";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
import { ErrorCard } from "../../Components/Error";

const VerifyModal = () => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  const [chamado, setChamado] = useState({
    status: "",
    funcionario_resp: "",
    data: "",
    id: "",
  });

  const { cliente_id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    Api.get(`/client/form/unity/${cliente_id}`).then((response) => {
      console.log(response);
      const chamado = response.data.tb_chamado[0];

      const date = chamado.data?.split("T")[0];

      setChamado({
        status: chamado?.status,
        funcionario_resp: chamado?.funcionario_resp,
        data: date,
        id: chamado?.id,
      });
    });
  }, []);

  return (
    <div className="container-modal-page">
      <button className="button-goback">
        <Link to="/modal/simulation">VOLTAR</Link>
      </button>
      <div className="modal-status-content">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Status</th>
              <th>Funcionario Responsavel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{chamado.data}</td>
              <td>{chamado.status}</td>
              <td>{chamado.funcionario_resp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerifyModal;
