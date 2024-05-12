// Primitive types are stored in Stack, we get copy of the variable
// Non-Primitive types are stored in Heap, we get the reference of the variable(OG variable)

// inside stack if we declare
// let a=13;
// let b=a;
// b=14;
// console.log(a); 13
// console.log(b); 14
// as copy of "a" was passed that is why value of "a" didn't change

// inside heap
// let a={
    // name : "a",
    // id:13,
// }

// let b=a
// b.id=14;
// console.log(b.id) // 14
// console.log(a.id) // 14

// "a" was a reference poiting to a memory in the heap and when "b" was given the value of "a" it also started to point to the same memory location, hence if u change the value with "b" as "a" is also pointing to the same location, it also prints the same value.