/* Objeto com a lista de Armas */
const armaduras = {
    "capacetes": [
        { chave: 'capacetes-1', nome: 'Capuz de Pajem Maior', categoria: 'Capacetes' },
        { chave: 'capacetes-2', nome: 'Chapéu Pontudo de Alberich', categoria: 'Capacetes' },
        { chave: 'capacetes-3', nome: 'Coroa Pedrilhante de Azur', categoria: 'Capacetes' },
        { chave: 'capacetes-4', nome: 'Coroa Pedrilhante de Lusat', categoria: 'Capacetes' },
        { chave: 'capacetes-5', nome: 'Chapéu de Bruxa da Neve', categoria: 'Capacetes' },
        { chave: 'capacetes-6', nome: 'Capuz de Fia', categoria: 'Capacetes' },
        { chave: 'capacetes-7', nome: 'Capuz de Apóstolo da Pele Divina', categoria: 'Capacetes' },
        { chave: 'capacetes-8', nome: 'Capuz de Nobre da Pele Divina', categoria: 'Capacetes' },
        { chave: 'capacetes-9', nome: 'Máscara Albináurica', categoria: 'Capacetes' },
        { chave: 'capacetes-10', nome: 'Máscara de Lobo Preto', categoria: 'Capacetes' },
        { chave: 'capacetes-11', nome: 'Máscara Branca', categoria: 'Capacetes' },
        { chave: 'capacetes-12', nome: 'Capuz Preto', categoria: 'Capacetes' },
        { chave: 'capacetes-13', nome: 'Capuz de Faca Negra', categoria: 'Capacetes' },
        { chave: 'capacetes-14', nome: 'Elmo com Asas de Malenia', categoria: 'Capacetes' },
        { chave: 'capacetes-15', nome: 'Coroa do Lorde Prístino', categoria: 'Capacetes' },
        { chave: 'capacetes-16', nome: 'Elmo de Restos Reais', categoria: 'Capacetes' },
        { chave: 'capacetes-17', nome: 'Elmo do Sabe-Tudo', categoria: 'Capacetes' },
        { chave: 'capacetes-18', nome: 'Elmo de Maliketh', categoria: 'Capacetes' },
        { chave: 'capacetes-19', nome: 'Elmo da Cavalaria da Noite', categoria: 'Capacetes' },
        { chave: 'capacetes-20', nome: 'Elmo de Machado do Crisol', categoria: 'Capacetes' },
        { chave: 'capacetes-21', nome: 'Elmo da Árvore do Crisol', categoria: 'Capacetes' },
        { chave: 'capacetes-22', nome: 'Elmo de Juba Vermelha de Radahn', categoria: 'Capacetes' }
    ],
    "peitoral": [
        { chave: 'peitoral-1', nome: 'Roupa de Pajem Maior', categoria: 'Peitoral' },
        { chave: 'peitoral-2', nome: 'Robe de Alberich', categoria: 'Peitoral' },
        { chave: 'peitoral-3', nome: 'Robe Pedrilhante de Azur', categoria: 'Peitoral' },
        { chave: 'peitoral-4', nome: 'Robe de Lusat', categoria: 'Peitoral' },
        { chave: 'peitoral-5', nome: 'Robe de Bruxa da Neve', categoria: 'Peitoral' },
        { chave: 'peitoral-6', nome: 'Robe de Fia', categoria: 'Peitoral' },
        { chave: 'peitoral-7', nome: 'Robe de Apóstolo da Pele Divina', categoria: 'Peitoral' },
        { chave: 'peitoral-8', nome: 'Robe de Nobre da Pele Divina', categoria: 'Peitoral' },
        { chave: 'peitoral-9', nome: 'Traje de Confessor', categoria: 'Peitoral' },
        { chave: 'peitoral-10', nome: 'Cota de Malha Suja', categoria: 'Peitoral' },
        { chave: 'peitoral-11', nome: 'Armadura de Faca Negra', categoria: 'Peitoral' },
        { chave: 'peitoral-12', nome: 'Armadura de Malenia', categoria: 'Peitoral' },
        { chave: 'peitoral-13', nome: 'Armadura do Lorde Prístino', categoria: 'Peitoral' },
        { chave: 'peitoral-14', nome: 'Armadura de Blaidd', categoria: 'Peitoral' },
        { chave: 'peitoral-15', nome: 'Armadura de Restos Reais', categoria: 'Peitoral' },
        { chave: 'peitoral-16', nome: 'Armadura do Sabe-Tudo', categoria: 'Peitoral' },
        { chave: 'peitoral-17', nome: 'Armadura de Maliketh', categoria: 'Peitoral' },
        { chave: 'peitoral-18', nome: 'Armadura da Cavalaria da Noite', categoria: 'Peitoral' },
        { chave: 'peitoral-19', nome: 'Armadura de Machado do Crisol', categoria: 'Peitoral' },
        { chave: 'peitoral-20', nome: 'Armadura de Árvore do Crisol', categoria: 'Peitoral' },
        { chave: 'peitoral-21', nome: 'Armadura de Leão de Radahn', categoria: 'Peitoral' }
    ],
    "luvas": [
        { chave: 'luvas-1', nome: 'Mangas de Alberich', categoria: 'Luvas' },
        { chave: 'luvas-2', nome: 'Mangas de Azur', categoria: 'Luvas' },
        { chave: 'luvas-3', nome: 'Mangas de Lusat', categoria: 'Luvas' },
        { chave: 'luvas-4', nome: 'Braceletes de Apóstolo da Pele Divina', categoria: 'Luvas' },
        { chave: 'luvas-5', nome: 'Braceletes de Nobre da Pele Divina', categoria: 'Luvas' },
        { chave: 'luvas-6', nome: 'Mangas de Bandido', categoria: 'Luvas' },
        { chave: 'luvas-7', nome: 'Manopla de Faca Negra', categoria: 'Luvas' },
        { chave: 'luvas-8', nome: 'Manoplas de Malenia', categoria: 'Luvas' },
        { chave: 'luvas-9', nome: 'Braçadeiras do Lorde Prístino', categoria: 'Luvas' },
        { chave: 'luvas-10', nome: 'Manoplas de Blaidd', categoria: 'Luvas' },
        { chave: 'luvas-11', nome: 'Manoplas de Restos Reais', categoria: 'Luvas' },
        { chave: 'luvas-12', nome: 'Manoplas do Sabe-Tudo', categoria: 'Luvas' },
        { chave: 'luvas-13', nome: 'Manoplas do Maliketh', categoria: 'Luvas' },
        { chave: 'luvas-14', nome: 'Manoplas da Cavalaria da Noite', categoria: 'Luvas' },
        { chave: 'luvas-15', nome: 'Manoplas do Crisol', categoria: 'Luvas' },
        { chave: 'luvas-16', nome: 'Manoplas de Radahn', categoria: 'Luvas' }
    ],
    "botas": [
        { chave: 'grevas-1', nome: 'Calças de Pajem', categoria: 'Grevas' },
        { chave: 'grevas-2', nome: 'Calças de Alberich', categoria: 'Grevas' },
        { chave: 'grevas-3', nome: 'Calças do Preceptor', categoria: 'Grevas' },
        { chave: 'grevas-4', nome: 'Faixas de Perna do Velho Feiticeiro', categoria: 'Grevas' },
        { chave: 'grevas-5', nome: 'Saia de Bruxa da Neve', categoria: 'Grevas' },
        { chave: 'grevas-6', nome: 'Calças de Apóstolo da Pele Divina', categoria: 'Grevas' },
        { chave: 'grevas-7', nome: 'Calças de Nobre da Pele Divina', categoria: 'Grevas' },
        { chave: 'grevas-8', nome: 'Grevas de Faca Negra', categoria: 'Grevas' },
        { chave: 'grevas-9', nome: 'Grevas de Malenia', categoria: 'Grevas' },
        { chave: 'grevas-10', nome: 'Grevas do Lorde Prístino', categoria: 'Grevas' },
        { chave: 'grevas-11', nome: 'Grevas do Blaidd', categoria: 'Grevas' },
        { chave: 'grevas-12', nome: 'Grevas de Restos Reias', categoria: 'Grevas' },
        { chave: 'grevas-13', nome: 'Grevas do Sabe-Tudo', categoria: 'Grevas' },
        { chave: 'grevas-14', nome: 'Grevas de Maliketh', categoria: 'Grevas' },
        { chave: 'grevas-15', nome: 'Grevas da Cavalaria da Noite', categoria: 'Grevas' },
        { chave: 'grevas-16', nome: 'Grevas do Crisol', categoria: 'Grevas' },
        { chave: 'grevas-17', nome: 'Grevas de Radahn', categoria: 'Grevas' }
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
    carregarChecklist(armaduras)

    // Inicia a função de marcar os itens
    marcarChecklist()
  
});