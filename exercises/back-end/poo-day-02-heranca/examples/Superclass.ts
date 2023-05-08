export class SuperClass {

    isSuper: boolean;

    constructor() {
        this.isSuper = true
    };

    sayHello() {
        console.log('Ola, mundo')
    }
}

class Subclass extends SuperClass {

}

// função myFunc fora do escopo da subClasse que recebe um objeto da Superclass:
const myFunc = (object: Subclass) => {
    object.sayHello();
};

// criar um objeto da superClass e um da subclass
const superC = new SuperClass();
const subC = new Subclass();

myFunc(superC);
myFunc(subC);