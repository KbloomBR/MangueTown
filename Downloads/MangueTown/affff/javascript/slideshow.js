        var imagens = ["/images/acordaian.jpeg", "/images/albuquerque.jpeg", "/images/abner.png", "/images/arthur.jpeg", "/images/oaenergia.png", "/images/gustavo.jpeg", "/images/henrique.jpeg"];
        var descricoes = ["IAN <br> <br> Habilidade: Psicólogo de plantas carnívoras", "ALBUQUERQUE <br> <br> Habilidade: segurança de galinheiro", "ABNER <br> <br> Habilidade: Degustador do vrido", "ARTHUR <br> <br> Habilidade: Testador de veneno de gabiru", "ENERGIA <br> <br> Habilidade: criação de energia raduge", "GUSTAVO <br> <br> Habilidade: bolador profissional", "HENRIQUE <br> <br> Habilidade: homicida qualificado"];
        var indiceAtual = 0;
        

        var imagemElement = document.querySelector('.imagem');
        var botaoProximo = document.getElementById('botaoProximo');
        var botaoVoltar = document.getElementById('botaoVoltar');
        var textElement = document.getElementById('text');

        botaoProximo.addEventListener('click', function() {
          indiceAtual = (indiceAtual + 1) % imagens.length; 
          imagemElement.src = imagens[indiceAtual];
          textElement.innerHTML = descricoes[indiceAtual];
      });

      botaoVoltar.addEventListener('click', function() { 
          indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; 
          imagemElement.src = imagens[indiceAtual]; 
          textElement.innerHTML = descricoes[indiceAtual]; 
      });

      textElement.innerHTML = descricoes[indiceAtual];

      document.addEventListener('keydown', function(event) { 
          if (event.keyCode === 37) { 
              indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; 
              imagemElement.src = imagens[indiceAtual]; 
              textElement.innerHTML = descricoes[indiceAtual]; 
          } else if (event.keyCode === 39) { 
              indiceAtual = (indiceAtual + 1) % imagens.length; 
              imagemElement.src = imagens[indiceAtual]; 
              textElement.innerHTML = descricoes[indiceAtual]; 
          } 
      }); 
      
      