var Player1_score = 0;
var Player2_score  = 0;
var number1 = 0
var number2 = 0
var actual_number = 0

Player1_user = localStorage.getItem("Player1");
Player2_user =  localStorage.getItem("Player2");
console.log(Player1_user);
document.getElementById("Player_1_name").innerHTML = Player1_user;
document.getElementById("Player_2_name").innerHTML = Player2_user;

document.getElementById("player_1_score").innerHTML = Player1_score;
document.getElementById("player_2_score").innerHTML = Player2_score;


document.getElementById("Player_question").innerHTML = "Question turn: " +  Player1_user;

document.getElementById("Player_answer").innerHTML = "Answer turn: " +  Player2_user;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_number = parseInt(number1) * parseInt(number2);
    console.log(actual_number);
    qustion_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box>"
    check_button = "<br> <button class='btn btn-info'> check </button";
    row = qustion_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").innerHTML = "";
    document.getElementById("number2").innerHTML = "";
}
