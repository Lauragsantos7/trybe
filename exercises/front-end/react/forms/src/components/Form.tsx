
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Form() {

  const navigate = useNavigate();
  
  
  const {userData, handleChange} = useContext(UserContext);
  

  function redirectToHome() {
    navigate("/home")

  }
  

  return (
    <>
      <form>
        <label>
          Nome
          <input type="text" name="name" value={userData.name} onChange={ handleChange}></input>
        </label>
        <br />

        <label>
          Email
          <input type="email" name="email" value={userData.email} onChange={ handleChange}></input>
        </label>
        <br />

        <label>
          Cidade
          <select name="city" value={userData.city} onChange={handleChange }>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
          </select>
        </label>

        <br />
        <label>Bio
            {" "}
            <textarea name="bio" value={ userData.bio } onChange={ handleChange}>

            </textarea>
        </label>
        <br />
        <br />
        <label>
          <input type="checkbox" name="termo"></input>
          <span>Li e concordo com os termos</span>
        </label>
        <br />
        <br />
        <button type="button" onClick={redirectToHome}>Enviar</button>
      </form>
    </>
  );
}

export default Form;
