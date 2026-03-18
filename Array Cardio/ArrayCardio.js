const people = [
    {name:'Dipendra', year:2002},
    {name:'Rahul', year:1998},
    {name:'Mohan', year:2015},
    {name:'Sohan', year:2004},
    {name:'Sikha', year:2002},
];
const comments = [
    {text:'Love This!', id: 1234},
    {text:'Super Good', id:2341},
    {text:'You are the best', id: 9876},
    {text:'Daal Chawal and Bhujiya is my Fav Food Ever', id:8271},
    {text:'Nice Nice Nice!', Id: 56473}
];

//array.prototype.some()
// const isAdult = people.some(function(person){
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 18){
//         return true;
//     }
// });
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 18);

console.log({isAdult});

//array.prototype.every()
const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 18);

console.log({allAdult});

//Arrayprototype.find()
// const comment = comments.find(function(comment){
//     if(comment.id === 9876) return true;
// });
const comment = comments.find(comment => comment.id === 9876);
console.log(comment);
//Array.prototype.findIndex() and Delete id 56473
const index = comments.findIndex(comment => comment.id === 56473);
console.log(index);

// comments.splice(index,1);

const newComments = [
    comments.slice(0,index),
    comments.slice(index+1)
];
// console.table(newComments);
