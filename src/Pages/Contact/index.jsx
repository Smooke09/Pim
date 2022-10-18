import React from "react";
import "./styles.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-content">
        <div className="box-contact">
          <div className="content-left">
            <div className="content-text">
              <h1>Ainda não sabe qual seguro contratar?</h1>
              <p>
                Entre em contato conosco <br />
                para ter uma consultoria gratuita!
              </p>
            </div>
          </div>
          <div className="content-right">
            <div className="content-text-right">
              <h1>
                Se preferir, entre em <br />
                contato conosco pelo E-mail
              </h1>
              <div className="button-contact">
                <button>
                  <a href="mailto: safetylife.rh@gmail.com">
                  Solicitar contato
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
