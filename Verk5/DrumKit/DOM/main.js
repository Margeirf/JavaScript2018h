// #1. id="age-table"
let table = document.getElementById('age-table') // 

// #2. All label elements inside that table
table.getElementsByTagName('label') //Leitar í table og finnur alla með sama label

// #3. The first td in that table (with the word "Age").
table.getElementsByTagName('td')[0] //Leitar í table og finnur það fyrsta (0) mep tagName tb

// #4. The form with the name "search".
// assuming there's only one element with name="search"
let form = document.getElementsByName('search')[0] //Skoðar öll nöfn og finnur fyrsta (0) með nafnið "search"

// #5. The first input in that form.
form.getElementsByTagName('input')[0] //Leitar í form og finnur fyrsta input (0)

// #6. The last input in that form.
let inputs = form.querySelectorAll('input') // leitar í öllum input
inputs[inputs.length-1] // tekur seinasta input