// Code your solutions in this file
function writeCards(array, eventName){
let eventsArray = [];
for(let i = 0; i<array.length; i++){

    eventsArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
}
console.log(eventsArray);
return eventsArray;
}


function countDown(x){
while(x>=0){
console.log(x);
     x--;
}
}