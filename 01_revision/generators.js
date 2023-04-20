// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.
// 

function* simpleGenerator() {
    console.log('Before 1');
    yield 1
    console.log('After 1');
    console.log('Before 2');
    yield 2
    console.log('After 2');
    console.log('Before 3');
    yield 3
    console.log('After 3');
}

function* generateId() {
    let id = 1;
    while(true) {
        const inc = yield id; // returns parameter passed to next()
        if(inc) {
            id += inc;
        } else {
            id++;
        }
    }
}

const generatorObject = simpleGenerator();
const generatorObject2 = simpleGenerator();
console.log(generatorObject.next()); // { value: 1, done: false }
console.log(generatorObject.next());
console.log(generatorObject2.next());
console.log(generatorObject2.next());

const id = generateId();
console.log(id.next());
console.log(id.next(5));
console.log(id.next(10)); // yield returns this value passed to next()

console.log(id.return(10)); // value = 10 done = true


// iterables - for/of loop
for(variable of generatorObject) {
    // 
    console.log('var',variable);
}

let obj = {name: 'Sumit', id: 123}
console.log(Object.keys(obj));

//? for in loop - used to iterate through object
for(key in obj) {
    console.log(key);
}

