const dogs = [
    {name:'Snickers', age:2},
    {name:'hugo', age:8}
]

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55'
    p.style.fontSize = '50px';
}

//Regular
const name = 'Dipendra Kumar';
console.log('Hello I am a % String!', '🎃');
console.log(`Hello, My name is ${name}.`);

//Style
// console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 5px 0.4px 0 blue');

//Warning
console.warn('On Nooooooo');

//Error
console.error('This is wrong Method');

//Info
console.info('Crocodiles eat 3-4 people per year');

//Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('Oh'), 'Something Wrong!');

//Clearing
console.clear();

//Viewing DOM Elements
console.log(p);
console.log(p);

console.clear();

//Grouping together
dogs.forEach(dog =>{
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

//Counting
console.count('hello');
console.count('hello');
console.count('hello');
console.count('hello');

//Timing
// console.time('fetching data');
// fetch('https://gist.github.com/anubhavshrimal/4aeb195a743d0cdd1c3806c9c222ed45')
//     .then(data => data.json())
//     .then(data => {
//         console.timeEnd('fetching data');
//         console.log(data);
//     })

console.table(dogs);

