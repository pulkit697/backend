/******************** CREATING OBJECT ***************/
const person = {
    name: 'Groot',
    age: 14,
    greet() {
        console.log('Hi, I am ',this.name);
    },
    greet2 : () => {
        console.log('greeting again..');
        // here 'this' will be considered as global scope
        // hence this.name is going to be undefined
    },
    greet3 : function(){
        console.log(this.name, "in greet 3");
        // 'this' will work here with object's scope
    }
}

console.log(person);
person.greet();

/*********  Arrays **************/
const hobbies = ['dance','sing'];
console.log(hobbies);
for (let hobby of hobbies)
    console.log(hobby);

console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
// spread operator
// spreads the things inside the array or the object
// and pass them to the outer thing ([ ]  or  { })
const copied_hobbies = [...hobbies];
console.log(copied_hobbies);

// here it is a rest operator
// it bundles all the arguments passed into a single array
// it is opposite of spread operator
const restOperator = (...args) => args;
console.log(restOperator(1,3,5,6,7));

// destructuring
// this destructures the passed object and passes only the asked key fromt he object to the function
const fun = ({name}) => {
    console.log(name);
}

// we passed whole person object, but only person's name is sent to the function
fun(person);

// we can use that destructuring this way also
// the variable names should be same as that of key in object
const { name, age } = person
console.log("The person's name is ", name, "and his age is ",age);
// using destructing in arrays
// heer we can use any name 
// array's first n elements are going to be returned
const [hobby1] = hobbies
console.log(hobby1);

/* Types of declaring functions */
const fun1 = function(text){
    console.log(text + ' from function 1');
}

const fun2 = (text) => {
    console.log(text+' from function 2');
}

function fun3(text){
    console.log(text,+' from function 3');
}

/* if returning single line */
const fun4 = (text) => text + ' from function 4';

fun1('hello');
fun2('hello');
fun3('hello');
console.log(fun4('hello'));