var Player_1_username=" ";
function addUser(){
    Player_1_username = document.getElementById("Player1Username").value;
    localStorage.setItem("Player1", Player_1_username);
    Player_2_username = document.getElementById("Player2Username").value;
    localStorage.setItem("Player2", Player_2_username);
    window.location="game_page.html";
}