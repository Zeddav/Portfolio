// Ouvrir la pop-up avec l'image agrandie
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Fermer la pop-up
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
