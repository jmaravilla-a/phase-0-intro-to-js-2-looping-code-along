// Code your solutions in this file
let names = ['Lisa', 'Kaitlin', 'Jan']
function writeCards(names, birthday) {
    var thanks = []
    for (var i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        birthday = thanks;
    }
    return thanks;    
}
//`Thank you, ${names[i]}, for the wonderful surprise gift!`