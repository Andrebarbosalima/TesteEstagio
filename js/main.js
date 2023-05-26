 
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        const personagensDiv = document.getElementById('personagens');

        
        data.results.forEach(personagem => {
        
          const personagemDiv = document.createElement('div');
          personagemDiv.classList.add('personagem');

         
          const nome = document.createElement('h2');
          nome.textContent = personagem.name;

          const altura = document.createElement('p');
          altura.textContent = `Altura: ${personagem.height} cm`;

          const peso = document.createElement('p');
          peso.textContent = `Peso: ${personagem.mass} kg`;

          const corCabelo = document.createElement('p');
          corCabelo.textContent = `Cor do Cabelo: ${personagem.hair_color}`;

          
          personagemDiv.appendChild(nome);
          personagemDiv.appendChild(altura);
          personagemDiv.appendChild(peso);
          personagemDiv.appendChild(corCabelo);

         
          personagensDiv.appendChild(personagemDiv);
        });
      })
      .catch(error => console.log(error));