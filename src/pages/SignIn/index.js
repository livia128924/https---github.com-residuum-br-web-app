import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import Logo from "../../assets/logo.png";
import recicleLogo from "../../assets/recicle.png";
import background from "../../assets/bg-tela-login 1.png";
import { Form, Container } from "./styles";
import styles from "../../styles/components/Button.module.css";

class SignIn extends Component {
  componentDidMount() {
    document.title = "Entrar | Residuum";
  }

  state = {
    email: "",
    password: "",
    error: "",
  };

  handleSignIn = async (e) => {
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
        <Form onSubmit={this.handleSignIn} className="drop-shadow">

          <img src={Logo} alt="Residuum logo" />
          <div>
            <a style={{ fontFamily:"Montserrat", fontSize:20, fontStyle: "normal", fontWeight: "normal", fontVariant: "small-caps", bottom:24, position:"relative" }}>FAÇA SEU LOGIN</a>
          </div>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button className={`${styles["primary-container"]}`} type="submit">
            Continuar
          </button>
          <hr />
          <Link to="/signup"  style={{fontSize:12, fontFamily:"Montserrat",fontStyle:"normal", fontWeight: 'normal'}}>
            Esqueceu sua senha
            </Link>
          <div>
          <Link to="" style={{fontSize:12,fontFamily:"Montserrat",fontStyle:"normal", fontWeight: 'bold'}}>
            Ainda não sou cliente

            </Link>
          </div>
        </Form>
        <div>
        <img style={{opacity: 1.3,position: 'absolute', width: 160, bottom: 0, mixBlendMode: 'multiply', right: 0}} src={recicleLogo} alt="recicle logo" />
        </div>

        <div>
        {/* <img  src={background} alt="background" /> */}
        </div>

      </Container>
    );
  }
}

export default withRouter(SignIn);
