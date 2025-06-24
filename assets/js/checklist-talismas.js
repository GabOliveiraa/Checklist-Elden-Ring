    /* Objeto com a lista de Armas */
const talismas = {
    "atributos": [
        { chave: 'atributo-1', nome: 'Medalhão de Âmbar Carmesim', categoria: 'Atributos' },
        { chave: 'atributo-2', nome: 'Medalhão de Âmbar Carmesim +1', categoria: 'Atributos' },
        { chave: 'atributo-3', nome: 'Medalhão de Âmbar Carmesim +2', categoria: 'Atributos' },
        { chave: 'atributo-4', nome: 'Talismã de Semente Carmesim', categoria: 'Atributos' },
        { chave: 'atributo-5', nome: 'Talismã de Orvalho Abençoado', categoria: 'Atributos' },
        { chave: 'atributo-6', nome: 'Medalhão de Âmbar Cerúleo', categoria: 'Atributos' },
        { chave: 'atributo-7', nome: 'Medalhão de Âmbar Cerúleo +1', categoria: 'Atributos' },
        { chave: 'atributo-8', nome: 'Medalhão de Âmbar Cerúleo +2', categoria: 'Atributos' },
        { chave: 'atributo-9', nome: 'Talismã de Semente Cerúlea', categoria: 'Atributos' },
        { chave: 'atributo-10', nome: 'Medalhão de Âmbar Viridiano', categoria: 'Atributos' },
        { chave: 'atributo-11', nome: 'Medalhão de Âmbar Viridiano +1', categoria: 'Atributos' },
        { chave: 'atributo-12', nome: 'Medalhão de Âmbar Viridiano +2', categoria: 'Atributos' },
        { chave: 'atributo-13', nome: 'Talismã de Tartaruga Verde', categoria: 'Atributos' },
        { chave: 'atributo-14', nome: 'Amuleto de Arsenal', categoria: 'Atributos' },
        { chave: 'atributo-15', nome: 'Amuleto de Arsenal +1', categoria: 'Atributos' },
        { chave: 'atributo-16', nome: 'Arsenal do Grande Jarro', categoria: 'Atributos' },
        { chave: 'atributo-17', nome: 'Benção da Térvore', categoria: 'Atributos' },
        { chave: 'atributo-18', nome: 'Benção da Térvore +1', categoria: 'Atributos' },
        { chave: 'atributo-19', nome: 'Benção da Tervore +2', categoria: 'Atributos' },
        { chave: 'atributo-20', nome: 'Selo da Cicatriz de Radagon', categoria: 'Atributos' },
        { chave: 'atributo-21', nome: 'Selo da Ferida de Radagon', categoria: 'Atributos' },
        { chave: 'atributo-22', nome: 'Selo da Cicatriz de Marika', categoria: 'Atributos' },
        { chave: 'atributo-23', nome: 'Selo da Ferida de Marika', categoria: 'Atributos' },
        { chave: 'atributo-24', nome: 'Herança do Flagelo Estelar', categoria: 'Atributos' },
        { chave: 'atributo-25', nome: 'Herança de Usuário de Prótese', categoria: 'Atributos' },
        { chave: 'atributo-26', nome: 'Herança de Observador de Estrelas', categoria: 'Atributos' },
        { chave: 'atributo-27', nome: 'Herança de Dois Dedos', categoria: 'Atributos' }
    ],
    "defesa": [
        { chave: 'defesa-1', nome: 'Talismã de Escudo com Brasão de Dragão', categoria: 'Defesa' },
        { chave: 'defesa-2', nome: 'Talismã de Escudo com Brasão de Dragão +1', categoria: 'Defesa' },
        { chave: 'defesa-3', nome: 'Talismã de Escudo com Brasão de Dragão +2', categoria: 'Defesa' },
        { chave: 'defesa-4', nome: 'Talismã de Escudo Grande com Brasão de Dragão', categoria: 'Defesa' },
        { chave: 'defesa-5', nome: 'Talismã de Draco de Feitiço', categoria: 'Defesa' },
        { chave: 'defesa-6', nome: 'Talismã de Draco de Feitiço +1', categoria: 'Defesa' },
        { chave: 'defesa-7', nome: 'Talismã de Draco de Feitiço +2', categoria: 'Defesa' },
        { chave: 'defesa-8', nome: 'Talismã de Draco de Fogo', categoria: 'Defesa' },
        { chave: 'defesa-9', nome: 'Talismã de Draco de Fogo +1', categoria: 'Defesa' },
        { chave: 'defesa-10', nome: 'Talismã de Draco de Fogo +2', categoria: 'Defesa' },
        { chave: 'defesa-11', nome: 'Talismã de Draco Elétrico', categoria: 'Defesa' },
        { chave: 'defesa-12', nome: 'Talismã de Draco Elétrico +1', categoria: 'Defesa' },
        { chave: 'defesa-13', nome: 'Talismã de Draco Elétrico +2', categoria: 'Defesa' },
        { chave: 'defesa-14', nome: 'Talismã de Draco Sagrado', categoria: 'Defesa' },
        { chave: 'defesa-15', nome: 'Talismã de Draco Sagrado +1', categoria: 'Defesa' },
        { chave: 'defesa-16', nome: 'Talismã de Draco Sagrado +2', categoria: 'Defesa' },
        { chave: 'defesa-17', nome: 'Talismã de Draco Pérola', categoria: 'Defesa' },
        { chave: 'defesa-18', nome: 'Talismã de Draco Pérola +1', categoria: 'Defesa' },
        { chave: 'defesa-19', nome: 'Talismã de Draco Pérola +2', categoria: 'Defesa' },
        { chave: 'defesa-20', nome: 'Amuleto de Chifre Imunizante', categoria: 'Defesa' },
        { chave: 'defesa-21', nome: 'Amuleto de Chifre Imunizante +1', categoria: 'Defesa' },
        { chave: 'defesa-22', nome: 'Amuleto de Chifre Robusto', categoria: 'Defesa' },
        { chave: 'defesa-23', nome: 'Amuleto de Chifre Robusto +1', categoria: 'Defesa' },
        { chave: 'defesa-24', nome: 'Amuleto de Chifre de Clarificação', categoria: 'Defesa' },
        { chave: 'defesa-25', nome: 'Amuleto de Chifre de Clarificação +1', categoria: 'Defesa' }
    ],
    "ataque": [
        { chave: 'ataque-1', nome: 'Colar Manchado', categoria: 'Ataque' },
        { chave: 'ataque-2', nome: 'Colar Manchado +1', categoria: 'Ataque' },
        { chave: 'ataque-3', nome: 'Pústula do Príncipe da Morte', categoria: 'Ataque' },
        { chave: 'ataque-4', nome: 'Cisto do Príncipe da Morte', categoria: 'Ataque' },
        { chave: 'ataque-5', nome: 'Talismã de Adaga', categoria: 'Ataque' },
        { chave: 'ataque-6', nome: 'Talismã de Espada Curva', categoria: 'Ataque' },
        { chave: 'ataque-7', nome: 'Talismã de Lâminas-Gêmeas', categoria: 'Ataque' },
        { chave: 'ataque-8', nome: 'Talismã de Machado', categoria: 'Ataque' },
        { chave: 'ataque-9', nome: 'Talismã de Martelo', categoria: 'Ataque' },
        { chave: 'ataque-10', nome: 'Talismã de Lança', categoria: 'Ataque' },
        { chave: 'ataque-11', nome: 'Talismã de Lança de Cavalaria', categoria: 'Ataque' },
        { chave: 'ataque-12', nome: 'Talismã de Garra', categoria: 'Ataque' },
        { chave: 'ataque-13', nome: 'Talismã de Escudo Grande', categoria: 'Ataque' },
        { chave: 'ataque-14', nome: 'Talismã de Pungir da Flecha', categoria: 'Ataque' },
        { chave: 'ataque-15', nome: 'Talismã de Alcance de Flecha', categoria: 'Ataque' }
    ],
    "magias-encantamentos": [
        { chave: 'magias-encant-1', nome: 'Talismã da Escola da Pedra', categoria: 'Magias e Encantamentos' },
        { chave: 'magias-encant-2', nome: 'Talismã de Massa da Pedra', categoria: 'Magias e Encantamentos' },
        { chave: 'magias-encant-3', nome: 'Talismã de Tela do Fiel', categoria: 'Magias e Encantamentos' },
        { chave: 'magias-encant-4', nome: 'Talismã de Tela do Bando', categoria: 'Magias e Encantamentos' },
        { chave: 'magias-encant-5', nome: 'Lâmina de Pedrilhante Primordial', categoria: 'Magias e Encantamentos' },
        { chave: 'magias-encant-6', nome: 'Lua de Nokstella', categoria: 'Magias e Encantamentos' },
        { chave: 'magias-encant-7', nome: 'Talismã do Velho Lorde', categoria: 'Magias e Encantamentos' },
        { chave: 'magias-encant-8', nome: 'Ícone de Radagon', categoria: 'Magias e Encantamentos' }
    ],
    "habilidades-consumiveis": [
        { chave: 'habilidades-1', nome: 'Medalhão do Rugido', categoria: 'Habilidades e Consumíveis' },
        { chave: 'habilidades-2', nome: 'Jarro Companheiro', categoria: 'Habilidades e Consumíveis' },
        { chave: 'habilidades-3', nome: 'Talismã do Perfumista', categoria: 'Habilidades e Consumíveis' },
        { chave: 'habilidades-4', nome: 'Brasão de Filigrana Cariano', categoria: 'Habilidades e Consumíveis' },
        { chave: 'habilidades-5', nome: 'Fragmento de Jarro Gerreiro', categoria: 'Habilidades e Consumíveis' },
        { chave: 'habilidades-6', nome: 'Fragmento de Alexander', categoria: 'Habilidades e Consumíveis' },
        { chave: 'habilidades-7', nome: 'Ícone de Godfrey', categoria: 'Habilidades e Consumíveis' }
    ],
    "status": [
        { chave: 'status-1', nome: 'Talismã do Touro-Cabra', categoria: 'Status' },
        { chave: 'status-2', nome: 'Talismã de Dançarina Azul', categoria: 'Status' },
        { chave: 'status-3', nome: 'Talismã de Escorpião Mágico', categoria: 'Status' },
        { chave: 'status-4', nome: 'Talismã de Escorpião de Fogo', categoria: 'Status' },
        { chave: 'status-5', nome: 'Talismã de Escorpião Elétrico', categoria: 'Status' },
        { chave: 'status-6', nome: 'Talismã de Escorpião Sagrado', categoria: 'Status' },
        { chave: 'status-7', nome: 'Talismã de Escama do Crisol', categoria: 'Status' },
        { chave: 'status-8', nome: 'Talismã de Pena do Crisol', categoria: 'Status' },
        { chave: 'status-9', nome: 'Talismã de Nó do Crisol', categoria: 'Status' }
    ],
    "condicionais": [
        { chave: 'condicional-1', nome: 'Espada de Ramo com Penas Vermelhas', categoria: 'Condicionais' },
        { chave: 'condicional-2', nome: 'Espada de Ramo com Penas Azuis', categoria: 'Condicionais' },
        { chave: 'condicional-3', nome: 'Talismã de Espada de Ritual', categoria: 'Condicionais' },
        { chave: 'condicional-4', nome: 'Talismã de Escudo de Ritual', categoria: 'Condicionais' },
        { chave: 'condicional-5', nome: 'Adaga de Assasino Carmesim', categoria: 'Condicionais' },
        { chave: 'condicional-6', nome: 'Adaga de Assasino Cerúlea', categoria: 'Condicionais' },
        { chave: 'condicional-7', nome: 'Insígnia de Espada Alada', categoria: 'Condicionais' },
        { chave: 'condicional-8', nome: 'Insígnia de Espada Alada Apodrecida', categoria: 'Condicionais' },
        { chave: 'condicional-9', nome: 'Prótese ee Millicent', categoria: 'Condicionais' },
        { chave: 'condicional-10', nome: 'Bandagem da Pele Divina', categoria: 'Condicionais' },
        { chave: 'condicional-11', nome: 'Exultação do Companheiro da Podridão', categoria: 'Condicionais' },
        { chave: 'condicional-12', nome: 'Exultação do Lorde do Sangue', categoria: 'Condicionais' },
        { chave: 'condicional-13', nome: 'Camafeu do Saqueador', categoria: 'Condicionais' },
        { chave: 'condicional-14', nome: 'Chifre de Espírito Ancestral', categoria: 'Condicionais' },
        { chave: 'condicional-15', nome: 'Escaravelho de Ouro', categoria: 'Condicionais' },
        { chave: 'condicional-16', nome: 'Escaravelho de Prata', categoria: 'Condicionais' }
    ],
    "personagem": [
        { chave: 'personagem-1', nome: 'Frasco de Crepus', categoria: 'Personagem' },
        { chave: 'personagem-2', nome: 'Véu Ocultador', categoria: 'Personagem' },
        { chave: 'personagem-3', nome: 'Talismã de Gato de Cauda Longa', categoria: 'Personagem' },
        { chave: 'personagem-4', nome: 'Espelho Falso do Dedo Enrrolado', categoria: 'Personagem' },
        { chave: 'personagem-5', nome: 'Espelho Falso do Anfitrião', categoria: 'Personagem' },
        { chave: 'personagem-6', nome: 'Pesar de Shabriri', categoria: 'Personagem' },
        { chave: 'personagem-7', nome: 'Pesar de Daedicar', categoria: 'Personagem' }
    ],
};

