// When the user clicks the Pokemon, open the modal 
marker.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Hide map
$('.map').hide();
// Show map
$('.map').show();

// Hide Battle Screen
$('.battleScreen').hide();
// Show Battle Screen
$('.battleScreen').show();

// Hide Victory Screen
$('.victoryScreen').hide();
// Show Victory Screen
$('.victoryScreen').show();

// Hide Defeat Screen
$('.defeatScreen').hide();
// Show Defeat Screen
$('.defeatScreen').show();