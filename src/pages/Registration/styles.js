import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
display: flex;

border-radius: 11px;
flex-direction: row;
align-items: center;

  img {
    width: 15rem;
    margin: 0.625rem 0 2.5rem;
  }

  input {
    height: 37px;
    margin-bottom: 1.25rem;
    padding: 0 1.25rem;
    border-radius: 0.25rem;
    color: var(--text-dark);
    font-size: 1.15rem;
    width: 100%;
    borderWidth: 1;
   borderColor: "black"

  }

  button {
    font-weight: 600;
    font-size: 1.25rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    width: 100%;
    cursor: pointer;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  a {
    fontSize: 16px,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    color: "#86868D",
    font-size: 1rem;
    font-weight: bold;
    color: #999;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: var(--primary-color);
    }
  }
`;
