import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import rectangle from "../../../assets/rectangle.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Form, Container } from "../styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SendIcon from "@material-ui/icons/Send";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./styles.css";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function FormStep4() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [cnpjValue, setCnpjValue] = React.useState("");
  const [nomeEmpreendimentoValue, setNomeEmpreendimentoValue] =
    React.useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <ProgressBar now={30} />

      <div style={{ flexDirection: "row", display: "flex" }}>
        <div style={{ position: "absolute", left: 86 }}>
          <div>
            <img
              style={{
                flexDirection: "row",
                width: 200,
                padding: 5,
                display: "flex",
              }}
              src={Logo}
              alt="Residuum logo"
            />
          </div>
          {/* <img style={{ flexDirection: "row" }} src={rectangle} alt="menu" /> */}
          <div className="menu_container">
            <div style={{ flexDirection: "column" }}>
              {/* <hr
                style={{
                  position: "relative",
                  top: 30,
                  backgroundColor: "white",
                  width: 176,
                  left: 13,
                }}
              /> */}
              <div className="menu_position" onClick={() => alert("sdjfnsfk")}>
                {/* <a className="textStyle_modules">CADASTRO</a> */}
                <div className={classes.button}>
                  <Button
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 12,
                      textDecoration: "none",
                      color: "#ffffff",
                    }}
                    endIcon={<ArrowRightIcon />}
                  >
                    CADASTRO
                  </Button>
                </div>
              </div>
              <div className="line"></div>
                  <div className="menu_position" onClick={() => alert("sdjfnsfk")}>
                {/* <a className="textStyle_modules">CADASTRO</a> */}
                <div className={classes.button}>
                  <Button
                    style={{

                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 10,
                      textDecoration: "none",
                      color: "#ffffff",
                    }}
                  >
                    Informações Gerais
                  </Button>
                </div>
              </div>
              <div className="line"></div>
              <div className="menu_position" onClick={() => alert("sdjfnsfk")}>
                {/* <a className="textStyle_modules">CADASTRO</a> */}
                <div className={classes.button}>
                  <Button
                    style={{

                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 10,
                      textDecoration: "none",
                      color: "#ffffff",
                    }}
                  >
                    Infraestrutura
                  </Button>
                </div>
              </div>
              <div className="line"></div>
              <div className="menu_position" onClick={() => alert("sdjfnsfk")}>
                {/* <a className="textStyle_modules">CADASTRO</a> */}
                <div className={classes.button}>
                  <Button
                    style={{

                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 10,
                      textDecoration: "none",
                      color: "#ffffff",
                    }}
                  >
                    Central de Resíduos
                  </Button>
                </div>
              </div>
              <div className="line"></div>
              <div className="menu_position" onClick={() => alert("sdjfnsfk")}>
                {/* <a className="textStyle_modules">CADASTRO</a> */}
                <div className={classes.button}>
                  <Button
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 10,
                      textDecoration: "none",
                      color: "#ffffff",
                    }}
                  >
                    Logística
                  </Button>
                </div>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", left: 326, top: 44 }}>
          <hr style={{ width: 733 }} />
          {/* <a >nlknlkn</a> */}

          <div>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                style={{
                  fontSize: 14,
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  color: "#86868D",
                }}
              >
                Selecione seu perfil
              </FormLabel>
              <RadioGroup
                row
                aria-label="perfil"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="condominio"
                  control={<Radio color="primary" />}
                  label="Condominio"
                />
                <FormControlLabel
                  value="atacarejo"
                  control={<Radio color="primary" />}
                  label="Atacarejo"
                />
                <FormControlLabel
                  value="industria"
                  control={<Radio color="primary" />}
                  label="Industria"
                />
                <FormControlLabel
                  value="governo"
                  control={<Radio color="primary" />}
                  label="Governo"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div>
            <Form>
              <div
                style={{
                  flexDirection: "column",
                  width: 224,
                }}
              >
                <a className="textStyle">Cnpj</a>
                <input
                  type="cnpj"
                  placeholder="cnpj"
                  value={cnpjValue}
                  onChange={(value) => setCnpjValue(value)}
                />
              </div>

              <div
                style={{
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: 39,
                }}
              >
                <a className="textStyle">Nome do Empreendimento</a>
                <input
                  type="nome_empreendimento"
                  placeholder="Nome do Empreendimento"
                  value={nomeEmpreendimentoValue}
                  onChange={(value) => setNomeEmpreendimentoValue(value)}
                />
              </div>
            </Form>
            <Form>
              <div style={{ flexDirection: "column", width: 145 }}>
                <a className="textStyle">Cep</a>
                <input
                  type="cnpj"
                  placeholder="cnpj"
                  value={cnpjValue}
                  onChange={(value) => setCnpjValue(value)}
                />
              </div>

              <div
                style={{
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: 39,
                }}
              >
                <a className="textStyle">Endereço</a>
                <input
                  type="nome_empreendimento"
                  placeholder="Nome do Empreendimento"
                  value={nomeEmpreendimentoValue}
                  onChange={(value) => setNomeEmpreendimentoValue(value)}
                />
              </div>
            </Form>
            <Form>
              <div style={{ flexDirection: "column", width: 145 }}>
                <a className="textStyle">Numero</a>
                <input
                  type="cnpj"
                  placeholder="cnpj"
                  value={cnpjValue}
                  onChange={(value) => setCnpjValue(value)}
                />
              </div>

              <div
                style={{
                  flexDirection: "column",
                  width: "100%",
                  marginLeft: 39,
                }}
              >
                <a className="textStyle">Bairro</a>
                <input
                  type="nome_empreendimento"
                  placeholder="Nome do Empreendimento"
                  value={nomeEmpreendimentoValue}
                  onChange={(value) => setNomeEmpreendimentoValue(value)}
                />
              </div>
            </Form>
            <Form>
              <div style={{ flexDirection: "column", width: "100%" }}>
                <a className="textStyle">Complemento</a>
                <input
                  type="cnpj"
                  placeholder="cnpj"
                  value={cnpjValue}
                  onChange={(value) => setCnpjValue(value)}
                />
              </div>
            </Form>
            <Form>
              <div style={{ flexDirection: "column", width: "100%" }}>
                <a className="textStyle">Nome do Responsável</a>
                <input
                  type="cnpj"
                  placeholder="cnpj"
                  value={cnpjValue}
                  onChange={(value) => setCnpjValue(value)}
                />
              </div>
            </Form>

            <Form>
              <div style={{ flexDirection: "column", width: 145 }}>
                <a className="textStyle">Telefone Fixo</a>
                <input
                  type="cnpj"
                  placeholder="cnpj"
                  value={cnpjValue}
                  onChange={(value) => setCnpjValue(value)}
                />
              </div>

              <div
                style={{
                  flexDirection: "column",
                  width: "auto",
                  marginLeft: 39,
                }}
              >
                <a className="textStyle">Whatsapp</a>
                <input
                  type="nome_empreendimento"
                  placeholder="Nome do Empreendimento"
                  value={nomeEmpreendimentoValue}
                  onChange={(value) => setNomeEmpreendimentoValue(value)}
                />
              </div>
            </Form>
          </div>

          <div>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                style={{
                  fontSize: 14,
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  color: "#86868D",
                }}
              >
                Possui Plano de Gerenciamento de Resíduos Sólidos reconhecido
                pelos órgãos responsáveis? *
              </FormLabel>
              <RadioGroup
                row
                aria-label="perfil"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="sim"
                  control={<Radio color="primary" />}
                  label="Sim"
                />
                <FormControlLabel
                  value="nao"
                  control={<Radio color="primary" />}
                  label="Nao"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <a className="textStyle">Se sim, enviar o PDF do documento.</a>
          <Button
            style={{ borderRadius: 19 }}
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>

          <Button
            style={{ borderRadius: 19 }}
            variant="contained"
            color="primary"
            className={classes.button}
            // startIcon={<SendIcon />}
            startIcon={<SendIcon />}
          >
            Send
          </Button>
          <hr style={{ width: 733 }} />
          <Button
            style={{
              borderRadius: 19,
              color: "white",
              backgroundColor: "#3CAF2D",
            }}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
}

//export default withRouter(FormStep4);
