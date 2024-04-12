function enviarForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    fetch("https://script.google.com/macros/s/AKfycbwravD4LgRn8oOx2__-duA6pbA7tzC7l_ZKuRlk5d4ek3zOZaCIm_TK2OzAGI3jzFQD/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            mensagem: mensagem
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Erro ao enviar formulário:", error);
    });
}

