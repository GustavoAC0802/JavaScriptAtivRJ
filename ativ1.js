const personagem = {
    Nome: "Peter Parker", 
    Codinome: "Homem-Aranha",
    ArmaPrincipal: "Lança Teias",
    Velocidade: 90,
    Forca: 80,
    Resistencia: 75,
    descricao: function() {
        return "Nome do Personagem: " + this.Nome + "\n"
        + "Codinome do Personagem: " + this.Codinome + "\n"
        + "Arma Principal: " + this.ArmaPrincipal + "\n"
        + "Nível de  Força: " + this.Forca + "\n" 
        + "Nível de Velocidade: " + this.Velocidade + "\n"
        + "Nível de Resistencia " + this.Resistencia 
    }
}



const personagem2 = {
    Nome: "Bruce Banner",
    Codinome: "Hulk",
    ArmaPrincipal: "Braços/Musculos",
    Velocidade: 95,
    Forca: 96,
    Resistencia: 85,
    descricao: function() {
        return "Nome do Personagem: " + this.Nome + "\n"
        + "Codinome do Personagem: " + this.Codinome + "\n"
        + "Arma Principal: " + this.ArmaPrincipal + "\n"
        + "Nível de  Força: " + this.Forca + "\n" 
        + "Nível de Velocidade: " + this.Velocidade + "\n"
        + "Nível de Resistencia" + this.Resistencia
    }

}

const vilao = { 
    Nome: "Thanos",
    Codinome: "Thanos",
    ArmaPrincipal: "Manopla do Infinito", 
    Velocidade: 75,
    Forca: 85,
    Resistencia: 90,
    descricao: function(){
        return "Nome do Personagem: " + this.Nome + "\n"
        + "Codinome do Personagem: " + this.Codinome + "\n"
        + "Arma Principal: " + this.ArmaPrincipal + "\n"
        + "Nível de  Força: " + this.Forca + "\n" 
        + "Nível de Velocidade: " + this.Velocidade + "\n"
        + "Nível de Resistencia" + this.Resistencia
    } 
}


const Comparacao = [personagem, personagem2, vilao]

for(let cont = 0; cont< Comparacao.length; cont++){
    for(let cont2 = cont + 1; cont2 < Comparacao; cont2++){
        const character = Comparacao[cont];
        const character2 = Comparacao[cont2];
        
        if (character.Forca > character2.Forca){
            console.log(`${character.Codinome} vence em força`);
        } else if (character.Forca < character2.Forca){
            console.log(`${character2.Codinome} vence em força`);
        }

        if (character.Resistencia > character2.Resistencia){
            console.log(`${character.Codinome} venceu em resistencia`);
        } else if(character.Resistencia< character2.Resistencia){
            console.log(`${character2.Codinome} Venceu em resistencia`);
        } 

        if (character.Velocidade > character2.Velocidade){
            console.log(`${character.Codinome} venceu em velocidade`);
        } else if (character.Velocidade< character2.Velocidade){
            console.log(`${character2.Codinome} venceu em velocidade`);
            
        }  
    }
}