import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Card = styled.div`
position: absolute;
width: 390px;
height: 445px;
left: 503px;
top: 130px;

background: #FFFFFF;
border: 0.5px solid rgba(88, 92, 94, 0.1);
box-sizing: border-box;
box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.15);
border-radius: 10px;
`;

export const Form = styled.form`
  width: 25rem;
  background: #fff;
  padding: 1.5rem 2rem;

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 15rem;
    margin: 0.625rem 0 2.5rem;
    align-items: center;

  }

  p {
    color: #ff3333;
    margin-bottom: 0.9rem;
    border: 2px solid #ff3333;
    border-radius: 0.25rem;
    padding: 0.625rem;
    width: 100%;
    text-align: center;
  }

  input {
    height: 3rem;
    margin-bottom: 1.25rem;
    padding: 0 1.25rem;
    border-radius: 0.25rem;
    color: var(--text-dark);
    font-size: 1.15rem;
    width: 80%;
    border: 2px solid black;

  }

  button {
    font-weight: 600;
    font-size: 1.25rem;
    width: 262px;
    height: 37px;
    border-radius: 0.25rem;
    cursor: pointer;
    background: #3CAF2D;
    border-width: thin;
  }

  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }

  a {
    font-size: 1rem;
    font-weight: normal;
    color: #999;
    text-decoration: none;
    transition: color 0.2s;
    font-family:Montserrat;
    font-size:20px,
    font-style:normal;
    font-variant: small-caps;
    // bottom: 24px;
    position: relative
  }
`;
// fontFamily:"Montserrat", fontSize:20, fontStyle: "normal", fontWeight: "normal", fontVariant: "small-caps", bottom:24, position:"relative"
