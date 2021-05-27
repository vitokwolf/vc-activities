// TODO: Create an array with five question objects
var qArray = [
    {
        q: "is sugar sweet",
        a: true
    },
    {
        q: "there is atmosphere on the moon",
        a: false
    },
    {
        q: "Javascript is confusing",
        a: true
    },
    {
        q: "I love this Course",
        a: true
    },
    {
        q: "Do i want to quit?",
        a: false
    }];
// TODO: Create a variable to keep track of the score
var score = 0;

// TODO: Iterate over the questions array and display each question in a confirmation box
var game = qArray.forEach(function (quest) {
    // console.log(quest.q,quest.a);
    var disp = confirm(quest.q);

    // TODO: Check the user's answer against the correct answer
    if (disp === quest.a) {

        // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
        alert('correct');
        score++;
    }
    else {
        alert('wrong');
        if (score > 0) {
            score--;
        }
    };
});

// TODO: At the end of the game, alert the user with the final score
alert('your score is ' + score);

// refresh on confirm to play again(extra)
var again = confirm('Do you play again?');
if (again === true) {
    document.location.reload()
};