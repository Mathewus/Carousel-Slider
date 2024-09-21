
let slideIndex = 0; // slideIndex representa o valor a ser atualizado sempre que o usuário clica para passar o slide. E esse valor é passado como argumento sempre que a função "mostrarSlide" é chamada.

mostrarSlide(slideIndex);

function mostrarSlide(n) {

  let carrossel = document.querySelector(".carrossel"); // Selecionando o carrossel de slides
  const slides = document.querySelectorAll(".slide"); // Selecionando todos os slides
  let primeiroElemento = slides[0]; // Selecionando primeiro slide para mover
  let ultimoElemento = slides[9]; // Selecionando último slide para mover


  if (n < 0) { // Verificar se o parâmetro n que corresponde ao slideIndex é menor que 0

    slideIndex = 0; // Se a condição for verdadeira slideIndex receberá 0

    carrossel.insertBefore(ultimoElemento, primeiroElemento); // Mover o ultimo elemento para antes do primeiro elemento

    carrossel.classList.remove("moving1"); // Removendo a 1º classe de animação do movimento dos slides
    carrossel.classList.remove("moving2"); // Removendo a 2º classe de animação do movimento dos slides
    carrossel.offsetWidth; 
    // O comando "offsetWidth" serve para retornar a largura atualizada de um elemento, e para isso ele precisa recalcular todo o layout deste elemento, renderizando (exibindo na tela) novamente o mesmo e reiniciando as animações que foram adicionadas a ele.

    carrossel.classList.add("moving2");
  }

  if (n > 1) { // Verificar se o parâmetro n que corresponde ao slideIndex é maior que 1

    slideIndex = 1; // Se a condição for verdadeira slideIndex receberá 1

    carrossel.appendChild(primeiroElemento); // Mover o primeiro elemento para o final da lista de elementos do seu elemento pai, no caso o carrossel

    carrossel.classList.remove("moving2"); // Removendo a 2º classe de animação do movimento dos slides
    carrossel.classList.remove("moving1");// Removendo a 1º classe de animação do movimento dos slides
    carrossel.offsetWidth;
    carrossel.classList.add("moving1");
  }

  let movimento = slides[0].offsetWidth * slideIndex; // Multiplicando o valor de slideIndex vezes a largura do slide, para mover o carrossel sempre com base nesse valor.

  carrossel.style.transform = `translateX(${-movimento}px)`; // Movendo o carrossel para esquerda se o valor for negativo e para direita se for positivo, nesse caso o valor do parâmetro "n" influência no cálculo. 

}

function passarSlide(n) { // função sendo chamado pelo atributo "onclick" do HTML

  // Somando o valor atual de SlideIndex com o valor do parâmetro "n" e passando para slideIndex novamente
  mostrarSlide(slideIndex = slideIndex + n); // ou (carrossel += n);

}

