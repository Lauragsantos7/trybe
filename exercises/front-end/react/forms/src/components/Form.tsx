
import { useNavigate } from 'react-router-dom';

function Form() {

  
  const navigate = useNavigate();
  

  function redirectToHome() {
    navigate("/home")

  }

  return (
    <>
      <form>
        <label>
          Nome
          <input type="text" name="name"></input>
        </label>
        <br />

        <label>
          Email
          <input type="email" name="email"></input>
        </label>
        <br />

        <label>
          Cidade
          <select name="city">
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
          </select>
        </label>

        <br />
        <label>Bio
            {" "}
            <textarea name="bio">

            </textarea>
        </label>
        <br />
        <br />
        <label>
          <input type="ckeckbox" name="termo"></input>
        </label>
        <br />
        <br />
        <button type="button" onClick={redirectToHome}>Enviar</button>
      </form>
    </>
  );
}

export default Form;
