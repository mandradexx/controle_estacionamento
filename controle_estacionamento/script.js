// Dados fictícios
const vagasCadastradas = [
    { vaga: 1, placa: "ABC-1234", proprietario: "João Silva", apartamento: "101", bloco: "A", modelo: "Sedan", cor: "Preto" },
    { vaga: 2, placa: "XYZ-5678", proprietario: "Maria Santos", apartamento: "102", bloco: "A", modelo: "SUV", cor: "Branco" },
    { vaga: 3, placa: "DEF-9012", proprietario: "Carlos Lima", apartamento: "201", bloco: "B", modelo: "Hatch", cor: "Cinza" },
    { vaga: 4, placa: "GHI-3456", proprietario: "Ana Paula", apartamento: "202", bloco: "B", modelo: "Crossover", cor: "Azul" },
    { vaga: 5, placa: "JKL-7890", proprietario: "Pedro Costa", apartamento: "301", bloco: "C", modelo: "Picape", cor: "Vermelho" }
];

const vagasDisponiveis = [
    { vaga: 6 },
    { vaga: 7 },
    { vaga: 8 },
    { vaga: 9 },
    { vaga: 10 }
];

// Função para salvar nova vaga
document.getElementById("formCadastro")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const novaVaga = {
        vaga: document.getElementById("vaga").value,
        placa: document.getElementById("placa").value,
        proprietario: document.getElementById("proprietario").value,
        apartamento: document.getElementById("apartamento").value,
        bloco: document.getElementById("bloco").value,
        modelo: document.getElementById("modelo").value,
        cor: document.getElementById("cor").value,
    };

    vagasCadastradas.push(novaVaga);

    alert("Cadastro realizado com sucesso!");
    document.getElementById("formCadastro").reset();
});

// Função para listar vagas cadastradas
function listarVagasCadastradas() {
    const ul = document.getElementById("listaVagasCadastradas");
    if (!ul) return;

    ul.innerHTML = ""; // Limpa a lista

    vagasCadastradas.forEach(vaga => {
        const li = document.createElement("li");
        li.textContent = `Vaga ${vaga.vaga} - Placa: ${vaga.placa}, Proprietário: ${vaga.proprietario}, Apartamento: ${vaga.apartamento}, Bloco: ${vaga.bloco}, Modelo: ${vaga.modelo}, Cor: ${vaga.cor}`;
        ul.appendChild(li);
    });
}

// Função para listar vagas disponíveis
function listarVagasDisponiveis() {
    const ul = document.getElementById("listaVagasDisponiveis");
    if (!ul) return;

    ul.innerHTML = ""; // Limpa a lista

    vagasDisponiveis.forEach(vaga => {
        const li = document.createElement("li");
        li.textContent = `Vaga ${vaga.vaga} está disponível.`;
        ul.appendChild(li);
    });
}

// Detectar qual página está aberta e chamar a função correspondente
if (document.getElementById("listaVagasCadastradas")) {
    listarVagasCadastradas();
}

if (document.getElementById("listaVagasDisponiveis")) {
    listarVagasDisponiveis();
}