//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.//
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var magicians = ['Hania', 'Ajmal', 'Kashif', 'Yousuf'];
// Call make_great() to modify the magicians array
magicians = make_great(magicians);
// Call the function to show the modified magicians
show_magicians(magicians);
