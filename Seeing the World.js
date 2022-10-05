var locArray=["Kashmir","Multan","Rawalpinidi","Abbotabad","Dir"];
//original order
console.log("---Original Order---")
locArray.forEach(element => {
    console.log(element);
});

//alphabatical order
console.log("---alphabatical Order---")
const tempArray=locArray.slice();
tempArray.sort();
tempArray.forEach(element => {
    console.log(element);
});
//Original order
console.log("\n---Original Order---")
locArray.forEach(element => {
    console.log(element);
});
//reverse alphabetical
console.log("\n--Reverse Alphabetical---");
const tempArray2=locArray.slice();
tempArray2.reverse();
tempArray2.forEach(element => {
    console.log(element);
});