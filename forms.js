document.addEventListener('DOMContentLoaded', function() {
    // Abrir o popup do Google Form
    document.getElementById('openGoogleFormPopup').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        document.getElementById('googleFormPopup').style.display = 'block';
    });

    // Fechar o popup quando clicar no "X"
    document.getElementById('closeGoogleFormPopup').addEventListener('click', function() {
        document.getElementById('googleFormPopup').style.display = 'none';
    });

    // Fechar o popup ao clicar fora do conteúdo do popup
    window.addEventListener('click', function(event) {
        var popup = document.getElementById('googleFormPopup');
        var popupContent = document.querySelector('.google-form-popup-content');

        // Verifica se o clique foi fora da área do conteúdo do popup
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
