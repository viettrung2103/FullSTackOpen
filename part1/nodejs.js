//const and let
//const create unchangeable variable
// let create changeable variable in in block scope
const x = 1;
let y = 5;
console.log(x,y);
y += 10;
console.log(x,y);
y = 'somewhat';
console.log(x,y);

//Array
const arr = [1,-1,3];

arr.push(5);
console.log(arr); //[1,-1,3,5]
console.log(arr.length); //4
console.log(arr[1]);

arr.forEach(value => {
  console.log(value);
}) // 1, -1 ,3,5 are printed seperately in each own line

for ( const i of arr) {
  console.log(i);
}
console.log('New Array method')
const arr1 = [1,-1,3];
const arr2 = arr1.concat(5);
console.log(arr1);// arr1 and arr2 are two different array
console.log(arr2);//1,-1,3,5

const arr3 = arr1.map(value => value*2);
console.log(arr3); //2,-2,6

const arr4 = arr1.map(value=>`'<li>'${value}'</li>'`)
console.log(arr4);
//destructor
console.log('destructor');
const t = [1,2,3,4,5];
const [first,second,...newArr] = t;
console.log(first);
console.log(second);
console.log(newArr);
//Object
console.log('Object');
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed