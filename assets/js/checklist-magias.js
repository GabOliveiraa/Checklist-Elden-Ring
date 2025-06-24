/* Objeto com a lista de Armas */
const magias = {
    "Magias": [
        { chave: 'magias-1', nome: 'Calhau Pedrilhante', categoria: 'Magias' },
        { chave: 'magias-2', nome: 'Grande Fragmento Pedrilhante', categoria: 'Magias' },
        { chave: 'magias-3', nome: 'Cometa', categoria: 'Magias' },
        { chave: 'magias-4', nome: 'Estrelas Pedrilhantes', categoria: 'Magias' },
        { chave: 'magias-5', nome: 'Chuva de Estrelas', categoria: 'Magias' },
        { chave: 'magias-6', nome: 'Arco Pedrilhante', categoria: 'Magias' },
        { chave: 'magias-7', nome: 'Canhão de Haima', categoria: 'Magias' },
        { chave: 'magias-8', nome: 'Malho de Haima', categoria: 'Magias' },
        { chave: 'magias-9', nome: 'Terra Partida', categoria: 'Magias' },
        { chave: 'magias-10', nome: 'Explosão de Rocha', categoria: 'Magias' },
        { chave: 'magias-11', nome: 'Arma do Estudioso', categoria: 'Magias' },
        { chave: 'magias-12', nome: 'Escudo do Estudioso', categoria: 'Magias' },
        { chave: 'magias-13', nome: 'Bólido Escuro', categoria: 'Magias' },
        { chave: 'magias-14', nome: 'Plêiades', categoria: 'Magias' },
        { chave: 'magias-15', nome: 'Chuva de Estrelas Fundadoras', categoria: 'Magias' },
        { chave: 'magias-16', nome: 'Falange Cariana', categoria: 'Magias' },
        { chave: 'magias-17', nome: 'Arco Grande de Loretta', categoria: 'Magias' },
        { chave: 'magias-18', nome: 'Maestria de Loretta', categoria: 'Magias' },
        { chave: 'magias-19', nome: 'Lua Cheia de Rennala', categoria: 'Magias' },
        { chave: 'magias-20', nome: 'Lua Sombria de Ranni', categoria: 'Magias' },
        { chave: 'magias-21', nome: 'Fatiadora Cariana', categoria: 'Magias' },
        { chave: 'magias-22', nome: 'Espada Grande Cariana', categoria: 'Magias' },
        { chave: 'magias-23', nome: 'Perfurador Cariano', categoria: 'Magias' },
        { chave: 'magias-24', nome: 'Lâmina Lunar de Adula', categoria: 'Magias' },
        { chave: 'magias-25', nome: 'Retaliação Cariana', categoria: 'Magias' },
        { chave: 'magias-26', nome: 'Fragmento da Noite', categoria: 'Magias' },
        { chave: 'magias-27', nome: 'Cometa Noturno', categoria: 'Magias' },
        { chave: 'magias-28', nome: 'Névoa da Donzela da Noite', categoria: 'Magias' },
        { chave: 'magias-29', nome: 'Disparo de Magma', categoria: 'Magias' },
        { chave: 'magias-30', nome: 'Fúria de Gelmir', categoria: 'Magias' },
        { chave: 'magias-31', nome: 'Rancor de Rykard', categoria: 'Magias' },
        { chave: 'magias-32', nome: 'Névoa Congelante', categoria: 'Magias' },
        { chave: 'magias-33', nome: 'Cristal Estilhaçado', categoria: 'Magias' },
        { chave: 'magias-34', nome: 'Torrente de Cristal', categoria: 'Magias' },
        { chave: 'magias-35', nome: 'Funda de Pedra', categoria: 'Magias' },
        { chave: 'magias-36', nome: 'Meteorito', categoria: 'Magias' },
        { chave: 'magias-37', nome: 'Meteorito de Astel', categoria: 'Magias' },
        { chave: 'magias-38', nome: 'Sarça Pecadora', categoria: 'Magias' },
        { chave: 'magias-39', nome: 'Sarças da Punição', categoria: 'Magias' },
        { chave: 'magias-40', nome: 'Chama do Rancor', categoria: 'Magias' },
        { chave: 'magias-41', nome: 'Rancor da Morte Anciã', categoria: 'Magias' },
        { chave: 'magias-42', nome: 'Neblina da Fia', categoria: 'Magias' }
    ],
    "encantamentos": [
        { chave: 'encantamentos-1', nome: 'Cura', categoria: 'Encantamentos' },
        { chave: 'encantamentos-2', nome: 'Cura Grande', categoria: 'Encantamentos' },
        { chave: 'encantamentos-3', nome: 'Regeneração do Lorde', categoria: 'Encantamentos' },
        { chave: 'encantamentos-4', nome: 'Rejeição', categoria: 'Encantamentos' },
        { chave: 'encantamentos-5', nome: 'Isca da Sombra', categoria: 'Encantamentos' },
        { chave: 'encantamentos-6', nome: 'Escuridão', categoria: 'Encantamentos' },
        { chave: 'encantamentos-7', nome: 'Voto Dourado', categoria: 'Encantamentos' },
        { chave: 'encantamentos-8', nome: 'Proteção da Térvore', categoria: 'Encantamentos' },
        { chave: 'encantamentos-9', nome: 'A Fúria do Ouro', categoria: 'Encantamentos' },
        { chave: 'encantamentos-10', nome: 'Cura da Térvore', categoria: 'Encantamentos' },
        { chave: 'encantamentos-11', nome: 'Pedido da Benção', categoria: 'Encantamentos' },
        { chave: 'encantamentos-12', nome: 'Benção da Térvore', categoria: 'Encantamentos' },
        { chave: 'encantamentos-13', nome: 'Estrelas Pristinas', categoria: 'Encantamentos' },
        { chave: 'encantamentos-14', nome: 'Lâmina Negra', categoria: 'Encantamentos' },
        { chave: 'encantamentos-15', nome: 'Lâmina da Ordem', categoria: 'Encantamentos' },
        { chave: 'encantamentos-16', nome: 'Lei da Causalidade', categoria: 'Encantamentos' },
        { chave: 'encantamentos-17', nome: 'Lei da Regressão', categoria: 'Encantamentos' },
        { chave: 'encantamentos-18', nome: 'Lança de Relâmpago', categoria: 'Encantamentos' },
        { chave: 'encantamentos-19', nome: 'Lança de Relâmpago do Dragão Ancião', categoria: 'Encantamentos' },
        { chave: 'encantamentos-20', nome: 'Golpe de Relâmpago do Dragão Ancião', categoria: 'Encantamentos' },
        { chave: 'encantamentos-21', nome: 'Gládio de Lansseax', categoria: 'Encantamentos' },
        { chave: 'encantamentos-22', nome: 'Lança de Relâmpago de Fortissax', categoria: 'Encantamentos' },
        { chave: 'encantamentos-23', nome: 'Relâmpago da Morte', categoria: 'Encantamentos' },
        { chave: 'encantamentos-24', nome: 'Eletrificar Arma', categoria: 'Encantamentos' },
        { chave: 'encantamentos-25', nome: 'Benção de Seta de Dragão', categoria: 'Encantamentos' },
        { chave: 'encantamentos-26', nome: 'Seta de Dragão de Vyke', categoria: 'Encantamentos' },
        { chave: 'encantamentos-27', nome: 'Ah, Chamas!', categoria: 'Encantamentos' },
        { chave: 'encantamentos-28', nome: 'Ó, Grande Pira!', categoria: 'Encantamentos' },
        { chave: 'encantamentos-29', nome: 'Banquete de Chamas', categoria: 'Encantamentos' },
        { chave: 'encantamentos-30', nome: 'Que a Chama dos Gigantes Te Leve', categoria: 'Encantamentos' },
        { chave: 'encantamentos-31', nome: 'Chama, Caia Sobre Eles', categoria: 'Encantamentos' },
        { chave: 'encantamentos-32', nome: 'Chama do Deus Caído', categoria: 'Encantamentos' },
        { chave: 'encantamentos-33', nome: 'Erga-se, Ó, Chama!', categoria: 'Encantamentos' },
        { chave: 'encantamentos-34', nome: 'Dance, Ó, Chama!', categoria: 'Encantamentos' },
        { chave: 'encantamentos-35', nome: 'Queime, Ó, Chama!', categoria: 'Encantamentos' },
        { chave: 'encantamentos-36', nome: 'Chama, Limpe-me', categoria: 'Encantamentos' },
        { chave: 'encantamentos-37', nome: 'Chama, Proteja-me', categoria: 'Encantamentos' },
        { chave: 'encantamentos-38', nome: 'Chama, Conceda-me Força', categoria: 'Encantamentos' },
        { chave: 'encantamentos-39', nome: 'Pecado Mortal do Fogo', categoria: 'Encantamentos' },
        { chave: 'encantamentos-40', nome: 'Chama Negra da Purificação', categoria: 'Encantamentos' },
        { chave: 'encantamentos-41', nome: 'Ritual da Chama Negra', categoria: 'Encantamentos' },
        { chave: 'encantamentos-42', nome: 'Lâmina da Chama Negra', categoria: 'Encantamentos' },
        { chave: 'encantamentos-43', nome: 'Garra de Fera de Gurranq', categoria: 'Encantamentos' },
        { chave: 'encantamentos-44', nome: 'Pedra de Gurranq', categoria: 'Encantamentos' },
        { chave: 'encantamentos-45', nome: 'Enxame de Moscas', categoria: 'Encantamentos' },
        { chave: 'encantamentos-46', nome: 'Dádiva de Sangue', categoria: 'Encantamentos' },
        { chave: 'encantamentos-47', nome: 'Lâmina de Chama do Sangue', categoria: 'Encantamentos' },
        { chave: 'encantamentos-48', nome: 'Névoa Venenosa', categoria: 'Encantamentos' },
        { chave: 'encantamentos-49', nome: 'Arma Venenosa', categoria: 'Encantamentos' },
        { chave: 'encantamentos-50', nome: 'Aeonia Escarlate', categoria: 'Encantamentos' },
        { chave: 'encantamentos-51', nome: 'A Chama do Frenesi', categoria: 'Encantamentos' },
        { chave: 'encantamentos-52', nome: 'Frenesi Insuportável', categoria: 'Encantamentos' },
        { chave: 'encantamentos-53', nome: 'Uivo de Shabriri', categoria: 'Encantamentos' },
        { chave: 'encantamentos-54', nome: 'Frenesi Inescapável', categoria: 'Encantamentos' },
        { chave: 'encantamentos-55', nome: 'Fogo de Dragão', categoria: 'Encantamentos' },
        { chave: 'encantamentos-56', nome: 'Sopro de Magma', categoria: 'Encantamentos' },
        { chave: 'encantamentos-57', nome: 'Sopro de Pedrilhante', categoria: 'Encantamentos' },
        { chave: 'encantamentos-58', nome: 'Sopro Podre', categoria: 'Encantamentos' },
        { chave: 'encantamentos-59', nome: 'Gelo de Dragão', categoria: 'Encantamentos' },
        { chave: 'encantamentos-60', nome: 'Ruína de Placidusax', categoria: 'Encantamentos' },
        { chave: 'encantamentos-61', nome: 'Garra de Dragão', categoria: 'Encantamentos' },
        { chave: 'encantamentos-62', nome: 'Rugido de Greyoll', categoria: 'Encantamentos' }
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
    carregarChecklist(magias)

    // Inicia a função de marcar os itens
    marcarChecklist()
  
});