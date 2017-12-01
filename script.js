var quotes = [
   ["In the end, it's not the years in your life that count. It's the life in your years.", "Abraham Lincoln"],
   ["Be yourself, everyone else is already taken.", "Oscar Wilde"],
   ["Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", "Martin Luther King Jr."],
   ["If you don't stand for something you will fall for anything.", "Gordon A. Eadie"],
    ["How wrong it is for a woman to expect the man to build the world she wants, rather than to create it herself.", "Anais Nin"],
    ["I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.", "Mark Zuckerberg"],
    ["A business has to be involving, it has to be fun, and it has to exercise your creative instincts.", "Sir R. Branson"]
    ["Life is not fair; get used to it.", "Bill Gates"],
    ["Design is not just what it looks like and feels like. Design is how it works.", "Steve Jobs"],
    ["When something is important enough, you do it even if the odds are not in your favour.", "Elon Musk"],
    ["You don't learn to walk by following rules. You learn by doing, and by falling over.", "Sir R. Branson"],
    ["Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.", "Jack Ma"]
];

var colors = [
   ["#3cd47d", "#27ae60"],
   ["#22cba9", "#16a085"],
   ["#e74c3c", "#c0392b"],
   ["#9b59b6", "#8e44ad"],
   ["#66cc66", "#17ad49"],
   ["#48a588", "#308e6e"],
   ["#4F82C4", "#2c65c4"]
]


function randomNum(e) {
    return Math.floor(((Math.random() * e.length) + 1) - 1);
}

function randomBackgroundColor() {
    var ranNum = randomNum(colors);
    return colors[ranNum];
}

function randomQuote() {
    var ranNum = randomNum(quotes);
    return quotes[ranNum];
}

var card = document.getElementById('card');
var cardText = document.getElementById('quoteText');
var author = document.getElementById('author');
var authorText = document.getElementById('authorText');
var link = document.getElementById("tweetQuote");
card.onclick = function () {
    var ranColor = randomBackgroundColor();
    card.style.backgroundColor = ranColor[0];
    author.style.backgroundColor = ranColor[1];

    var ranText = randomQuote();
    authorText.innerHTML = ranText[1];
    cardText.innerHTML = ranText[0];



    link.onclick = function () {

        var currentQuote = "https://twitter.com/intent/tweet?text=" + ranText[0] + " - " + ranText[1];

        window.open(currentQuote,"-blank");

    }

}