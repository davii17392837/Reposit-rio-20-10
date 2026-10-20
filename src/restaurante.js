"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class prato {
    nome;
    datadevalidade;
    nacionalidade;
    constructor(nome, datadevalidade, nacionalidade) {
        this.nome = nome;
        this.datadevalidade = datadevalidade;
        this.nacionalidade = nacionalidade;
    }
}
class funcionario {
    nome;
    sexo;
    datadecontratacao;
    CPF;
    RG;
    constructor(nome, sexo, datadecontratacao, CPF, RG) {
        this.nome = nome;
        this.sexo = sexo;
        this.datadecontratacao = datadecontratacao;
        this.CPF = CPF;
        this.RG = RG;
    }
    calcularsalario(horastrabalhadas) {
        return 0;
    }
}
class funcionariocontratado extends funcionario {
    salariofixo;
    constructor(nome, sexo, datadecontratacao, CPF, RG, salariofixo) {
        super(nome, sexo, datadecontratacao, CPF, RG);
        this.salariofixo = salariofixo;
    }
    calcularsalario(horastrabalhadas) {
        return this.salariofixo;
    }
}
class freelancer extends funcionario {
    datalimitedocontrato;
    salariohora;
    statusdocontrato;
    tempoparafinalizar;
    constructor(nome, sexo, datadecontratacao, CPF, RG, datalimitedocontrato, salariohora, statusdocontrato, tempoparafinalizar) {
        super(nome, sexo, datadecontratacao, CPF, RG);
        this.datalimitedocontrato = datalimitedocontrato;
        this.salariohora = salariohora;
        this.statusdocontrato = statusdocontrato;
        this.tempoparafinalizar = tempoparafinalizar;
    }
    calcularsalario(horastrabalhadas) {
        return horastrabalhadas * this.salariohora;
    }
}
class entrega {
    dataehoradesaida;
    numerodopedido;
    endereco;
    constructor(dataehoradesaida, numerodopedido, endereco) {
        this.dataehoradesaida = dataehoradesaida;
        this.numerodopedido = numerodopedido;
        this.endereco = endereco;
    }
}
class pratorepository {
    pratos = [];
    adicionar(prato) {
        this.pratos.push(prato);
    }
    listar() {
        return this.pratos;
    }
    relatorio() {
        console.log("RELATORIO DE PRATOS");
        this.pratos.forEach(prato => {
            console.log("Nome: " + prato.nome);
            console.log("Data de validade: " + prato.datadevalidade);
            console.log("Nacionalidade: " + prato.nacionalidade);
            console.log("-------------------------");
        });
    }
}
class funcionariorepository {
    funcionarios = [];
    adicionar(funcionario) {
        this.funcionarios.push(funcionario);
    }
    listar() {
        return this.funcionarios;
    }
    relatorio() {
        console.log("RELATORIO DE FUNCIONARIOS");
        this.funcionarios.forEach(funcionario => {
            console.log("Nome: " + funcionario.nome);
            console.log("Sexo: " + funcionario.sexo);
            console.log("Data de contratacao: " + funcionario.datadecontratacao);
            console.log("CPF: " + funcionario.CPF);
            console.log("RG: " + funcionario.RG);
            if (funcionario instanceof funcionariocontratado) {
                console.log("Tipo: Contratado");
                console.log("Salario fixo: R$ " + funcionario.salariofixo);
            }
            else if (funcionario instanceof freelancer) {
                console.log("Tipo: Freelancer");
                console.log("Salario por hora: R$ " + funcionario.salariohora);
                console.log("Data limite do contrato: " + funcionario.datalimitedocontrato);
                console.log("Status do contrato: " + funcionario.statusdocontrato);
                console.log("Tempo para finalizar: " + funcionario.tempoparafinalizar + " dias");
            }
            console.log("-------------------------");
        });
    }
    relatorioativos() {
        console.log("FUNCIONARIOS TRABALHANDO");
        this.funcionarios.forEach(funcionario => {
            if (funcionario instanceof funcionariocontratado) {
                console.log(funcionario.nome);
            }
            else if (funcionario instanceof freelancer) {
                if (funcionario.statusdocontrato === "Ativo") {
                    console.log(funcionario.nome);
                }
            }
        });
    }
    relatoriosalarios(horastrabalhadas) {
        console.log("RELATORIO DE SALARIOS");
        this.funcionarios.forEach(funcionario => {
            console.log("Nome: " + funcionario.nome);
            console.log("Horas trabalhadas: " + horastrabalhadas);
            console.log("Salario: R$ " + funcionario.calcularsalario(horastrabalhadas));
            console.log("-------------------------");
        });
    }
}
class entregarepository {
    entregas = [];
    adicionar(entrega) {
        this.entregas.push(entrega);
    }
    listar() {
        return this.entregas;
    }
    relatorio() {
        console.log("RELATORIO DE ENTREGAS");
        this.entregas.forEach(entrega => {
            console.log("Data e hora de saida: " + entrega.dataehoradesaida);
            console.log("Numero do pedido: " + entrega.numerodopedido);
            console.log("Endereco: " + entrega.endereco);
            console.log("-------------------------");
        });
    }
}
const pratos = new pratorepository();
const funcionarios = new funcionariorepository();
const entregas = new entregarepository();
const prato1 = new prato("Pizza", "2026-12-20", "Italiana");
const prato2 = new prato("Sushi", "2026-10-25", "Japonesa");
pratos.adicionar(prato1);
pratos.adicionar(prato2);
const funcionario1 = new funcionariocontratado("Carlos", "Masculino", "2025-01-10", "12345678900", "1234567", 3000);
const funcionario2 = new freelancer("Ana", "Feminino", "2026-09-01", "98765432100", "7654321", "2026-12-31", 25, "Ativo", 72);
funcionarios.adicionar(funcionario1);
funcionarios.adicionar(funcionario2);
const entrega1 = new entrega("2026-10-20 12:30", 101, "Rua das Flores, 100");
const entrega2 = new entrega("2026-10-20 13:00", 102, "Avenida Brasil, 250");
entregas.adicionar(entrega1);
entregas.adicionar(entrega2);
pratos.relatorio();
funcionarios.relatorio();
funcionarios.relatorioativos();
funcionarios.relatoriosalarios(8);
entregas.relatorio();
//# sourceMappingURL=restaurante.js.map