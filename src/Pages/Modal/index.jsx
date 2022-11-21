import React, { useEffect, useState } from "react";
import Api from "../../API/connection";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
import { ErrorCard } from "../../Components/Error";

const Modal = ({ setModal }) => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  const { id_pessoa, id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
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
          <h1>Solicitar Simulacao</h1>
          <p>
            Aqui voce pode acompanha sua solicitacao ou <br />
            fazer uma nova soliciatacao
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
              Solicitar Simulacao
            </button>
            <button
              className="button-acompanhar"
              onClick={() => navigate("/simulation")}
            >
              Acompanhar Solicitacao
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
