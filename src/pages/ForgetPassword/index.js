import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import Logo from "../../assets/logo.png";
import recicleLogo from "../../assets/recicle.png";
import background from "../../assets/bg-tela-login 1.png";
import { Form, Container, Card } from "./styles";
import styles from "../../styles/components/Button.module.css";

class ForgetPassword extends Component {
  componentDidMount() {
    document.title = "Entrar | Residuum";
  }

  state = {
    email: "",
    error: "",
  };

  handleForgetPassword = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth", { email, password });

        login(response.data);

        this.props.history.push("/");
      } catch (err) {
        this.setState({
          error: "Verifique suas credenciais",
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleForgetPassword} className="drop-shadow">
          <Card>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img src={Logo} alt="Residuum logo" />
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
               marginBottom:24,
              }}
            >
              <a>ESQUECI MINHA SENHA</a>
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginLeft: 44,
                marginRight: 33,
                marginBottom: 20,
              }}
            >
              <a>Para redefinir sua senha, informe seu e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</a>
            </div>
            {this.state.error && <p>{this.state.error}</p>}

            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <input
                type="email"
                placeholder="Usuario ou email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <button type="submit">Continuar</button>
            </div>
            <hr />
            <div >
            <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
            <Link
              to="/login"
              style={{
                fontSize: 12,
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "normal",
              }}
            >
             Cancelar {">"}
            </Link>
            </div>

</div>
          </Card>
        </Form>

        <div>
          <img
            style={{
              opacity: 1.3,
              position: "absolute",
              width: 160,
              bottom: 0,
            //  mixBlendMode: "multiply",
              right: 0,
            }}
            src={recicleLogo}
            alt="recicle logo"
          />
          {/* <div className="background">
          <img

            src={background}
            alt="recicle logo"
          />
          </div> */}
        </div>



      </Container>
    );
  }
}

export default withRouter(ForgetPassword);
