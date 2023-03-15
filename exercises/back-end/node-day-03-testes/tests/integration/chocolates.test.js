// configuração para executar o npm run test: na pasta scripts: "test: "mocha/**/*.test.js --exit" */

const chai = require("chai");

//adicionar plugin http ao chai, para consumir o server em express  sem que haja necessidade de subirmos a API manualemte:
const chaiHttp = require("chai-http");

// criando um stub para a função readFile():
const sinon = require('sinon');
const fs = require('fs');

chai.use(chaiHttp);



//importar a rota:
const app = require('../../src/app');

const { expect } = chai;

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  escribe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });
});

// antes do cenário de teste, o comprotamento do método fs foi alterado pelo stub() e depoois da execução do teste, a funçao restore() que o sinon atribui aos stub retorna o comportamento padrão da função.

// instalar o chaiHTTP para simular uma request da API sem iniciá-la manualmente: npm install chai-http@4.3.0 --save-dev --save-exact

// o chaiHTTP vai criar seu própior lintes(), escolher uma porta automaticamente, fazer requisição ao endpoint e retornar o resultado.

// to.deep => comparação em profundidade. Para garantir que todas as infos dentro do objeto retornado são as mesmas do objeto esperado.

// o stub interceptará,durante fo teste, todas as chamadas à função readFile(), por isso é imprescindível que os valroes passados em resolves sejam do mesm tipo que q função original
