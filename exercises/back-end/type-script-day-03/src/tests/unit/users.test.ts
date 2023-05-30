import chai, { expect } from "chai";
import Sinon from "sinon";
import userModel from "../../models/user.model";
import userService from "../../services/user.service";
import chaiAsPromised from "chai-as-promised";
import jwt from "../../auth/token.jwt";

    // arrange
    // act
    // assert
    chai.use(chaiAsPromised);

describe('User Service', () =>{
    afterEach(() => {
        Sinon.restore();
    })
    describe('findAll', () => {
        describe('dado um DB vazio', () => {
            it('retorna um array vazio', async () => {
                // faz o mock da função getAllUsers com o sinon
                Sinon.stub(userModel, 'getAllUsers').resolves([]);
               const users = await userService.getAllUsers();
               expect(users).to.be.deep.equal([]);

            })

        })
        describe('Dado um banco populado', () => {
            it('retorna um array populado', async () => {
                Sinon.stub(userModel, 'getAllUsers').resolves([{
                    username: 'laura@mail.com', password: '123456'
                }])
                
                const users = await userService.getAllUsers();

                expect(users).to.be.deep.equal([{ username: 'laura@mail.com', password: '123456'}]);

            });
        });
       
    })

    describe('login', () => {
       describe('dado um email inválido', () => {
        it('deve lançar um erro UNAUTHORIZED', async () => {

            Sinon.stub(userModel, 'findUserByEmail').resolves(undefined);

           await expect(userService.login('invalidmail@mail.com', '123654')).to.be.rejectedWith('UNAUTHORIZED');
        })
       })
       describe('dado uma senha inválida', () => {
        it('deve lançar um erro UNAUTHORIZED', async () => {

            Sinon.stub(userModel, 'findUserByEmail').resolves({ username: 'laura', password: '12345' });

           await expect(userService.login('joao@mail', '123456')).to.be.rejectedWith('UNAUTHORIZED');
        })
       })
       describe('dado email e senha válidos', () => {
        it('deve retornar um token JWT', async () => {

            Sinon.stub(userModel, 'findUserByEmail').resolves({ username: 'joao@mail.com', password: '123456' });

            Sinon.stub(jwt, 'sign').returns('token_jwt');

          const token =  await userService.login('joao@mail', '123456');
          expect(token).to.be.equal('JWT');
        })
       })
    })
});