/* Função para carregar o checklist a partir do objeto */
function carregarChecklist(lista) {

    // Inicializa uma variável para concatenar os acordeões
    var checklist = '';

    // Percorre o objeto de armas
    for (let categoria in lista) {
        
        // Pega os items do objeto
        let items = lista[categoria];

        // Inicializa a variável que vai concatenar as opções e a que vai ficar com o nome da categoria
        var opcoes = '';
        var nomeCategoria = '';

        // Percorre a lista de opções
        for (let i = 0; i < items.length; i++) {

            // Monta o html do item da lista de uma categoria, com o checkbox, links e chaves
            var opcao = '\
                <div class="accordion-checkbox-item d-flex justify-content-between align-items-center">\
                    <div class="form-check">\
                        <input class="form-check-input" type="checkbox" data-categoria="'+ categoria +'" value="'+ items[i].chave +'" id="'+ items[i].chave +'">\
                        <label class="form-check-label" for="'+ items[i].chave +'">'+ items[i].nome +'</label>\
                    </div>\
                </div>';

            // Concatena o html de cada opção para inserir no acordeão da categoria
            opcoes = opcoes + opcao;

            // Obtem o nome da categoria do último elemento do laço
            nomeCategoria = items[i].categoria;
        }

        //  Monta o html de cada acordeão, como nome, categoria e contador de quantidade de items
        var acordeao = '\
            <div id="'+ categoria +'-key" class="accordion-item">\
                <h2 class="accordion-header">\
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#'+ categoria +'" aria-expanded="true" aria-controls="'+ categoria +'">\
                        '+ nomeCategoria +'\
                        <span class="accordion-finished">Completo</span>\
                        <span class="accordion-counter"><span class="checked">0</span> | <span class="total">'+ items.length +'</span></span>\
                    </button>\
                </h2>\
                <div id="'+ categoria +'" class="accordion-collapse collapse" data-bs-parent="#checklistWeapons">\
                    <div class="accordion-body">\
                        <div class="accordion-checkbox">\
                            '+ opcoes +'\
                        </div>\
                    </div>\
                </div>\
            </div>';

        // Concatena o html de cada acordeão, para inserir componente geral de acordeão
        checklist = checklist + acordeao;
    }

    // Usa o innerHTML para inserir todos os elementos de acordeão no id correspondente
    const elementoAcordeao = document.getElementById('checklistWeapons');
    elementoAcordeao.innerHTML = checklist
}

