class prato {
     nome: string;
     datadevalidade: string;
     nacionalidade: string;

     constructor(nome: string, datadevalidade: string, nacionalidade: string) {
          this.nome = nome;
          this.datadevalidade = datadevalidade;
          this.nacionalidade = nacionalidade;
     }
}

class funcionario {
     nome: string;
     sexo: string;
     datadecontratacao: string;
     CPF: string;
     RG: string;

     constructor(nome: string, sexo: string, datadecontratacao: string, CPF: string, RG: string) {
          this.nome = nome;
          this.sexo = sexo;
          this.datadecontratacao = datadecontratacao;
          this.CPF = CPF;
          this.RG = RG;
     }

     calcularsalario(horastrabalhadas: number): number {
          return 0;
     }
}

class funcionariocontratado extends funcionario {
     salariofixo: number;

     constructor(nome: string, sexo: string, datadecontratacao: string, CPF: string, RG: string, salariofixo: number) {
          super(nome, sexo, datadecontratacao, CPF, RG);
          this.salariofixo = salariofixo;
     }

     calcularsalario(horastrabalhadas: number): number {
          return this.salariofixo;
     }
}

class freelancer extends funcionario {
     datalimitedocontrato: string;
     salariohora: number;
     statusdocontrato: string;
     tempoparafinalizar: number;

     constructor(nome: string, sexo: string, datadecontratacao: string, CPF: string, RG: string, datalimitedocontrato: string, salariohora: number, statusdocontrato: string, tempoparafinalizar: number) {
          super(nome, sexo, datadecontratacao, CPF, RG);
          this.datalimitedocontrato = datalimitedocontrato;
          this.salariohora = salariohora;
          this.statusdocontrato = statusdocontrato;
          this.tempoparafinalizar = tempoparafinalizar;
     }

     calcularsalario(horastrabalhadas: number): number {
          return horastrabalhadas * this.salariohora;
     }
}

class entrega {
     dataehoradesaida: string;
     numerodopedido: number;
     endereco: string;

     constructor(dataehoradesaida: string, numerodopedido: number, endereco: string) {
          this.dataehoradesaida = dataehoradesaida;
          this.numerodopedido = numerodopedido;
          this.endereco = endereco;
     }
}

class pratorepository {
     pratos: prato[] = [];

     adicionar(prato: prato): void {
          this.pratos.push(prato);
     }

     listar(): prato[] {
          return this.pratos;
     }

     relatorio(): void {
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
     funcionarios: funcionario[] = [];

     adicionar(funcionario: funcionario): void {
          this.funcionarios.push(funcionario);
     }

     listar(): funcionario[] {
          return this.funcionarios;
     }

     relatorio(): void {
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
               } else if (funcionario instanceof freelancer) {
                    console.log("Tipo: Freelancer");
                    console.log("Salario por hora: R$ " + funcionario.salariohora);
                    console.log("Data limite do contrato: " + funcionario.datalimitedocontrato);
                    console.log("Status do contrato: " + funcionario.statusdocontrato);
                    console.log("Tempo para finalizar: " + funcionario.tempoparafinalizar + " dias");
               }

               console.log("-------------------------");
          });
     }

     relatorioativos(): void {
          console.log("FUNCIONARIOS TRABALHANDO");

          this.funcionarios.forEach(funcionario => {
               if (funcionario instanceof funcionariocontratado) {
                    console.log(funcionario.nome);
               } else if (funcionario instanceof freelancer) {
                    if (funcionario.statusdocontrato === "Ativo") {
                         console.log(funcionario.nome);
                    }
               }
          });
     }

     relatoriosalarios(horastrabalhadas: number): void {
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
     entregas: entrega[] = [];

     adicionar(entrega: entrega): void {
          this.entregas.push(entrega);
     }

     listar(): entrega[] {
          return this.entregas;
     }

     relatorio(): void {
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

const funcionario1 = new funcionariocontratado(
     "Carlos",
     "Masculino",
     "2025-01-10",
     "12345678900",
     "1234567",
     3000
);

const funcionario2 = new freelancer(
     "Ana",
     "Feminino",
     "2026-09-01",
     "98765432100",
     "7654321",
     "2026-12-31",
     25,
     "Ativo",
     72
);

funcionarios.adicionar(funcionario1);
funcionarios.adicionar(funcionario2);

const entrega1 = new entrega(
     "2026-10-20 12:30",
     101,
     "Rua das Flores, 100"
);

const entrega2 = new entrega(
     "2026-10-20 13:00",
     102,
     "Avenida Brasil, 250"
);

entregas.adicionar(entrega1);
entregas.adicionar(entrega2);

pratos.relatorio();

funcionarios.relatorio();

funcionarios.relatorioativos();

funcionarios.relatoriosalarios(8);

entregas.relatorio();