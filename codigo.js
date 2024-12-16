let contador = 0;
let matriz = [];
let matrizData = [];
const sistema = {
    cursos: [],
    salas: [],
    agendamentos: []
};

// Adiciona um curso
document.getElementById('formCurso').addEventListener('submit', function (e) {
    e.preventDefault();
    const nomeCurso = document.getElementById('nomeCurso').value.trim();
    if (!nomeCurso) {
        alert("O nome do curso não pode estar vazio.");
        return;
    }
    const curso = { id: sistema.cursos.length + 1, nome: nomeCurso };
    sistema.cursos.push(curso);
    atualizarOpcoesCursos();
    this.reset();
});

// Adiciona uma sala
document.getElementById('formSala').addEventListener('submit', function (e) {
    e.preventDefault();
    const nomeSala = document.getElementById('nomeSala').value.trim();
    const capacidade = parseInt(document.getElementById('capacidadeSala').value, 10);
    if (!nomeSala) {
     alert("Preencha o nome da sala");
        return;
    }
    const sala = { id: sistema.salas.length + 1, nome: nomeSala, capacidade };
    sistema.salas.push(sala);
    atualizarOpcoesSalas();
    this.reset();
});

// Agenda um curso
document.getElementById('formAgendamento').addEventListener('submit', function (e) {
    e.preventDefault();
    const cursoId = parseInt(document.getElementById('cursoId').value, 10);
    const salaId = parseInt(document.getElementById('salaId').value, 10);
    const data = document.getElementById('dataAgendamento').value;
    const hora = document.getElementById('horaAgendamento').value;

    const curso = sistema.cursos.find(c => c.id === cursoId);
    const sala = sistema.salas.find(s => s.id === salaId);

    if (!curso || !sala) {
        alert("Curso ou sala inválidos.");
        return;
    }

    const conflito = sistema.agendamentos.find(
        a => a.salaId === salaId && a.data === data && a.hora === hora
    );

    if (conflito) {
        alert(`A sala "${sala.nome}" já está ocupada na data ${data} às ${hora}.`);
        return;
    }

    sistema.agendamentos.push({ cursoId, salaId, data, hora });
    atualizarListaAgendamentos();
    this.reset();
});

// Atualiza os campos de seleção de cursos
function atualizarOpcoesCursos() {
    const cursoSelect = document.getElementById('cursoId');
    cursoSelect.innerHTML = '';
    sistema.cursos.forEach(curso => {
        const option = document.createElement('option');
        option.value = curso.id;
        option.textContent = curso.nome;
        cursoSelect.appendChild(option);
    });
}

// Atualiza os campos de seleção de salas
function atualizarOpcoesSalas() {
    const salaSelect = document.getElementById('salaId');
    salaSelect.innerHTML = '';
    sistema.salas.forEach(sala => {
        const option = document.createElement('option');
        option.value = sala.id;
        option.textContent = sala.nome;
        salaSelect.appendChild(option);
    });
}

// Atualiza a lista de agendamentos
function atualizarListaAgendamentos() {
    const listaAgendamentos = document.getElementById('listaAgendamentos');
    listaAgendamentos.innerHTML = '';

    sistema.agendamentos.forEach((agendamento, index) => {
        const curso = sistema.cursos.find(c => c.id === agendamento.cursoId);
        const sala = sistema.salas.find(s => s.id === agendamento.salaId);

        const item = document.createElement('li');
        item.textContent = `Curso: ${curso.nome}, Sala: ${sala.nome}, Data: ${agendamento.data}, Horário: ${agendamento.hora}`;
        listaAgendamentos.appendChild(item);

        // Armazenamento no localStorage
        matriz[index] = item.textContent;
        matrizData[index] = agendamento.data;
    });

    salvarUltimosAgendamentos();
}

// Salva as 5 últimas entradas no localStorage
function salvarUltimosAgendamentos() {
    const ultimosItens = matriz.slice(-5);
    const ultimasDatas = matrizData.slice(-5);

    ultimosItens.forEach((item, i) => {
        localStorage.setItem(`item${i + 1}`, item || "");
    });

    ultimasDatas.forEach((data, i) => {
        localStorage.setItem(`data${i + 1}`, data || "");
    });
}

// Função para mostrar o botão "Ver Agenda"
function MostraBotao() {
    document.getElementById("BotaoAgenda").style.visibility = "visible";
}