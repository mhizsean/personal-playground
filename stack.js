// palindrome*****



var letters = [];
var word = "bob"
var rword = ""

// put letters of word into statck
// === do this by using a for loop
for (var i = 0; i < word.length; i++)  {
    letters.push(word[i]);
}

// pop off the stack in reverse'
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    // alert(word + " is a palidrome")
    console.log(word + " is a palidrome")
} else {
    console.log(word + " is not a palidrome")
}

// const CheckWord = (str) => {
//    let letters = []

//    return true
// }


// second method
function isPalidrome(s) {
    // split = to put string into an array after making a word individual character
    let splitArr = s.split()

    console.log(splitArr)
    // reverse
    // join
    console.log(s)
}