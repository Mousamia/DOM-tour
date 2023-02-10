// 1.Where to add
console.log('appending child');
const holder = document.getElementById('container')
// console.log(holder);


// 2.What to add

const Ams = document.createElement('div')
Ams.innerHTML = '<h3>Agun Jhora Fagun Rate Hole TUmi Songi</h3>'

// creating another element

const newItem = document.createElement('span')
newItem.innerText = "I am a span special text";
// console.log(Ams);
// console.log(Ams.childNodes)
// console.log(Ams.childNodes[0].childNodes);

// 3. adding


holder.appendChild(Ams);
holder.appendChild(newItem);