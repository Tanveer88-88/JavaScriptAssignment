function city_Country(city,country) 
{
   let temp="\""+city+","+country+"\"";
   return temp;
}

console.log(city_Country("Karachi","Pakistan"));
console.log(city_Country("Lahore","Pakistan"));
console.log(city_Country("NewYork","US"));