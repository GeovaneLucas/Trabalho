
// PREÇOS E ESTOQUE DOS PRODUTOS

const produtos = {
    "Ultra Violet": {
        preco: 8.79,
        estoque: 67
    },

    "Mango Loko": {
        preco: 8.79,
        estoque: 67
    },

    "Morango": {
        preco: 8.79,
        estoque: 67
    },

    "Rio Punch": {
        preco: 8.79,
        estoque: 67
    },

    "Ultra White": {
        preco: 8.79,
        estoque: 67
    }
};


// FUNÇÃO DE COMPRA

function calcularCompra() {

    let sabor = document.getElementById("sabor").value;

    let quantidade = Number(
        document.getElementById("quantidade").value
    );

    let resultado = document.getElementById("resultado");

    let produto = produtos[sabor];

    // Verificar quantidade

    if (!Number.isInteger(quantidade) || quantidade <= 0) {

        alert("Digite uma quantidade válida!");

        resultado.innerHTML = "";

        return;
    }

    // Verificar estoque

    if (quantidade > produto.estoque) {

        alert("Desculpe! Temos apenas " +
            produto.estoque + " unidades disponíveis.");

        resultado.innerHTML = "";

        return;
    }

    // Calcular valor total

    let total = produto.preco * quantidade;

    // Formatar valores em reais

    let valorFormatado = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    let precoFormatado = produto.preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // Mostrar resultado na tela

    resultado.innerHTML = `
        <div class="alert alert-success mt-3">

            <h4>Resumo da compra</h4>

            <p><strong>Sabor:</strong> ${sabor}</p>

            <p><strong>Quantidade:</strong> ${quantidade}</p>

            <p><strong>Preço unitário:</strong> ${precoFormatado}</p>

            <hr>

            <h4>Total a pagar: ${valorFormatado}</h4>

            <p>Compra calculada com sucesso!</p>

        </div>
    `;

}


// FORMULÁRIO DE CONTATO

document.getElementById("formContato").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let nome = document.getElementById("nome").value;

        document.getElementById("retornoContato").innerHTML = `
            <div class="alert alert-success">
                Obrigado pelo contato, ${nome}!
                Sua mensagem foi recebida nesta simulação.
            </div>
        `;

        this.reset();

    }
);
