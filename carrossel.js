// Seleciona todos os cartões de imagem
const cardImgs = document.querySelectorAll('.card-img');

cardImgs.forEach(card => {
    const slides = card.querySelectorAll('.mySlides'); // Seleciona todas as imagens dentro do cartão
    const description = card.querySelector('.text'); // Seleciona a descrição
    let currentIndex = 0; // Índice da imagem atual

    // Inicializa a primeira imagem como visível
    slides[currentIndex].style.display = 'block';
    slides[currentIndex].style.opacity = 1; // A primeira imagem começa visível

    // Função para mudar a imagem
    const changeImage = () => {
        // Esmaece a imagem atual
        slides[currentIndex].style.opacity = 0; // Torna a imagem atual invisível

        // Se chegou na última imagem, mostra a descrição e volta para a primeira imagem
        if (currentIndex === slides.length - 1) {
            description.style.display = 'block'; // Mostra a descrição
            setTimeout(() => {
                description.style.display = 'none'; // Oculta a descrição após um tempo
                currentIndex = 0; // Reinicia o índice
            }, 3000); // Tempo que a descrição ficará visível
        } else {
            currentIndex++; // Avança para a próxima imagem
        }

        // Muda a imagem
        setTimeout(() => {
            slides[currentIndex].style.display = 'block'; // Exibe a nova imagem
            slides[currentIndex].style.opacity = 1; // Aumenta a opacidade para mostrar a nova imagem
        }, 500); // Espera 500ms para mudar a imagem
    };

    // Muda a imagem a cada 3 segundos
    setInterval(changeImage, 3000);
});
