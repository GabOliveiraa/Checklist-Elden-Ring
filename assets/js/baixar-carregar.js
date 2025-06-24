function download() {
    // Quando o botão de "baixar checklist" for clicado
    document.getElementById("downloadJson").addEventListener("click", function () {

        // Pega o conteúdo salvo no navegador (localStorage)
        const data = localStorage.getItem("checklist");

        // Se não tiver nada salvo, mostra um alert e encerra a função
        if (!data) {
            alert("Nenhum item marcado para salvar!");
            return;
        }

        // Prepara o conteúdo para ser salvo como um arquivo
        const blob = new Blob([data], { type: "application/json" });

        // Cria um link temporário que aponta para esse arquivo
        const url = URL.createObjectURL(blob);

        // Cria um botão invisível que será usado para baixar o arquivo
        const a = document.createElement("a");
        a.href = url;                   // O link leva até o conteúdo criado
        a.download = "checklist.json"; // Nome do arquivo que será baixado

        // Cria o botão, clica nele e depois remove ele
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Remove o link criado
        URL.revokeObjectURL(url);
    });
}


function upload() {
    // Quando o botão "importar checklist" for clicado
    document.getElementById("uploadJson").addEventListener("click", function () {
        // Abre a janela para escolher um arquivo do computador
        document.getElementById("arquivo").click();
    });

    // Quando o usuário escolher um arquivo
    document.getElementById("arquivo").addEventListener("change", function (event) {
        const file = event.target.files[0]; // Pega o arquivo selecionado

        // Se nenhum arquivo foi escolhido, não faz nada
        if (!file) return;

        const reader = new FileReader(); // Ferramenta para ler o conteúdo do arquivo

        // Quando terminar de ler o arquivo
        reader.onload = function (e) {
            try {
                // Tenta transformar o conteúdo do arquivo em dados utilizáveis
                const json = JSON.parse(e.target.result);

                // Salva esses dados no navegador (localStorage)
                localStorage.setItem("checklist", JSON.stringify(json));

                alert("Checklist importado com sucesso!");

                // Recarrega a página para mostrar os dados atualizados
                location.reload();
            } catch (error) {
                // Se o conteúdo do arquivo estiver errado, avisa o usuário
                alert("Erro ao importar arquivo.");
            }
        };

        // Começa a ler o conteúdo do arquivo como texto
        reader.readAsText(file);
    });
}




document.addEventListener("DOMContentLoaded", function () {

    // Inicia a função de download de arquivo
    download()

    // Inicia a função de upload de arquivo
    upload()
  
});