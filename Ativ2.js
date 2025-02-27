class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

class Cliente {
    constructor(nome, telefone, email, endereco) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }

    get Cinfo() {
        return `Informações do Cliente: \n` +
            `${this.nome} \n` +
            `----------------------------------------------------- \n` +
            `Telefone: \n` +
            `DDD: ${this.telefone.ddd} \n` +
            `Número: ${this.telefone.numero} \n` +
            `Email: ${this.email} \n` +
            `----------------------------------------------------- \n` +
            `Endereço: \n` +
            `Rua: ${this.endereco.rua} \n` +
            `Número: ${this.endereco.numero} \n` +
            `Cidade: ${this.endereco.cidade} \n` +
            `Estado: ${this.endereco.estado} \n`;
    }

    set novasinfos(infos) {
        const { nome, telefone, email, endereco } = infos;
        if (nome) this.nome = nome;
        if (telefone) this.telefone = telefone;
        if (email) this.email = email;
        if (endereco) this.endereco = endereco;
    }
}



let telefone = new Telefone("12", "89139189");
let endereco = new Endereco("SP", "São José dos Campos", "Av. Andromeda", "123");
let cliente = new Cliente("Gustavo", telefone, "gustavo@js.com", endereco);

let telefone1 = new Telefone("75", "21932198");
let endereco1 = new Endereco("BA", "Salvador", "Rua Chile", "45");
let cliente1 = new Cliente("Tom", telefone1, "meunomeehtom@gmail.com", endereco1);

let telefone2 = new Telefone("22", "229281398");
let endereco2 = new Endereco("RJ", "Niterói", "Rua Presidente Backer", "78");
let cliente2 = new Cliente("Alex", telefone2, "alexdeniteroi@gmail.com", endereco2);

console.log(cliente2.Cinfo);

let clientes = [cliente, cliente1, cliente2];

function lista(x) {
    x.sort(function (a, b) {
        if (a.nome > b.nome) {
            return 1;
        } else if (a.nome < b.nome) {
            return -1;
        }
        return 0;
    });

    return x;
}

console.log(lista(clientes));