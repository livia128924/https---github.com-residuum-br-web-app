import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../assets/logo.png";
import rectangle from "../../assets/rectangle.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Form, Container } from "../Registration/styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SendIcon from "@material-ui/icons/Send";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./styles.css";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));
//  const  classes = useStyles();

class CadastroPolo extends Component {
  componentDidMount() {
    /// document.title = "Entrar | Residuum";
  }

  state = {
    nomeEmpresa: "",
    nStand: "",
    email: "",
    telefoneFixo: "",
    whatsapp: "",
    Senha: "",
  };

  handleSignIn = async (e) => {
    e.preventDefault();

    // const { email, password } = this.state;
    // if (!email || !password) {
    //   this.setState({ error: "Preencha e-mail e senha para continuar!" });
    // } else {
    //   try {
    //     const response = await api.post("/auth", { email, password });

    //     login(response.data);

    //     this.props.history.push("/");
    //   } catch (err) {
    //     this.setState({
    //       error: "Verifique suas credenciais",
    //     });
    //   }
    // }
  };

  render() {
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
                <div
                  className="menu_position"
                  onClick={() => alert("sdjfnsfk")}
                >
                  {/* <div className="line"></div> */}
                  <div className="classes">
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
              </div>
            </div>
          </div>

          <div style={{ position: "relative", left: 326, top: 44 }}>
            <hr style={{ width: 733 }} />
            {/* <a >nlknlkn</a> */}

            <div>


              <Form>
                <div
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    //   marginLeft: 1,
                    // backgroundColor:'red'
                  }}
                >
                  <a className="textStyle">Nome da empresa</a>
                  <input
                    // style={{backgroundColor:'red', borderWidth: 1, borderColor: "black"}}
                    type="nome_empreendimento"
                    placeholder="Nome do Empreendimento"
                    // value={nomeEmpreendimentoValue}
                    onChange={(e) =>
                      this.setState({ nomeEmpresa: e.target.value })
                    }
                  />
                </div>
              </Form>
              <Form>
                <div style={{ flexDirection: "column", width: 200 }}>
                  <a className="textStyle">Numero do Stand</a>
                  <input
                    //type="text"
                    placeholder="ex: 02"
                    /// value={cepValue}
                    onChange={(e) => this.setState({ nStand: e.target.value })}
                  />
                </div>

                <div
                  style={{
                    flexDirection: "column",
                    width: "100%",
                    marginLeft: 39,
                  }}
                >
                  <a className="textStyle">Email</a>
                  <input
                    //type="nome_empreendimento"
                    placeholder="seuemail@gmail.com"
                    // value={enderecoValue}
                    onChange={(e) => this.setState({ eamil: e.target.value })}
                  />
                </div>
              </Form>

              <Form>
                <div style={{ flexDirection: "column", width: 200 }}>
                  <a className="textStyle">Telefone Fixo</a>
                  <input
                    //  type="cnpj"
                    placeholder="(92) 99999-9999"
                    // value={telefoneFixoValue}
                    onChange={(e) =>
                      this.setState({ telefoneFixo: e.target.value })
                    }
                  />
                </div>

                <div
                  style={{
                    flexDirection: "column",
                    //width: "auto",
                    marginLeft: 39,
                    width: 200,
                  }}
                >
                  <a className="textStyle">Whatsapp</a>
                  <input
                    //type="nome_empreendimento"
                    placeholder="(92) 99999-9999"
                    // value={whatsappValue}
                    onChange={(e) =>
                      this.setState({ whatsapp: e.target.value })
                    }
                  />
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    //width: "auto",
                    marginLeft: 39,
                    width: 145,
                  }}
                >
                  <a className="textStyle">Senha</a>
                  <input
                    //type="nome_empreendimento"
                    placeholder="********"
                    // value={whatsappValue}
                    onChange={(e) => this.setState({ senha: e.target.value })}
                  />
                </div>
              </Form>


              {/* <div>
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
          </div> */}

            </div>

            <hr style={{ width: 733 }} />
            <Button
              style={{
                borderRadius: 19,
                color: "white",
                backgroundColor: "#3CAF2D",
              }}
              variant="contained"
              color="primary"
              className="classes"
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CadastroPolo);
