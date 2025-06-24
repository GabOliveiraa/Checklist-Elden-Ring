/* Objeto com a lista de Armas */
const armas = {
    "adagas": [
        { chave: 'adagas-1', nome: 'Adaga', categoria: 'Adagas' },
        { chave: 'adagas-2', nome: 'Adaga de Aparagem', categoria: 'Adagas' },
        { chave: 'adagas-3', nome: 'Miséricorde', categoria: 'Adagas' },
        { chave: 'adagas-4', nome: 'Faca Grande', categoria: 'Adagas' },
        { chave: 'adagas-5', nome: 'Adaga Sangrenta', categoria: 'Adagas' },
        { chave: 'adagas-6', nome: 'Adaga de Aço Dourado', categoria: 'Adagas' },
        { chave: 'adagas-7', nome: 'Wakizashi', categoria: 'Adagas' },
        { chave: 'adagas-8', nome: 'Foice do Festival', categoria: 'Adagas' },
        { chave: 'adagas-9', nome: 'Foice de Marfim', categoria: 'Adagas' },
        { chave: 'adagas-10', nome: 'Faca de Cristal', categoria: 'Adagas' },
        { chave: 'adagas-11', nome: 'Ferrão de Escorpião', categoria: 'Adagas' },
        { chave: 'adagas-12', nome: 'Ciquedea', categoria: 'Adagas' },
        { chave: 'adagas-13', nome: 'Kris Pedrilhante', categoria: 'Adagas' },
        { chave: 'adagas-14', nome: 'Reduvia', categoria: 'Adagas' },
        { chave: 'adagas-15', nome: 'Lâmina do Chamado', categoria: 'Adagas' },
        { chave: 'adagas-16', nome: 'Facas Negras', categoria: 'Adagas' }
    ],
    "espadas_retas": [
        { chave: 'espadas-retas-1', nome: 'Espada Curta', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-2', nome: 'Espada Longa', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-3', nome: 'Espada Larga', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-4', nome: 'Espada Reta Desgastada', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-5', nome: 'Espada Reta do Lorde', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-6', nome: 'Espada Esguia do Nobre', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-7', nome: 'Bastão com Lâmina', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-8', nome: 'Garra de Falcão de Guerra', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-9', nome: 'Espada de Pedrilhante Lazuli', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-10', nome: 'Espada de Cavaleiro Cariano', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-11', nome: 'Espada de Cristal', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-12', nome: 'Espada de Cristal Apodrecida', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-13', nome: 'Espada de Cavaleiro de Miquella', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-14', nome: 'Espada Reta Ornamental', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-15', nome: 'Epitáfio Dourado', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-16', nome: 'Espada de Sta. Trina', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-17', nome: 'Regalia de Eochaid', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-18', nome: 'Espada com Códigos', categoria: 'Espadas Retas' },
        { chave: 'espadas-retas-19', nome: 'Espada da Noite e da Chama', categoria: 'Espadas Retas' }
    ],
    "espadas_grandes": [
        { chave: 'espadas-grandes-1', nome: 'Espada Bastarda', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-2', nome: 'Claymore', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-3', nome: 'Espada Grande de Ferro', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-4', nome: 'Espada Grande do Lorde', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-5', nome: 'Espada Grande de Cavaleiro', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-6', nome: 'Espada Grande de Cavaleiro Banido', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-7', nome: 'Espada Grande Bifurcada', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-8', nome: 'Flambérgia', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-9', nome: 'Espada Grande da Gárgula', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-10', nome: 'Lâmina Negra da Gárgula', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-11', nome: 'Espada Inseparável', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-12', nome: 'Espada de Milos', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-13', nome: 'Espada de Carrasco de Marais', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-14', nome: 'Espada Grande de Ordovis', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-15', nome: 'Espada do Lorge de Alabastro', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-16', nome: 'Atiçador da Morte', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-17', nome: 'Campanário de Helphen', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-18', nome: 'Lâmina Blasfema', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-19', nome: 'Espada Grande da Ordem Áurea', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-20', nome: 'Espada Grande da Lua Sombria', categoria: 'Espadas Grandes' },
        { chave: 'espadas-grandes-21', nome: 'Espada Sagrada da Relíquia', categoria: 'Espadas Grandes' }
    ],
    "espadas_colossais": [
        { chave: 'espadas-colossais-1', nome: 'Zweihänder', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-2', nome: 'Espada Grande', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-3', nome: 'Espada Grande de Cão de Guarda', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-4', nome: 'Espada Dourada de Troll', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-5', nome: 'Espada de Cavaleiro Troll', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-6', nome: 'Espada Grande Real', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-7', nome: 'Espada Grande com Lâmina Enxertada', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-8', nome: 'Espada Grande da Ruínas', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-9', nome: 'Espada Grande do Flagelo Estelar', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-10', nome: 'Espada Grande Matador de Deuses', categoria: 'Espadas Colossais' },
        { chave: 'espadas-colossais-11', nome: 'Lâmina Negra de Maliketh', categoria: 'Espadas Colossais' }
    ],
    "espadas_de_fincada": [
        { chave: 'espadas-de-fincada-1', nome: 'Florete', categoria: 'Espadas de Fincada' },
        { chave: 'espadas-de-fincada-2', nome: 'Estoque', categoria: 'Espadas de Fincada' },
        { chave: 'espadas-de-fincada-3', nome: 'Estoque do Nobre', categoria: 'Espadas de Fincada' },
        { chave: 'espadas-de-fincada-4', nome: 'Espada de Cavaleiro da Podridão Imaculada', categoria: 'Espadas de Fincada' },
        { chave: 'espadas-de-fincada-5', nome: 'Rapieira de Rogier', categoria: 'Espadas de Fincada' },
        { chave: 'espadas-de-fincada-6', nome: 'Rapieira de Espinha de Formiga', categoria: 'Espadas de Fincada' },
        { chave: 'espadas-de-fincada-7', nome: 'Agulha Congelada', categoria: 'Espadas de Fincada' }
    ],
    "espada_pesada_de_fincada": [
        { chave: 'espada-pesada-de-fincada-1', nome: 'Grande Épée', categoria: 'Espada Pesada de Fincada' },
        { chave: 'espada-pesada-de-fincada-2', nome: 'Satura da Pele Divina', categoria: 'Espada Pesada de Fincada' },
        { chave: 'espada-pesada-de-fincada-3', nome: 'Helike do Sangue', categoria: 'Espada Pesada de Fincada' },
        { chave: 'espada-pesada-de-fincada-4', nome: 'Lâmina de Pedra do Rei Dragão', categoria: 'Espada Pesada de Fincada' }
    ],
    "espadas_curvas": [
        { chave: 'espadas-curvas-1', nome: 'Cimitarra', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-2', nome: 'Alfange', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-3', nome: 'Shamshir', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-4', nome: 'Grosse Messer', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-5', nome: 'Espada Curva de Bandido', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-6', nome: 'Shotel', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-7', nome: 'Espada Curva do Ladrão de Túmulos', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-8', nome: 'Katana de Louva-a-Deus', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-9', nome: 'Espada Curva do Homem-Fera', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-10', nome: 'Espada Curva do Riacho', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-11', nome: 'Espada Curva do Deus-Serpente', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-12', nome: 'Lâmina de Magma', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-13', nome: 'Espada Fluida de Nox', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-14', nome: 'Asa de Astel', categoria: 'Espadas Curvas' },
        { chave: 'espadas-curvas-15', nome: 'Shotel do Eclipse', categoria: 'Espadas Curvas' }
    ],
    "espada_grande_curva": [
        { chave: 'espada-grande-curva-1', nome: 'Cutelo Curvado', categoria: 'Espada Grande Curva' },
        { chave: 'espada-grande-curva-2', nome: 'Cutelo de Agouro', categoria: 'Espada Grande Curva' },
        { chave: 'espada-grande-curva-3', nome: 'Lâmina Cintilante do Monge', categoria: 'Espada Grande Curva' },
        { chave: 'espada-grande-curva-4', nome: 'Espada Grande Curva de Homem-Fera', categoria: 'Espada Grande Curva' },
        { chave: 'espada-grande-curva-5', nome: 'Presa do Cão de Caça', categoria: 'Espada Grande Curva' },
        { chave: 'espada-grande-curva-6', nome: 'Espada Grande do Lorde de Ônix', categoria: 'Espada Grande Curva' },
        { chave: 'espada-grande-curva-7', nome: 'Espada Curva de Zamor', categoria: 'Espada Grande Curva' },
        { chave: 'espada-grande-curva-8', nome: 'Espada de Escama do Wyrm de Magma', categoria: 'Espada Grande Curva' },
        { chave: 'espada-grande-curva-9', nome: 'Espada Amaldiçoada de Morgott', categoria: 'Espada Grande Curva' }
    ],
    "katanas": [
        { chave: 'katanas-1', nome: 'Uchigatana', categoria: 'Katanas' },
        { chave: 'katanas-2', nome: 'Nagakiba', categoria: 'Katanas' },
        { chave: 'katanas-3', nome: 'Lâmina de Osso de Serpente', categoria: 'Katanas' },
        { chave: 'katanas-4', nome: 'Lâmina da Estrela Cadente', categoria: 'Katanas' },
        { chave: 'katanas-5', nome: 'Véu da Lua', categoria: 'Katanas' },
        { chave: 'katanas-6', nome: 'Rios de Sangue', categoria: 'Katanas' },
        { chave: 'katanas-7', nome: 'Lâmina de Escama de Dragão', categoria: 'Katanas' },
        { chave: 'katanas-8', nome: 'A Mão de Malenia', categoria: 'Katanas' }
    ],
    "laminas_gemeas": [
        { chave: 'laminas-gemeas-1', nome: 'Lâminas-Gêmeas', categoria: 'Lâminas Gêmeas' },
        { chave: 'laminas-gemeas-2', nome: 'Espadas-Gêmeas do Cavaleiro', categoria: 'Lâminas Gêmeas' },
        { chave: 'laminas-gemeas-3', nome: 'Esfolador de Pele Divina', categoria: 'Lâminas Gêmeas' },
        { chave: 'laminas-gemeas-4', nome: 'Lâminas-Gêmeas da Gárgula', categoria: 'Lâminas Gêmeas' },
        { chave: 'laminas-gemeas-5', nome: 'Lâminas-Gêmeas Negras da Gárgula', categoria: 'Lâminas Gêmeas' },
        { chave: 'laminas-gemeas-6', nome: 'Lança Cortante de Eleonora', categoria: 'Lâminas Gêmeas' }
    ],
    "machado": [
        { chave: 'machado-1', nome: 'Machado de Mão', categoria: 'Machado' },
        { chave: 'machado-2', nome: 'Foice Bifurcada', categoria: 'Machado' },
        { chave: 'machado-3', nome: 'Machado de Batalha', categoria: 'Machado' },
        { chave: 'machado-4', nome: 'Machado Distorcido', categoria: 'Machado' },
        { chave: 'machado-5', nome: 'Machado de Maxilar', categoria: 'Machado' },
        { chave: 'machado-6', nome: 'Cutelo de Ferro', categoria: 'Machado' },
        { chave: 'machado-7', nome: 'Machado do Planalto', categoria: 'Machado' },
        { chave: 'machado-8', nome: 'Cutelo do Festival', categoria: 'Machado' },
        { chave: 'machado-9', nome: 'Machado de Sacrifício', categoria: 'Machado' },
        { chave: 'machado-10', nome: 'Machadinha Glacial', categoria: 'Machado' },
        { chave: 'machado-11', nome: 'Lâmina Ondulada', categoria: 'Machado' },
        { chave: 'machado-12', nome: 'Machado de Falcão sa Tempestade', categoria: 'Machado' },
        { chave: 'machado-13', nome: 'Machado de Rosus', categoria: 'Machado' },
    ],
    "machado_grande": [
        { chave: 'machado-grande-1', nome: 'Machado Grande', categoria: 'Machado Grande' },
        { chave: 'machado-grande-2', nome: 'Machado da Lua Crescente', categoria: 'Machado Grande' },
        { chave: 'machado-grande-3', nome: 'Machadinha de Haste Longa', categoria: 'Machado Grande' },
        { chave: 'machado-grande-4', nome: 'Machado Grande do Carrasco', categoria: 'Machado Grande' },
        { chave: 'machado-grande-5', nome: 'Grande Cutelo de Assasino de Agouros', categoria: 'Machado Grande' },
        { chave: 'machado-grande-6', nome: 'Âncora Enferrujada', categoria: 'Machado Grande' },
        { chave: 'machado-grande-7', nome: 'Faca de Dissecação', categoria: 'Machado Grande' },
        { chave: 'machado-grande-8', nome: 'Machado Grande da Gárgula', categoria: 'Machado Grande' },
        { chave: 'machado-grande-9', nome: 'Machado Negro da Gárgula', categoria: 'Machado Grande' },
        { chave: 'machado-grande-10', nome: 'Grande Chifre Alado', categoria: 'Machado Grande' },
        { chave: 'machado-grande-11', nome: 'Machado de Godrick', categoria: 'Machado Grande' },
    ],
    "martelo": [
        { chave: 'martelo-1', nome: 'Clava', categoria: 'Martelo' },
        { chave: 'martelo-2', nome: 'Clava Curva', categoria: 'Martelo' },
        { chave: 'martelo-3', nome: 'Clava com Espinhos', categoria: 'Martelo' },
        { chave: 'martelo-4', nome: 'Clava de Pedra', categoria: 'Martelo' },
        { chave: 'martelo-5', nome: 'Maça', categoria: 'Martelo' },
        { chave: 'martelo-6', nome: 'Estrela da Manhã', categoria: 'Martelo' },
        { chave: 'martelo-7', nome: 'Marreta de Guerra', categoria: 'Martelo' },
        { chave: 'martelo-8', nome: 'Martelo', categoria: 'Martelo' },
        { chave: 'martelo-9', nome: 'Maça Cintilante do Monge', categoria: 'Martelo' },
        { chave: 'martelo-10', nome: 'Buquê de Varré', categoria: 'Martelo' },
        { chave: 'martelo-11', nome: 'Chifre do Enviado', categoria: 'Martelo' },
        { chave: 'martelo-12', nome: 'Martelo do Fluxo de Nox', categoria: 'Martelo' },
        { chave: 'martelo-13', nome: 'Dedo com Anel', categoria: 'Martelo' },
        { chave: 'martelo-14', nome: 'Cetro do Sabe-Tudo', categoria: 'Martelo' },
        { chave: 'martelo-15', nome: 'Martelo de Marika', categoria: 'Martelo' },
    ],
    "mangual": [
        { chave: 'mangual-1', nome: 'Mangual', categoria: 'Mangual' },
        { chave: 'mangual-2', nome: 'Mangual do Cavaleiro Noturno', categoria: 'Mangual' },
        { chave: 'mangual-3', nome: 'Bastão Articulado', categoria: 'Mangual' },
        { chave: 'mangual-4', nome: 'Cabeças de Família', categoria: 'Mangual' },
        { chave: 'mangual-5', nome: 'Estrelas do Bastardo', categoria: 'Mangual' },
    ],
    "grande_martelo": [
        { chave: 'grande-martelo-1', nome: 'Clava Grande', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-2', nome: 'Clava Grande Curva', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-3', nome: 'Maça Grande', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-4', nome: 'Picareta', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-5', nome: 'Martelo de Pedra', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-6', nome: 'Martelo de Batalha', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-7', nome: 'Marteki de Batalha Apodrecido', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-8', nome: 'Grande Crânio de Festival', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-9', nome: 'Estrelas Grandes', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-10', nome: 'Martelo com Grande Chifre', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-11', nome: 'Chifre Comprido do Enviado', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-12', nome: 'Castiçal Craniano', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-13', nome: 'Grande Martelo da Garra de Leão', categoria: 'Grande Martelo' },
        { chave: 'grande-martelo-14', nome: 'Cetro do Devorador', categoria: 'Grande Martelo' },
    ],
    "arma_colossal": [
        { chave: 'arma-colossal-1', nome: 'Machado Grande do Gladiador', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-2', nome: 'Machado Grande da Podridão', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-3', nome: 'Alabarda de Golem', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-4', nome: 'Esmagador de Gigante', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-5', nome: 'Martelo de Incêndio do Prelado', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-6', nome: 'Clava Imensa', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-7', nome: 'Martelo de Troll', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-8', nome: 'Garra Grande de Dragão', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-9', nome: 'Báculo de Cão de Guarda', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-10', nome: 'Caja do Avatar', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-11', nome: 'Cajado Apodrecido', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-12', nome: 'Grande Chifre do Enviado', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-13', nome: 'Roda de Ghiza', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-14', nome: 'Mandíbula de Fera da Estrela Cadente', categoria: 'Arma Colossal' },
        { chave: 'arma-colossal-15', nome: 'Machado de Godfrey', categoria: 'Arma Colossal' },
    ],
    "lanca": [
        { chave: 'lanca-1', nome: 'Lança Curta', categoria: 'Lança' },
        { chave: 'lanca-2', nome: 'Lança de Ferro', categoria: 'Lança' },
        { chave: 'lanca-3', nome: 'Lança', categoria: 'Lança' },
        { chave: 'lanca-4', nome: 'Partasana', categoria: 'Lança' },
        { chave: 'lanca-5', nome: 'Pique', categoria: 'Lança' },
        { chave: 'lanca-6', nome: 'Lança com Espinhos', categoria: 'Lança' },
        { chave: 'lanca-7', nome: 'Naginata em Cruz', categoria: 'Lança' },
        { chave: 'lanca-8', nome: 'Arpão do Homem de Barro', categoria: 'Lança' },
        { chave: 'lanca-9', nome: 'Arado de Festival', categoria: 'Lança' },
        { chave: 'lanca-10', nome: 'Tocha com Cabo', categoria: 'Lança' },
        { chave: 'lanca-11', nome: 'Castiçal do Inquisidor', categoria: 'Lança' },
        { chave: 'lanca-12', nome: 'Lança de Cristal', categoria: 'Lança' },
        { chave: 'lanca-13', nome: 'Lança de Cristal Apodrecida', categoria: 'Lança' },
        { chave: 'lanca-14', nome: 'Lança de Cavaleiro da Podridão Imaculada', categoria: 'Lança' },
        { chave: 'lanca-15', nome: 'Lança do Ritual da Morte', categoria: 'Lança' },
        { chave: 'lanca-16', nome: 'Seta de Gransax', categoria: 'Lança' }
    ],
    "lanca_grande": [
        { chave: 'lanca-grande-1', nome: 'Lança de Cavalaria', categoria: 'Lança Grande' },
        { chave: 'lanca-grande-2', nome: 'Lança da Árvore', categoria: 'Lança Grande' },
        { chave: 'lanca-grande-3', nome: 'Caçador de Serpentes', categoria: 'Lança Grande' },
        { chave: 'lanca-grande-4', nome: 'Árvore de Siluria', categoria: 'Lança Grande' },
        { chave: 'lanca-grande-5', nome: 'Lança de Guerra de Vyke', categoria: 'Lança Grande' },
        { chave: 'lanca-grande-6', nome: 'Lança Sagrada de Mohgwyn', categoria: 'Lança Grande' }
    ],
    "alabarda": [
        { chave: 'alabarda-1', nome: 'Alabarda', categoria: 'Alabarda' },
        { chave: 'alabarda-2', nome: 'Alabarda de Cavaleiro Banido', categoria: 'Alabarda' },
        { chave: 'alabarda-3', nome: 'Lucerne', categoria: 'Alabarda' },
        { chave: 'alabarda-4', nome: 'Glaive', categoria: 'Alabarda' },
        { chave: 'alabarda-5', nome: 'Shotel da Milícia Vulgar', categoria: 'Alabarda' },
        { chave: 'alabarda-6', nome: 'Serra da Milícia Vulgar', categoria: 'Alabarda' },
        { chave: 'alabarda-7', nome: 'Espada-Lança do Guardião', categoria: 'Alabarda' },
        { chave: 'alabarda-8', nome: 'Alabarda da Gárgula', categoria: 'Alabarda' },
        { chave: 'alabarda-9', nome: 'Alabarda Negra da Gárgula', categoria: 'Alabarda' },
        { chave: 'alabarda-10', nome: 'Glaive do Cavaleiro Noturno', categoria: 'Alabarda' },
        { chave: 'alabarda-11', nome: 'Glaive da Praga', categoria: 'Alabarda' },
        { chave: 'alabarda-12', nome: 'Alabarda Ondulada da Lua Crescente', categoria: 'Alabarda' },
        { chave: 'alabarda-13', nome: 'Alabarda Dourada', categoria: 'Alabarda' },
        { chave: 'alabarda-14', nome: 'Alabarda de Dragão', categoria: 'Alabarda' },
        { chave: 'alabarda-15', nome: 'Foice de Guerra de Loretta', categoria: 'Alabarda' },
        { chave: 'alabarda-16', nome: 'Estandarte do Comandante', categoria: 'Alabarda' }
    ],
    "ceifador": [
        { chave: 'ceifador-1', nome: 'Foice', categoria: 'Ceifador' },
        { chave: 'ceifador-2', nome: 'Foice do Túmulo', categoria: 'Ceifador' },
        { chave: 'ceifador-3', nome: 'Foice da Auréola', categoria: 'Ceifador' },
        { chave: 'ceifador-4', nome: 'Foice Alada', categoria: 'Ceifador' }
    ],
    "chicote": [
        { chave: 'chicote-1', nome: 'Chicote', categoria: 'Chicote' },
        { chave: 'chicote-2', nome: 'Chicote Espinhento', categoria: 'Chicote' },
        { chave: 'chicote-3', nome: 'Urumi', categoria: 'Chicote' },
        { chave: 'chicote-4', nome: 'Chicote de Pétalas de Hoslow', categoria: 'Chicote' },
        { chave: 'chicote-5', nome: 'Castiçal do Chicote de Magma', categoria: 'Chicote' },
        { chave: 'chicote-6', nome: 'Trança Ruiva do Gigante', categoria: 'Chicote' }
    ],
    "tocha": [
        { chave: 'tocha-1', nome: 'Tocha', categoria: 'Tocha' },
        { chave: 'tocha-2', nome: 'Tocha Repelente de Feras', categoria: 'Tocha' },
        { chave: 'tocha-3', nome: 'Tocha de Fio de Aço', categoria: 'Tocha' },
        { chave: 'tocha-4', nome: 'Tocha da Sentinela', categoria: 'Tocha' },
        { chave: 'tocha-5', nome: 'Tocha de Chama Espectral', categoria: 'Tocha' },
        { chave: 'tocha-6', nome: 'Tocha de Sta. Trina', categoria: 'Tocha' }
    ]
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
    carregarChecklist(armas)

    // Inicia a função de marcar os itens
    marcarChecklist()
  
});