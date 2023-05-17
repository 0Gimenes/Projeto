// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto {
    constructor(nome, datac, descricao, preco){
            this.nome = nome;
            this.datac = datac;
            this.descricao = descricao;
            this.preco = preco
    }
mostrap(){
   return`
   <h1>${this.nome}</h1>
   <h2>${this.descricao}</h2>
   `
}
}
class Produtod extends Produto{
    constructor (nome , datac,descricao , preco, imagem){
        super(nome , datac , descricao, preco )
this.imagem = imagem
    }

mostrapd(){
 return` <img src="${this.imagem}">
 <h1>${this.nome}</h1>
 <h2>${this.descricao}</h2>`
}
}

const produto = new Produto("Rei chikita", "24/5/2021","Pelucia de anime", 2.33,"https://i.pinimg.com/originals/03/9d/7c/039d7ce116e639b24efbc9b66475fd44.jpg")
console.log(produto.mostrap())

const produtopd = document.getElementById("lista-produtos")
produtopd.insertAdjacentHTML('afterbegin', produto.mostrap())

const produtod = document.getElementById("lista-produtos")
produtopd.insertAdjacentHTML('afterbegin', produto.mostrapd())