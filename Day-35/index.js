//collection of multiple data in one container

//we can store n number values

let a1=[23,45,67,89]

//length (count)  //lenth starts  1
//array index:  position  starts from 0

console.log(a1.length);

console.log(a1[3]);

//push   end of node connect
//first   unshift

a1.push(34,78,90)
console.log(a1);

a1.unshift(100,101);
console.log(a1);


//pop()   (last element delete)
//shift()  (First element will be delete)

a1.pop();
console.log(a1)  //delete 90

a1.shift()
console.log(a1)  //100 will be delete


//slice method  X   delete(1230)   slice()

