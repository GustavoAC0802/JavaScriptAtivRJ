class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get cpf() {
        return this.#cpf
    }

    getCpfUpperCase() {
        return this.#cpf.toUpperCase()
    }

    getCpfLowerCase() {
        return this.#cpf.toLowerCase()
    }

    AdicionarTelefone(fone) {
        return this.telefones.add(fone)
    }

    RemoverTelefone(fone) {
        return this.telefones.delete(fone)
    }

    clientedetalhes() {
        const telefonesList = [...this.telefones].map(telefone => `DDD: ${telefone.ddd} Número: ${telefone.numero}`).join('\n');
        return `Nome: ${this.nome}\nCPF: ${this.cpf}\nEndereço: ${this.endereco}\nTelefones:\n${telefonesList}`;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    toString() {
        return `(${this.ddd}) ${this.numero}`
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    toString() {
        return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado}`
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get cnpj() {
        return this.#cnpj
    }

    getCnpjUpperCase() {
        return this.#cnpj.toUpperCase()
    }

    getCnpjLowerCase() {
        return this.#cnpj.toLowerCase()
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente)
    }

    removerCliente(cliente) {
        this.clientes.delete(cliente)
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }

    removerTelefone(telefone) {
        if (this.telefones.size === 0) {
            console.log('Sem Telefones na Lista');
        } else {
            for (let teleLista of this.telefones) {
                if (teleLista.ddd === telefone.ddd && teleLista.numero === telefone.numero) {
                    console.log(`(${telefone.ddd})-${telefone.numero} foi deletado`);
                    this.telefones.delete(teleLista);
                    break;
                } else {
                    console.log(`Não há telefone registrado com esse DDD: ${telefone.ddd} e Número: ${telefone.numero}`);
                    break;
                }
            }
        }
    }

    descricao() {
        let mensagem = '';
        for (let cliente of this.clientes) {
            mensagem += cliente.clientedetalhes() + '\n\n'; 
        }
        return `Razão Social: ${this.razaoSocial} \n` +
            `Nome Fantasia: ${this.nomeFantasia} \n` + 
            `CNPJ: ${this.cnpj} \n` +
            `Endereço: ${this.endereco} \n` +
            '------------------------------------------ \n' +
            `${mensagem}`;
    }
}

const EnderecoEmpresa = new Endereco('SP', 'Sorocaba', 'Avenida Dom Aguirre', '1935');
const empresa = new Empresa('Empresa do Jorginho', 'JORGE LTDA', '2981982989', EnderecoEmpresa);
empresa.adicionarTelefone(new Telefone('11', '999999999'));
empresa.adicionarTelefone(new Telefone('11', '932891892'));

const cliente1 = new Cliente('Alex de Niterói', '1234567890', new Endereco('RJ', 'Niterói', 'Rua da Conceição', '1298'));
const cliente2 = new Cliente('Tom de Moletom', '8317872728', new Endereco('SP', 'Sorocaba', 'Rua dos Moletons', '9812'));
const cliente3 = new Cliente('José Confuso', '2939891829', new Endereco('BA', 'Salvador', 'Rua da Praia', '9382'));
const cliente4 = new Cliente('Martin da Zebra', '1212192981', new Endereco('MG', 'Virginia', 'Rua Lagoinha', '3122'));
const cliente5 = new Cliente('Pit do Samba', '39281921', new Endereco('SP', 'Americana', 'Avenida do Ouro', '9542'));

cliente1.AdicionarTelefone(new Telefone('15', '23898982'));
cliente1.AdicionarTelefone(new Telefone('15', '29384248'));

cliente2.AdicionarTelefone(new Telefone('81', '389219811'));
cliente2.AdicionarTelefone(new Telefone('81', '329839819'));

cliente3.AdicionarTelefone(new Telefone('99', '928392891'));
cliente3.AdicionarTelefone(new Telefone('99', '293829839'));

cliente4.AdicionarTelefone(new Telefone('100', '02930291'));
cliente4.AdicionarTelefone(new Telefone('100', '03208108'));

cliente5.AdicionarTelefone(new Telefone('23', '298293891'));
cliente5.AdicionarTelefone(new Telefone('23', '293829819'));

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);
empresa.adicionarCliente(cliente5);

console.log(empresa.descricao());