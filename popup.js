
// Abre o popup
document.getElementById('openPopup').onclick = function() {
    const popup = document.getElementById('popup');
    popup.classList.add('show'); // Adiciona a classe para mostrar o popup

    // Espera um tempo para aplicar a classe de escala após exibir o popup
    setTimeout(() => {
        popup.querySelector('.popup-content').style.transform = 'scale(1)'; // Aplica a escala normal
    }, 0); // Aguarda o próximo ciclo de renderização
}

// Fecha o popup
document.getElementById('closePopup').onclick = function() {
    const popup = document.getElementById('popup');
    popup.querySelector('.popup-content').style.transform = 'scale(0.8)'; // Diminui a escala antes de esconder

    // Remove a classe após a animação
    setTimeout(() => {
        popup.classList.remove('show'); // Remove a classe para ocultar o popup
    }, 300); // Tempo igual ao da transição
}

// Fecha o popup se o usuário clicar fora dele
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.querySelector('.popup-content').style.transform = 'scale(0.8)'; // Diminui a escala antes de esconder
        
        // Remove a classe após a animação
        setTimeout(() => {
            popup.classList.remove('show'); // Remove a classe para ocultar o popup
        }, 300); // Tempo igual ao da transição
    }
}






// Abre o popup do contrato
document.getElementById('openContractPopup').onclick = function() {
    document.getElementById('contractPopup').style.display = 'flex';
}

// Fecha o popup do contrato
document.getElementById('closeContractPopup').onclick = function() {
    document.getElementById('contractPopup').style.display = 'none';
}

// Fecha o popup ao clicar fora dele
window.onclick = function(event) {
    const popup = document.getElementById('contractPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}







