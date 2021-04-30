
const reviews =[
    ["Amazing graze board! Very well presented and top quality fresh ingredients Will definitley try again and highly recommend"],
    ["The best grazing board ever, delivered with a smile"],
    ["Absoloutely delicious cannot fault the chef!"],
    ["Will definately be purchasing again this was absoloutly amazing."],
    ["The most perfect board"],
    ["The most difficult thing is not to eat it all in one go!"],
    ["Well done Rozi! Everything in our box was truly delicious"],
    
];

function newReviews() {
var randomNumber = Math.floor(Math.random() * (reviews.length));
document.getElementById('text').innerHTML = reviews[randomNumber]

}

