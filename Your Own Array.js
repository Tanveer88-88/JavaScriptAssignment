var listOfObjects = [];
var mylist=["Gli","MG","KiaSportage","Bmw"];
for(var i=0;i<=mylist.length;i++)
    {
        myFunction(mylist[i]);
    }
function myFunction(element)
{
    if(element=="Gli")
    {
        console.log("I own a "+element);
    }
    if(element=="MG")
    {
        console.log(element+" price gets very heigh");
    }
    if(element=="KiaSportage")
    {
        console.log(element+" looks are very good");
    }
    if(element=="Bmw")
    {
        console.log(element+" is a classic car");
    }
}