// Função para atualizar o contator de quantidade de cada categoria
function atualizarContadores() {
    const categorias = document.querySelectorAll(".accordion-item");

    categorias.forEach((categoriaItem) => {
        const categoria = categoriaItem.id.replace("-key", "");
        const checkboxes = categoriaItem.querySelectorAll('.form-check-input');
        const total = checkboxes.length;
        let marcados = 0;

        checkboxes.forEach((c) => {
            if (c.checked) marcados++;
        });

        const contadorSpan = categoriaItem.querySelector('.accordion-counter .checked');
        const finalizadoSpan = categoriaItem.querySelector('.accordion-finished');

        contadorSpan.textContent = marcados;
        if (marcados === total) {
            finalizadoSpan.classList.add('finished');
        } else {
            finalizadoSpan.classList.remove('finished');
        }
    });
}

/* Função para marcar os itens no checklist, atualizar o contador e mostrar quando a lista estiver finalizada */
function marcarChecklist() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const checklistSalvo = JSON.parse(localStorage.getItem("checklist") || "{}");

    // Marca os que estavam salvos
    checkboxes.forEach((checkbox) => {
        const categoria = checkbox.dataset.categoria;
        const chave = checkbox.value;

        if (checklistSalvo[categoria] && checklistSalvo[categoria].includes(chave)) {
            checkbox.checked = true;
        }
    });

    // Atualiza contadores após carregar
    atualizarContadores();

    // Adiciona eventos para atualizar localStorage
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const categoria = checkbox.dataset.categoria;
            const chave = checkbox.value;

            if (!checklistSalvo[categoria]) {
                checklistSalvo[categoria] = [];
            }

            if (checkbox.checked) {
                if (!checklistSalvo[categoria].includes(chave)) {
                    checklistSalvo[categoria].push(chave);
                }
            } else {
                checklistSalvo[categoria] = checklistSalvo[categoria].filter((v) => v !== chave);
            }

            localStorage.setItem("checklist", JSON.stringify(checklistSalvo));
            atualizarContadores();
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {

    // Inicia a função para carregar os itens
    carregarChecklist(talismas)

    // Inicia a função de marcar os itens
    marcarChecklist()
  
});