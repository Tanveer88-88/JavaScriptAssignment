//Tests for equality and inequality with strings
let temp="Hello";
console.log(temp=="Hello");
console.log(temp=="Hell");

//Tests using the lower case function
console.log(temp==temp.toLowerCase());

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1=15;
let num2=23;

if(num1==num2)
{
    console.log("eqyality test");
}

if(num1!=num2)
{
    console.log("inequality test");
}

if(num2>num1)
{
    console.log("greater than test");
}

if(num1<num2)
{
    console.log("less than test");
}

if(num2>=num1)
{
    console.log("grater than equal than");
}

if(num1<=num2)
{
    console.log("less than equal to");
}

if((num1<num2)&&(temp=="Hello"))
{
    console.log("And test");
}

if((num1<num2)||temp=="Hello")
{
    console.log("Or test");
}

let temparry=["str1","str2","str3"];
if(temparry.includes("str2"))
{
    console.log("array contains element");
}

const notIncludesD = !temparry.includes("str4");
console.log(notIncludesD);




