import { useState } from 'react'


function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [showImg, setShowImg] = useState(true);
  const [index, setIndex] = useState(0);
  const [toolList, setToolList] = useState(toolKit);
  const [inputValue, setInputValue] = useState('');
  // const [inputValue, setInputValue] = useState<string | string[]>(''); TS Generics - inputValue pode receber uma string ou uma lista de strings - utilizar apenas qdo for necessário. O TS já faz essa tipagem
 

  function handleClick() {
    setShowImg(!showImg);
  }

  function handleNextClick() {
    if (index + 1 < toolList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Volta para o primeiro elemento
    }
  }

  function handlePreviousClick() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolList.length - 1); // Vai para o último elemento
    }
  }
  function handleAddClick() {
    if (inputValue) {
      setToolList([...toolList, inputValue]);
    }
    
  }
  return (
    <div>
      {showImg && <img src="/vite.svg" />}
      <button onClick={handleClick}>
          {showImg ? 'Esconder imagem' : 'Mostrar imagem'}
        </button>

        <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
        <h2>{ toolList[index] }</h2>
      <button onClick={handlePreviousClick}>Anterior</button>
        <button onClick={handleNextClick}>Próximo</button>

        <section>
        <h3>Adicione novas ferramentas:</h3>
        <input onChange={({ target }) => setInputValue(target.value)} />
        <button onClick={ handleAddClick }>Adicionar</button>
      </section>
    </div>
  )
}

export default App
