import Forms from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");

  function redirectToHome() {
    const userNameLocalStorage = userName;
    const userMailLocalStorage = userMail;

    localStorage.setItem(
      "userNameLocalStorage",
      JSON.stringify(userNameLocalStorage)
    );

    localStorage.setItem(
      "userMailLocalStorage",
      JSON.stringify(userMailLocalStorage)
    );

    setUserName("");
    setUserMail("");

    navigate("/home");
  }

  return (
    <>
      <Card className="mx-auto mt-5" style={{ width: "28rem" }}>
        <Card.Header>Faça seu Cadastro</Card.Header>

        <Card.Body>
          <Forms className="">
            <Forms.Group className="mb-3" controlId="formName">
              <Forms.Label>Nome</Forms.Label>
              <Forms.Control
                placeholder="Digite seu nome"
                type="text"
                name="name"
                value={userName}
                onChange={({ target }) => setUserName(target.value)}
              ></Forms.Control>
            </Forms.Group>

            <Forms.Group className="mb-3" controlId="formEmail">
              <Forms.Label>Email</Forms.Label>
              <Forms.Control
                placeholder="Digite seu email"
                type="email"
                name="email"
                value={userMail}
                onChange={({ target }) => setUserMail(target.value)}
              ></Forms.Control>
            </Forms.Group>

            <Forms.Group className="mb-3 " controlId="formPass">
              <Forms.Label>Senha </Forms.Label>
              <Forms.Control name="password" type="password" placeholder="Digite sua senha"></Forms.Control>
            </Forms.Group>

            <Forms.Group className="mb-3 " controlId="formPass">
              <Forms.Label>Confirme a senha </Forms.Label>
              <Forms.Control name="password" type="password" placeholder="Digite novamente sua senha"></Forms.Control>
            </Forms.Group>

            <Forms.Group className="mb-3" controlId="formTerm">
              <Forms.Label>
                <Forms.Check
                  type="checkbox"
                  name="termo"
                  className="mb-2"
                  label="Li e concordo com os termos"
                ></Forms.Check>
              </Forms.Label>
            </Forms.Group>

            <Button type="button" onClick={redirectToHome} variant="success">
              Enviar dados
            </Button>
          </Forms>
        </Card.Body>
      </Card>
    </>
  );
}

export default Form;
