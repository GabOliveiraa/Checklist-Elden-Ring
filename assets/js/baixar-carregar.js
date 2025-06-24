function download() {
    document.getElementById("downloadJson").addEventListener("click", function () {
        
        const data = localStorage.getItem("checklist");

        if (!data) {
            alert("Nenhum item marcado para salvar!");
            return;
        }

        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "checklist.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

function upload() {

    document.getElementById("uploadJson").addEventListener("click", function () {
        document.getElementById("arquivo").click();
    });

    document.getElementById("arquivo").addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
        try {
            const json = JSON.parse(e.target.result);
            localStorage.setItem("checklist", JSON.stringify(json));
            alert("Checklist importado com sucesso!");
            location.reload();
        } catch (error) {
            alert("Erro ao importar arquivo.");
        }
        };
        reader.readAsText(file);
    });
}




document.addEventListener("DOMContentLoaded", function () {

    // Inicia a função de download de arquivo
    download()

    // Inicia a função de upload de arquivo
    upload()
  
});