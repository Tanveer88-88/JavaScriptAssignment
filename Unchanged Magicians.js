function show_magicians(magicianslist)
{
    magicianslist.forEach(element => {
    console.log(element);
  });
}

function make_great(magicianslist)
{
    const newArr = magicianslist.map(myFunction)

    function myFunction(val) {
      return val+" The Great";
    }
    return newArr;
} 
var magicians=["zarkoon","Hamoon","zakoota","Harbour"];
var modArray=make_great(magicians);
console.log("Unchange Array");
show_magicians(magicians);
console.log("\nModified Array");
show_magicians(modArray);