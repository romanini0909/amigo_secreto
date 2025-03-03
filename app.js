//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let = amigos=[];

function adicionarAmigo() {
    
    let nomeAmigo = document.getElementById("amigo").value;
   
    if (nomeAmigo.trim() === "") {
      alert("Por favor, insira um nome.");
      return; 
    }
  
    amigos.push(nomeAmigo);
    document.getElementById("amigo").value = ""; // Limpa a lista existente
  
    console.log(amigos);
    exibirAmigos(); // Exibir a lista de amigos
  }

  function exibirAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista existente
  
    for (let i = 0; i < amigos.length; i++) {
      const itemLista = document.createElement("li");
      itemLista.textContent = amigos[i];
      listaAmigos.appendChild(itemLista);
    }
  }

  function sortearAmigo() {
    if (amigos.length === 0) {
      document.getElementById("resultado").innerHTML = "Nenhum amigo para sortear.";
      return;
    }
  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
  
    document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
  }