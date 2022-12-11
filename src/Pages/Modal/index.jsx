import React, { useEffect, useState } from "react";
import Api from "../../API/connection";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
import { ErrorCard } from "../../Components/Error";

const Modal = ({ setModal }) => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) return navigate("/login");

    const { id_pessoa } = JSON.parse(localStorage.getItem("user"));

    Api.get(`/client/form/unity/${id_pessoa}`).then((response) => {
      if (response.data) setData(true);
    });
  });

  return (
    <div className="container-modal-page">
      <button className="button-goback">
        <Link to="/home">VOLTAR</Link>
      </button>
      <div className="modal-content">
        <div className="modal-header">
          <h1>Solicitar Simulação</h1>
          <p>
            Aqui você pode acompanha sua solicitação ou <br />
            fazer uma nova solicitação
          </p>
        </div>
        <div className="modal-body">
          <div className="modal-buttons">
            <button
              className="button-simulacao"
              onClick={() => {
                if (data) {
                  return ErrorCard({
                    message: "Voce ja possui uma solicitacao em andamento",
                    type: "error",
                  });
                }
                navigate("/simulation");
              }}
            >
              Solicitar Simulação
            </button>
            <button
              className="button-acompanhar"
              onClick={() => navigate("/verify")}
            >
              Acompanhar Solicitação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
