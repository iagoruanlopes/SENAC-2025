
function contatos() {
    var contatos = [
        {
            "nome": "Meloso",
            "telefone": "888888",
            "email": "08@gmail.com",
            "endereco": "rua caminho das pedras",
        },
        {

            "nome": "Black",
            "telefone": "000000",
            "email": "01@gmail.com",
            "endereco": "rua caminho das pedras",
        },
        {

            "nome": "Paulo",
            "telefone": "222222",
            "email": "02@gmail.com",
            "endereco": "rua caminho das pedras",
        },
        {

            "nome": "Zezin",
            "telefone": "111111",
            "email": "01@gmail.com",
            "endereco": "rua caminho das pedras",
        }]



    var nome = prompt("digite o nome do contato")
    var flag = false
    for (let i = 0; i < contatos.length; i++) {
        if (nome === contatos[i].nome) {
            alert("Contato encontardo: \n" +
                contatos[i].nome + "\n" +
                contatos[i].telefone + "\n" +
                contatos[i].email + "\n" +
                contatos[i].endereco
            )
            flag = true
            break;
        }
    }
    if (!flag) {
        alert("contato não registrado!")
    }
}