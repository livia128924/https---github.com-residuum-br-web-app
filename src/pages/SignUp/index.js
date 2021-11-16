import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/logo.png";

import { Form, Container } from "./styles";
import styles from "../../styles/components/Button.module.css";

class SignUp extends Component {
  componentDidMount() {
    document.title = "Cadastrar | Residuum";
  }

  state = {
    name: "",
    email: "",
    password: "",
    error: "",
  };

  handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;

    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os campos" });
    } else {
      try {
        await api.post("/users", { name, email, password });
        this.props.history.push("/signin");
      } catch (err) {
        const error = err.response.data.error;
        this.setState({ error });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp} className="drop-shadow">
          <img src={Logo} alt="Residuum Logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
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
          <input
            type="password"
            placeholder="Confirme a senha"
            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
          />
          <button className={`${styles["primary-container"]}`} type="submit">
            Cadastrar
          </button>
          <hr />
          <Link to="/login">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
