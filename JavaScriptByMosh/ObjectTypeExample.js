
let number ={value:20};

function add(number){
    number.value = 40;
}

add(number);
console.log(number.value);



//we can also add properties dynamically to the object like if I have a user object which has a fields like
// username, firstName,lastName, and if I want to add the properties dynamically then it's possible at run time, but
//when it comes to C#  or Java , we have to modify as part of class file where we need to add that property

let User = {
    username:'rakesh',
    firstName:'Rakesh',
    lastName:'Y',
    fun : function(){
        console.log('this is function insdie user defined object');
    }
}


console.log("User Object is =>", User);

User.address = 'Mudigonda Mandal, VIllage';

console.log("After update is =>", User);


//if we want to delete some data from the objects then we can use the below syntax

delete User.firstName;

console.log("After deleted the data", User);




//for loops in javascript

for(let key in User){
    if(typeof User[key] !== 'function')
    console.log(key);
}

let keys = Object.keys(User);
console.log("All Keys are \n", keys);
let isAvailable = keys.includes('usernames');
console.log("is it availablel", isAvailable);