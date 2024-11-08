// Popup do serviço "Saiba Mais"
const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Evento para abrir o popup "Saiba Mais"
openPopup.addEventListener("click", function() {
    popup.style.display = "block";
});

// Evento para fechar o popup "Saiba Mais"
closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});

// Popup do contrato
const openContractPopup = document.getElementById("openContractPopup");
const contractPopup = document.getElementById("contractPopup");
const closeContractPopup = document.getElementById("closeContractPopup");

// Evento para abrir o popup do contrato
openContractPopup.addEventListener("click", function() {
    contractPopup.style.display = "block"; // Exibe o popup
});

// Evento para fechar o popup do contrato
closeContractPopup.addEventListener("click", function() {
    contractPopup.style.display = "none"; // Esconde o popup
});

// Fechar popups ao clicar fora deles
window.addEventListener("click", function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    } else if (event.target == contractPopup) {
        contractPopup.style.display = "none";
    }
});
