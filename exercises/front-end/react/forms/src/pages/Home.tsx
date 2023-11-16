import Button from "react-bootstrap/Button";

function Home() {
  const userNameLocalStorage = localStorage.getItem("userNameLocalStorage");

  return (
    <>
      <div className="form-result">
        <p>
          <span>Bem vindo(a), </span>
          {userNameLocalStorage}
        </p>
      </div>
      <Button variant="primary" className="m-5" size="lg">Saldo</Button>{' '}
      <Button variant="success" className="m-5"size="lg">Receitas</Button>{' '}
      <Button variant="danger" className="m-5" size="lg">Despesas</Button>{" "}
    </>
  );
}

export default Home;
