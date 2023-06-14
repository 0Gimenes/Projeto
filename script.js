// divListaProduto.insertAdjacentHTML('afterbegin', '');
class myErro extends Error {
    constructor(message){
      super(message);
      this.name = "myErro";
    }
  }


class Produto {
    constructor(nome, datac, descricao, preco){
            this.nome = nome;
            this.datac = datac;
            this.descricao = descricao;
            this.preco = preco
    }

    mostrarAtributos(){
        try {
          return this.mostrap();  
        } catch (error) {
          console.log(error) 
        }
      } 
    
mostrap(){
 if(this.nome != "" && this.descricao != "" && this.datac !="" && this.preco !=""){  return`
 <h1>${this.nome}</h1>
 <h2>${this.descricao}</h2>
 <h2>${this.datac}</h2>
 <h2>${this.preco}</h2>
`
} else{
    throw new myErro("Deu erro em algum campo dos produtos")
}
}
}



class Produtod extends Produto{
    constructor (nome , datac, descricao , preco, imagem){
        super(nome , datac , descricao, preco , imagem)
this.imagem = imagem
    }

    mostrarAtributosd(){
        try {
          return this.mostrapd();  
        } catch (error) {
          console.log(error) 
        }
      } 

    mostrapd(){
        if(this.nome != "" && this.descricao != "" && this.datac !="" && this.preco !="" && this.imagem !="" ){
            return` <img src="${this.imagem}">
            <h1>${this.nome}</h1>
            <h2>${this.descricao}</h2>
            <h2>${this.datac}</h2>
            <h2>${this.preco}</h2>`
        }
        else{
            throw new myErro("Deu erro em algum campo dos destaques")
        }
    }
}

const rei = new Produtod ("Rei chikita", "24/5/2021","Pelucia de anime", 2.33,"https://i.pinimg.com/originals/03/9d/7c/039d7ce116e639b24efbc9b66475fd44.jpg")
const cow = new Produto ("vaca", "24/5/2021","vaquinha cabulosa", )
const cat = new Produto ("gato", "24/5/2021","gato colossal", 15.33)



const produtod = document.getElementById("produto-destaque");
produtod.insertAdjacentHTML('afterbegin', rei.mostrapd());


const produtoc = document.getElementById("lista-produtos")
produtoc.insertAdjacentHTML('afterbegin', cow.mostrap())

const produtoco = document.getElementById("lista-produtos")
produtoco.insertAdjacentHTML('afterbegin', cat.mostrap())