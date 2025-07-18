function Funcoes(){

    function Comum(){
        alert("Função Comum!")
    }

    Comum()

    function ComumComParametro(parametro){
        alert("Função com parâmetro: " + parametro)
    }

    ComumComParametro(15);

    ()=>{
        alert("Função de seta ou Lambda")
    }

    

    (function(){
        alert("Função anônima.")
    })
}

class Produto {
  constructor(id, nome, preco) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  exibirDetalhes() {
    return `ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
  }
}

class Livro extends Produto {
  constructor(id, nome, preco, autor, isbn) {
    super(id, nome, preco);
    this.autor = autor;
    this.isbn = isbn;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Autor: ${this.autor}, ISBN: ${this.isbn}`;
  }
}

class Eletronico extends Produto {
  constructor(id, nome, preco, marca, garantiaMeses) {
    super(id, nome, preco);
    this.marca = marca;
    this.garantiaMeses = garantiaMeses;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Marca: ${this.marca}, Garantia: ${this.garantiaMeses} meses`;
  }
}

class Produto {
  constructor(id, nome, preco) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  exibirDetalhes() {
    return `ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
  }
}

class Livro extends Produto {
  constructor(id, nome, preco, autor, isbn) {
    super(id, nome, preco);
    this.autor = autor;
    this.isbn = isbn;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Autor: ${this.autor}, ISBN: ${this.isbn}`;
  }
}

class Eletronico extends Produto {
  constructor(id, nome, preco, marca, garantiaMeses) {
    super(id, nome, preco);
    this.marca = marca;
    this.garantiaMeses = garantiaMeses;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Marca: ${this.marca}, Garantia: ${this.garantiaMeses} meses`;
  }
}