    var imagens = ["/images/meme.png", "/images/cinema1.png", "/images/cinemarj.png", "/images/cinemasp.png", "/images/pe$o1.png", "/images/pe$o2.png", "/images/pe$o3.png", "/images/exerc3pt1.png", "/images/exerc3.png"];
    var indiceAtual = 0;

    var imagemElement = document.querySelector('.imagem');
    var botaoProximo = document.getElementById('botaoProximo');
    var botaoVoltar = document.getElementById('botaoVoltar');
    var textElement = document.getElementById('text');

    botaoProximo.addEventListener('click', function() {
    indiceAtual = (indiceAtual + 1) % imagens.length; 
    imagemElement.src = imagens[indiceAtual];
    });

    botaoVoltar.addEventListener('click', function() { 
     indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; 
      imagemElement.src = imagens[indiceAtual]; 
      });

      document.addEventListener('keydown', function(event) { 
          if (event.keyCode === 37) { 
              indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; 
              imagemElement.src = imagens[indiceAtual];     
          } else if (event.keyCode === 39) { 
              indiceAtual = (indiceAtual + 1) % imagens.length; 
              imagemElement.src = imagens[indiceAtual]; 
          } 
      });