player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Turno de pergunta " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de respota " + player2_name;

function send() {

    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Palavras em letras minusculas = " + word);

    if (word.length < 5) {
        return (document.getElementById("msg-label").innerHTML = "Por-favor digite uma palavra com cinco letras, ou eu te bano para sempre e pego seu ip")
    }

    chartAt1 = word.chartAt(1);
    console.log(chartAt1);

    length_divide_2 = Math.floor(word.length / 2);

    chartAt2 = word.chartAt(length_divide_2);
    console.log(chartAt2);

    length_minus_1 = word.length - 1;

    chartAt3 = word.chartAt(length_minus_1);
    console.log(chartAt3);

    remove_chartAt1 = word.replace(chartAt1, "_");

    remove_chartAt2 = remove_chartAt1.replace(chartAt2, "_");

    remove_chartAt3 = remove_chartAt2.replace(chartAt3, "_");
    console.log(remove_chartAt3);

    question_word = "<h4 id='word_display'>.P" + remove_chartAt3 + "</h4>";
    input_box = "<br> Resposta: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {

    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("resposta em letras minusculas CARAMBA" + answer);

    if (answer == word) {
        if (answer_turn = "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;

        }
    }
    if (question_turn = "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "turno de perguntas " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "turno de perguntas " + player1_name;

    }


    if (answer_turn = "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "respostas " + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "turno de respostas " + player1_name;
    }
    document.getElementById("output").innerHTML ="";
}



