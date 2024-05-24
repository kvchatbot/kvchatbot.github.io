var userinput;
var chatbotresponse;
var greetings = ["Kamusta ka?, ano ang maitutulong ko sayo?","Magandang araw, ayos ka lang ba?","Maligayang pagpunta sa website na ito, kamusta ka?","Kamusta ang araw mo? Ayos ka lang ba?"];
var running = true;

function random(min, max) {
    // Swap min and max if min is greater than max
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function display(x) {
    $(x).css("display","block");
    $('#container').css("filter","blur(10px)");
}

function closeDisplay(x) {
    $(x).css("display","none");
    $('#container').css("filter","blur(0px)");
}

function sanitize(input) {
    var tempDiv = document.createElement('div');
    tempDiv.textContent = input;
    return tempDiv.innerHTML;
}

$("document").ready(function () {
    running ? $("#container").css("display","block") : $("#maintenance").css("display","block");
    TimedReponse("KVBot: " + greetings[random(0,greetings.length - 1)]);

    $("#main-button").click(() => {
        if ($('#main-input').val() != "") { // check if the input is empty
            userEnteredInput();
        }
    });

    $("#main-input").on('keypress', (key) => {
        if(key.which == 13) { // if enter is pressed while the input is selected
            if ($('#main-input').val() != "") { // check if the input is empty
                userEnteredInput();
            }
        }
    });

});


// essential functions

function userEnteredInput() {
    userinput = sanitize($("#main-input").val());
    $("#chat-box").append('<span class="user-text">User: ' + userinput + '</span><br>');

    $("#main-input").val(""); // clears input
    TimedReponse("KVBot: " + setResponse(userinput));
}